"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Compass, ArrowUpRight } from "lucide-react";
import { SHOWCASE_PROJECTS, ShowcaseProject } from "../data/projects-showcase";

export default function CurveFlowCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [activeProject, setActiveProject] = useState<ShowcaseProject>(SHOWCASE_PROJECTS[0]);
  const [isAccelerating, setIsAccelerating] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  // Interaction & Physics state stored in refs for 60/120fps requestAnimationFrame loop
  const offsetRef = useRef(0);
  const velocityRef = useRef(-1.2); // Base continuous autoplay: negative = RIGHT TO LEFT
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);
  const dragDistRef = useRef(0);
  const isHoveredRef = useRef(false);

  // 5 full repetitions of the 6 showcase projects = 30 cards for deep endless tunnel
  const REPEAT_COUNT = 5;
  const ALL_CARDS: { project: ShowcaseProject; globalIndex: number; projectIndex: number }[] = [];
  for (let r = 0; r < REPEAT_COUNT; r++) {
    SHOWCASE_PROJECTS.forEach((p, idx) => {
      ALL_CARDS.push({
        project: p,
        globalIndex: r * SHOWCASE_PROJECTS.length + idx,
        projectIndex: idx,
      });
    });
  }

  // Responsive card slot dimensions
  const getSlotDimensions = useCallback(() => {
    if (typeof window === "undefined") {
      return { cardWidth: 350, cardHeight: 490, gap: 28, slotWidth: 378 };
    }
    const w = window.innerWidth;
    if (w < 640) {
      return { cardWidth: 260, cardHeight: 380, gap: 18, slotWidth: 278 };
    }
    if (w < 1024) {
      return { cardWidth: 305, cardHeight: 435, gap: 22, slotWidth: 327 };
    }
    return { cardWidth: 350, cardHeight: 490, gap: 28, slotWidth: 378 };
  }, []);

  // Main Animation & Transform Loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let { cardWidth, cardHeight, gap, slotWidth } = getSlotDimensions();
    const setWidth = SHOWCASE_PROJECTS.length * slotWidth; // Width of 1 set of 6 projects

    // Initialize offset near the middle set (set index 2)
    const initialCenterIndex = Math.floor(ALL_CARDS.length / 2); // index 15
    offsetRef.current = -initialCenterIndex * slotWidth;

    let rafId: number;
    let scrollTimeout: NodeJS.Timeout | null = null;
    let prefersReducedMotion = false;
    if (typeof window !== "undefined") {
      prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    const updateTransforms = () => {
      const containerW = container.clientWidth;
      const centerX = containerW / 2;

      let closestDist = Infinity;
      let closestProject = SHOWCASE_PROJECTS[0];

      // Seamless infinite looping wrap:
      // Modulo shifting by exactly setWidth preserves identical card order with ZERO visible jumps
      const minOffset = -setWidth * 3.3;
      const maxOffset = -setWidth * 1.7;
      if (offsetRef.current < minOffset) {
        offsetRef.current += setWidth;
      } else if (offsetRef.current > maxOffset) {
        offsetRef.current -= setWidth;
      }

      // Update each card's 3D transform according to its position relative to center
      ALL_CARDS.forEach((item, i) => {
        const el = cardsRef.current[i];
        if (!el) return;

        // Physical X position of card center
        const cardCenterX = i * slotWidth + offsetRef.current + cardWidth / 2;
        const distFromCenter = cardCenterX - centerX;

        // Normalized distance: 0 at center, ±1 at half-container width
        const normDist = distFromCenter / (containerW * 0.44);
        const absNorm = Math.abs(normDist);
        const sign = Math.sign(normDist);

        // Track active center card for spotlight status
        if (Math.abs(distFromCenter) < closestDist) {
          closestDist = Math.abs(distFromCenter);
          closestProject = item.project;
        }

        // Culling: hide cards far outside the viewport to maximize performance
        if (absNorm > 2.2) {
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
          el.style.transform = `translate3d(${cardCenterX - cardWidth / 2}px, 0, -200px)`;
          return;
        }

        // Smooth Curve Function (Reference Match):
        // 1. Center card (|normDist| < 0.22) has rotation approaching 0 deg, remaining flat and straight.
        // 2. Midway cards curve gently.
        // 3. Outer edge cards rotate and expand into the distinctive tunnel/hourglass silhouette.
        const curveT = Math.pow(Math.min(absNorm, 1.8), 1.55);

        // Rotation (rotateY):
        // Right-side cards (sign > 0) face inward to the left (-rotateY)
        // Left-side cards (sign < 0) face inward to the right (+rotateY)
        // Center card rotation is 0deg (completely straight facing viewer)
        const maxRotateY = 34; // Controlled, non-excessive rotation
        const rotateY = -sign * curveT * maxRotateY;

        // Scale (Hourglass / Tunnel Composition):
        // Center card is 1.0 (undistorted aspect ratio).
        // Side cards expand vertically along the tunnel contour as seen in the reference image.
        const scaleExpansion = 0.32;
        const scale = 1.0 + curveT * scaleExpansion;

        // Perspective Depth (translateZ):
        // Outer cards curve subtly into depth
        const translateZ = -curveT * 70;

        // Smooth opacity falloff at extreme horizons
        const opacity = absNorm > 1.4 ? Math.max(0, 1.0 - (absNorm - 1.4) / 0.6) : 1.0;

        // Apply hardware-accelerated 3D transform
        el.style.opacity = opacity.toFixed(3);
        el.style.pointerEvents = opacity > 0.3 ? "auto" : "none";
        el.style.transform = `translate3d(${cardCenterX - cardWidth / 2}px, -50%, ${translateZ.toFixed(1)}px) rotateY(${rotateY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        el.style.zIndex = String(Math.round(100 - absNorm * 30));
      });

      setActiveProject(closestProject);
    };

    // Render loop
    const animate = () => {
      if (!isDraggingRef.current && !prefersReducedMotion) {
        // Continuous autoplay baseline: RIGHT TO LEFT (-1.2px)
        // Gently slows to -0.35px on card hover to allow reading
        const targetV = isHoveredRef.current ? -0.35 : -1.2;

        // Exponential momentum damping back to continuous baseline speed
        velocityRef.current += (targetV - velocityRef.current) * 0.048;
        offsetRef.current += velocityRef.current;
      }

      updateTransforms();
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    // ========================================================
    // Scroll Interaction (Mouse Wheel & Trackpad)
    // ========================================================
    const handleWheel = (e: WheelEvent) => {
      // Intercept vertical scroll so the carousel accelerates right-to-left without moving the page
      e.preventDefault();

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 0.5) {
        // Scrolling down (delta > 0) accelerates flow to the left (negative velocity)
        velocityRef.current -= delta * 0.085;

        // Velocity clamp
        const maxV = 24;
        velocityRef.current = Math.max(Math.min(velocityRef.current, maxV), -maxV);

        setIsAccelerating(true);
        setSpeedMultiplier(Math.min(Math.max(Math.round(Math.abs(velocityRef.current) / 1.2), 2), 12));

        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsAccelerating(false);
          setSpeedMultiplier(1);
        }, 300);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    // ========================================================
    // Pointer Drag & Touch Handling with Fling Inertia
    // ========================================================
    const handlePointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      lastXRef.current = e.clientX;
      dragDistRef.current = 0;
      container.style.cursor = "grabbing";
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - lastXRef.current;
      offsetRef.current += dx;
      velocityRef.current = dx * 0.65; // Impart fling momentum
      lastXRef.current = e.clientX;
      dragDistRef.current += Math.abs(dx);
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
      container.style.cursor = "grab";
    };

    container.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // ========================================================
    // Resize Handler
    // ========================================================
    const handleResize = () => {
      const dims = getSlotDimensions();
      cardWidth = dims.cardWidth;
      cardHeight = dims.cardHeight;
      gap = dims.gap;
      slotWidth = dims.slotWidth;
      updateTransforms();
    };

    window.addEventListener("resize", handleResize);

    // Visibility Tab Pause
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("pointerdown", handlePointerDown);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [getSlotDimensions, ALL_CARDS.length]);

  // Step Controls (Previous / Next Buttons)
  const nudge = useCallback(
    (direction: "left" | "right") => {
      const { slotWidth } = getSlotDimensions();
      // Left pulls cards right (+ velocity), Right pushes cards left (- velocity)
      const impulse = (direction === "left" ? 1 : -1) * (slotWidth * 0.05);
      velocityRef.current += impulse;
    },
    [getSlotDimensions]
  );

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center select-none overflow-hidden py-1">
      
      {/* ======================================================== */}
      {/* 1. Curved Tunnel Viewport & 3D Stage                      */}
      {/* ======================================================== */}
      <div
        ref={containerRef}
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        className="relative w-full flex-1 min-h-[480px] sm:min-h-[520px] lg:min-h-[570px] cursor-grab active:cursor-grabbing overflow-hidden flex items-center justify-center touch-none"
        style={{
          perspective: "1250px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* Soft atmospheric gradient lighting masks at screen horizons */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-36 lg:w-56 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/75 to-transparent z-40 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-36 lg:w-56 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/75 to-transparent z-40 pointer-events-none" />

        {/* 3D Track Stage */}
        <div
          ref={trackRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {ALL_CARDS.map(({ project, globalIndex, projectIndex }, i) => {
            const numStr = String(projectIndex + 1).padStart(2, "0");

            return (
              <div
                key={`${project.id}-${globalIndex}`}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                onClick={() => {
                  if (dragDistRef.current < 6 && project.link && project.link !== "#") {
                    window.open(project.link, "_blank");
                  }
                }}
                className="absolute top-1/2 left-0 w-[260px] sm:w-[305px] lg:w-[350px] h-[380px] sm:h-[435px] lg:h-[490px] rounded-3xl bg-[#0B1120] border border-slate-200/90 shadow-xl overflow-hidden flex flex-col will-change-transform pointer-events-auto transition-shadow hover:shadow-2xl hover:border-sky-300 group"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Upper Media Image Area (72% height) */}
                <div className="relative w-full h-[72%] overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 305px, 350px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={i < 12}
                  />

                  {/* Soft bottom image gradient for seamless card dock transition */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent" />

                  {/* Top Floating Number Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs text-xs font-mono font-bold text-[#0F172A]">
                    {numStr}
                  </div>

                  {/* Top Floating Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0284C7]/90 backdrop-blur-md shadow-xs text-[11px] font-semibold text-white">
                    {project.category}
                  </div>
                </div>

                {/* Lower Card Dock (28% height) */}
                <div className="relative w-full h-[28%] bg-white px-5 py-3.5 flex flex-col justify-between border-t border-slate-100">
                  <div className="pr-10">
                    <h3 className="font-bold text-[#0F172A] text-base sm:text-lg tracking-tight leading-tight line-clamp-1 group-hover:text-[#0284C7] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-0.5 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tech Stack & Action Arrow */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] font-mono font-semibold text-[#0284C7] line-clamp-1">
                      {project.tags.join(" • ")}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center transition-all group-hover:bg-[#0284C7] group-hover:scale-110 shadow-xs">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. Interactive Spotlight Dock & Controls Bar             */}
      {/* ======================================================== */}
      <div className="relative z-50 max-w-5xl mx-auto px-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B] pt-1">
        
        {/* Left: Active Project Indicator */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] animate-pulse" />
          <span className="font-bold text-[#0F172A]">{activeProject.title}</span>
          <span className="text-slate-300">•</span>
          <span className="text-[#0284C7] font-semibold">{activeProject.category}</span>
          {isAccelerating && (
            <span className="ml-1 text-[10px] font-mono font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
              {speedMultiplier}x Speed
            </span>
          )}
        </div>

        {/* Center: Scroll & Drag Guidance Hint */}
        <div className="hidden md:flex items-center gap-1.5 text-[11px] text-[#94A3B8]">
          <Compass className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>Mouse wheel scroll &amp; drag accelerates curved tunnel flow</span>
        </div>

        {/* Right: Manual Step Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => nudge("left")}
            aria-label="Previous Project"
            className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200/90 text-[#0F172A] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => nudge("right")}
            aria-label="Next Project"
            className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200/90 text-[#0F172A] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
