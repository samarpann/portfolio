"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import StackedProjectCards from "../../components/StackedProjectCards";

export default function OurWorkPage() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#7DD3FC]/30 selection:text-[#0F172A]">
      
      {/* Subtle Atmospheric Ambient Background Lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-gradient-to-bl from-[#BAE6FD]/20 via-[#E0F2FE]/15 to-transparent rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/15 via-[#E0F2FE]/15 to-transparent rounded-full blur-[120px]" />
      </div>

      {/* ======================================================== */}
      {/* 1. Header & Navigation                                   */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-50 pt-3 sm:pt-3.5 pb-3 sm:pb-3.5 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto w-full backdrop-blur-md bg-[#F8FAFC]/80 border-b border-slate-200/50">
        <Navbar />
      </header>

      {/* ======================================================== */}
      {/* 2. Main Page Heading                                     */}
      {/* ======================================================== */}
      <div className="relative z-10 pt-8 sm:pt-12 pb-6 sm:pb-8 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
          Digital Platforms &amp; Intelligent Systems
        </h1>
      </div>

      {/* ======================================================== */}
      {/* 3. Sticky Stacked Project Cards Showcase                 */}
      {/* ======================================================== */}
      <main className="relative z-10 w-full pb-36">
        <StackedProjectCards />
      </main>

    </div>
  );
}
