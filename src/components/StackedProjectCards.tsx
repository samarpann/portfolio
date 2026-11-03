"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import { SHOWCASE_PROJECTS, ShowcaseProject } from "../data/projects-showcase";

export default function StackedProjectCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Track window scroll for subtle depth scaling and darkening of cards underneath
  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {SHOWCASE_PROJECTS.map((project, index) => {
        const numStr = String(index + 1).padStart(2, "0");
        const totalStr = String(SHOWCASE_PROJECTS.length).padStart(2, "0");
        const isLast = index === SHOWCASE_PROJECTS.length - 1;

        // Controlled top offset for sticky stacking deck:
        // Each successive card sticks slightly lower so previous card tabs remain visible
        const desktopTop = 76 + index * 10; // px
        const mobileTop = 60 + index * 6; // px

        // Subtle dynamic depth styling based on scroll
        // The card scales down and dims gently as subsequent cards slide over it
        const cardZIndex = 10 + index;

        return (
          <div
            key={project.id}
            className="sticky w-full transition-all duration-300 ease-out"
            style={{
              top: `clamp(${mobileTop}px, calc(${mobileTop}px + ${index * 4}px + 0.5vw), ${desktopTop}px)`,
              zIndex: cardZIndex,
              marginBottom: isLast ? "0px" : "clamp(100px, 18vh, 180px)",
            }}
          >
            {/* Main Project Card Shell (Sky-Blue Light Theme) */}
            <article className="relative w-full rounded-2xl sm:rounded-3xl lg:rounded-[32px] bg-gradient-to-br from-white via-[#F8FBFE] to-[#EFF6FF] border border-[#BAE6FD]/90 shadow-[0_20px_50px_-15px_rgba(2,132,199,0.15)] overflow-hidden transition-all duration-500 hover:border-[#38BDF8] hover:shadow-[0_25px_60px_-12px_rgba(2,132,199,0.22)] group">
              
              {/* Ambient atmospheric backdrop lighting inside card */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Card Content Grid (2 Columns on Desktop, Vertical on Mobile) */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 xl:gap-10 p-5 sm:p-7 lg:p-8 xl:p-9 items-center">
                
                {/* ======================================================== */}
                {/* Left Column: Project Editorial & Information (5 Cols)   */}
                {/* ======================================================== */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4 sm:space-y-5 lg:space-y-5">
                  
                  {/* Top Meta: Number Pill + Category */}
                  <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-[#0F172A] font-mono text-xs font-bold tracking-wider shadow-xs">
                      {numStr} <span className="text-[#64748B] font-normal">/ {totalStr}</span>
                    </span>

                    <span className="px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0284C7] text-xs font-semibold tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  {/* Middle: Title, Subtitle & Value Proposition */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-tight group-hover:text-[#0284C7] transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-[#475569] text-xs sm:text-sm leading-relaxed font-normal">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Technologies Used (Pills) */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-medium">
                      <Code2 className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white border border-[#BAE6FD] text-[#0F172A] text-xs font-mono font-medium shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Action CTA Button */}
                  <div className="pt-1 sm:pt-2">
                    <a
                      href={project.link || "#"}
                      target={project.link && project.link !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ea5e9] to-[#2563EB] hover:from-[#0369A1] hover:to-[#1D4ED8] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-[0_6px_22px_rgba(2,132,199,0.35)] hover:shadow-[0_8px_28px_rgba(2,132,199,0.5)] active:scale-95 group/btn"
                    >
                      <span>Visit Live Website</span>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#0284C7] flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                        <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                    </a>
                  </div>

                </div>

                {/* ======================================================== */}
                {/* Right Column: High-Impact Project Visual (7 Cols)        */}
                {/* ======================================================== */}
                <div className="lg:col-span-7 h-full w-full">
                  <a
                    href={project.link || "#"}
                    target={project.link && project.link !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block relative w-full h-[190px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[360px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-[#BAE6FD]/80 shadow-xl bg-slate-100 group-hover:border-[#38BDF8] transition-all cursor-pointer"
                  >
                    
                    {/* Next.js Optimized Image with Subtle Hover Zoom */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 680px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={index < 2}
                    />

                    {/* Gradient Overlay for Cinematic Lighting */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                    {/* Top Right Date Stamp Badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-[10px] sm:text-[11px] font-mono text-[#0F172A] shadow-xs">
                      {project.date}
                    </div>

                  </a>
                </div>

              </div>

              {/* Top Accent Rim Light */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
            </article>
          </div>
        );
      })}
    </div>
  );
}

