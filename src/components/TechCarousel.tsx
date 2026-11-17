"use client";

import React from "react";

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

export default function TechCarousel() {
  const technologies: TechItem[] = [
    {
      name: "React.js",
      category: "Frontend Library",
      icon: (
        <svg className="w-5 h-5 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: "Node.js",
      category: "Runtime Backend",
      icon: (
        <svg className="w-5 h-5 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
        </svg>
      )
    },
    {
      name: "Express.js",
      category: "Backend Framework",
      icon: (
        <svg className="w-5 h-5 text-[#0F172A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      )
    },
    {
      name: "MongoDB",
      category: "NoSQL Database",
      icon: (
        <svg className="w-5 h-5 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 2 6 9 6 15c0 3.3 2.7 6 6 6s6-2.7 6-6c0-6-6-13-6-13zm0 17.5c-2.5 0-4.5-2-4.5-4.5 0-3.3 3.5-7.8 4.5-9 1 1.2 4.5 5.7 4.5 9 0 2.5-2 4.5-4.5 4.5z" />
        </svg>
      )
    },
    {
      name: "Redux Toolkit",
      category: "State Management",
      icon: (
        <svg className="w-5 h-5 text-[#764ABC]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.5 12c0 1.93-1.57 3.5-3.5 3.5S9.5 13.93 9.5 12s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5zm5.5 0c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9zm-2 0c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7z" />
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      category: "Modern UI Styling",
      icon: (
        <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-1 3.2-.5 1 .4 1.8 1.2 2.6 2.1 1.4 1.4 3 2.8 6.7 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .8-2 1-3.2.5-1-.4-1.8-1.2-2.6-2.1-1.4-1.4-3-2.8-6.7-2.8zM4 12c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-1 3.2-.5 1 .4 1.8 1.2 2.6 2.1 1.4 1.4 3 2.8 6.7 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .8-2 1-3.2.5-1-.4-1.8-1.2-2.6-2.1-1.4-1.4-3-2.8-6.7-2.8z" />
        </svg>
      )
    },
    {
      name: "JavaScript (ES6+)",
      category: "Core Language",
      icon: (
        <svg className="w-5 h-5 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7 17.5c0-.83.67-1.5 1.5-1.5.83 0 1.5.67 1.5 1.5v.5h-3v-.5zm7.5-6h2v6.5c0 1.1-.9 2-2 2h-1v-2h1v-6.5z" fill="#000" />
        </svg>
      )
    },
    {
      name: "REST APIs",
      category: "API Architecture",
      icon: (
        <svg className="w-5 h-5 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="12" r="3" />
          <path d="M9 12h6" />
        </svg>
      )
    },
    {
      name: "Git & GitHub",
      category: "Version Control",
      icon: (
        <svg className="w-5 h-5 text-[#0F172A]" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    },
    {
      name: "Next.js",
      category: "Full Stack React",
      icon: (
        <svg className="w-5 h-5 text-[#0F172A]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.3 14.4l-4.7-6.2v6.2H9V7.6h1.6l4.7 6.2V7.6h1.6v8.8h-1.6z" />
        </svg>
      )
    },
    {
      name: "HTML5 & CSS3",
      category: "Responsive Web",
      icon: (
        <svg className="w-5 h-5 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 5v14l9 3 9-3V5l-9-3zm6 6h-8v3h7v5l-5 2-5-2v-2h2v1l3 1 3-1v-2H7V6h11v2z" />
        </svg>
      )
    }
  ];

  // Repeat for continuous infinite seamless track
  const loopItems = [...technologies, ...technologies, ...technologies];

  return (
    <div className="w-full relative overflow-hidden py-4 select-none">
      {/* Subtle edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-3 sm:gap-4">
        {loopItems.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)] hover:border-[#38BDF8]/60 hover:shadow-md transition-all cursor-default shrink-0"
          >
            <div className="flex items-center justify-center shrink-0">
              {tech.icon}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-semibold text-[#0F172A] leading-tight">
                {tech.name}
              </span>
              <span className="text-[10px] text-[#64748B] font-mono leading-tight">
                {tech.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
