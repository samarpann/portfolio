"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import ServicesSection from "../../components/ServicesSection";
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  ArrowRight,
  MessageSquare,
  Clock,
  Send
} from "lucide-react";
import { SHOWCASE_PROJECTS } from "../../data/projects-showcase";

export default function ServicesPage() {

  // Numbered Service Inclusion Breakdown (Matching Reference "Included in the Service")
  const serviceInclusions = [
    {
      number: "01",
      title: "Technical Discovery & Schema Design",
      description: "Detailed architecture analysis of requirements, data models, MongoDB schemas, and user workflows to ensure clean, maintainable systems."
    },
    {
      number: "02",
      title: "Custom UI/UX & Interactive Design",
      description: "Pixel-perfect, brand-tailored interfaces crafted with Tailwind CSS, clear typography, intuitive user journeys, and responsive layouts."
    },
    {
      number: "03",
      title: "Full-Stack Engineering & API Integration",
      description: "End-to-end development using React.js, Next.js, Node.js, Express.js, and secure RESTful endpoints with third-party connectivity."
    },
    {
      number: "04",
      title: "Automation & Multi-Channel Workflows",
      description: "Custom WhatsApp business notifications, webhook integrations, and automated lead capture pipelines that streamline operations."
    },
    {
      number: "05",
      title: "Continuous Performance & Code Quality",
      description: "High Google PageSpeed compliance, mobile responsiveness, clean modular components, and modern version control workflows."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#7DD3FC]/30 selection:text-[#0F172A]">
      
      {/* Subtle Atmospheric Ambient Background Lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute -top-32 right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-[#BAE6FD]/30 via-[#E0F2FE]/15 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-32 w-[650px] h-[650px] bg-gradient-to-tr from-[#38BDF8]/18 via-[#E0F2FE]/20 to-transparent rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-5 w-[600px] h-[600px] bg-gradient-to-tl from-[#BAE6FD]/20 via-[#E0F2FE]/15 to-transparent rounded-full blur-[130px]" />
      </div>

      {/* ======================================================== */}
      {/* 1. Header & Navigation                                   */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-50 pt-3 sm:pt-3.5 pb-3 sm:pb-3.5 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto w-full backdrop-blur-md bg-[#F8FAFC]/80 border-b border-slate-200/50">
        <Navbar />
      </header>

      {/* Main Page Content */}
      <main className="relative z-10 w-full">

        {/* ======================================================== */}
        {/* 1. HOMEPAGE SERVICES CARDS SECTION                       */}
        {/* Exact same service cards as displayed on the homepage    */}
        {/* ======================================================== */}
        <ServicesSection />

        {/* ======================================================== */}
        {/* 2. FEATURED PROJECTS ("Selected Collaborations")         */}
        {/* ======================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80">
          
          {/* Eyebrow & Header with Direct Link to /our-work */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <div className="font-mono text-xs sm:text-sm text-[#0284C7] font-bold tracking-wider uppercase mb-2">
                // FEATURED PROJECTS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                Selected Work &amp; Case Studies
              </h2>
            </div>

            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0284C7] hover:text-[#0369A1] group transition-colors"
            >
              <span>View All Projects ({SHOWCASE_PROJECTS.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Horizontal Project Showcase Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHOWCASE_PROJECTS.slice(0, 4).map((project) => (
              <a
                key={project.id}
                href={project.link || "#"}
                target={project.link && project.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group rounded-2xl sm:rounded-3xl p-4 bg-white border border-[#BAE6FD]/80 shadow-[0_10px_30px_-8px_rgba(2,132,199,0.08)] hover:border-[#38BDF8] hover:shadow-[0_20px_40px_-10px_rgba(2,132,199,0.18)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative w-full h-[200px] sm:h-[220px] rounded-xl sm:rounded-2xl overflow-hidden border border-[#BAE6FD]/70 bg-slate-100 mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Hover Arrow Button in Top Right */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 text-[#0F172A] flex items-center justify-center shadow-md group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                    {/* Category Pill in Bottom Left */}
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#64748B] line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Tags Footer */}
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-[#0284C7]">
                  <span>{project.tags.slice(0, 2).join(" • ")}</span>
                  <span className="text-slate-400 font-sans text-[10px]">{project.date}</span>
                </div>
              </a>
            ))}
          </div>

        </section>

        {/* ======================================================== */}
        {/* 3. SERVICE DETAILS ("Included in the Service")           */}
        {/* ======================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Heading, Explanation & Aesthetic Visual */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="font-mono text-xs sm:text-sm text-[#0284C7] font-bold tracking-wider uppercase">
                // ENGINEERING STANDARDS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                Development <br className="hidden sm:inline" />
                Process
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                From initial technical discovery to final deployment, every project is delivered complete, performant, and maintainable.
              </p>

              {/* Aesthetic Card */}
              <div className="relative w-full h-[180px] sm:h-[220px] rounded-2xl overflow-hidden border border-[#BAE6FD] shadow-md bg-gradient-to-tr from-[#E0F2FE] to-[#BAE6FD]/30 p-6 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#0284C7]">
                  <Layers className="w-5 h-5 text-[#0284C7]" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#0284C7] font-bold uppercase tracking-wider">CODE QUALITY</span>
                  <p className="text-sm text-[#0F172A] font-bold mt-1 leading-snug">
                    Robust API validation, responsive mobile layouts, and modern Git workflows across all platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Numbered List of Service Features */}
            <div className="lg:col-span-7 divide-y divide-slate-200/80">
              {serviceInclusions.map((item) => (
                <div 
                  key={item.number}
                  className="py-6 sm:py-8 first:pt-0 last:pb-0 group transition-all duration-200"
                >
                  <div className="flex items-start gap-5 sm:gap-7">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-[#0284C7] group-hover:scale-110 transition-transform block mt-0.5">
                      {item.number}
                    </span>
                    <div className="space-y-1.5 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* ======================================================== */}
        {/* 4. CONTACT / CTA SECTION ("Let's Make It Real")          */}
        {/* ======================================================== */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          
          {/* Sky-Blue / Light-Blue Themed CTA Surface */}
          <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#E0F2FE] via-[#BAE6FD]/40 to-[#F0F9FF] border border-[#7DD3FC]/80 shadow-[0_25px_60px_-15px_rgba(2,132,199,0.2)] p-6 sm:p-10 lg:p-14 overflow-hidden">
            
            {/* Ambient Interior Glows */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#38BDF8]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-white/60 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading & Description */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#BAE6FD] shadow-2xs text-[#0284C7] text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>START A COLLABORATION</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
                  Let&apos;s Build Something <br />
                  <span className="font-serif italic font-normal text-[#0284C7]">
                    Remarkable &amp; Scalable.
                  </span>
                </h2>

                <p className="text-base text-[#475569] leading-relaxed max-w-lg">
                  Whether you need a full-stack web application, custom admin CRM, or backend API integration, I am available to discuss requirements and deliver.
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <a
                    href="https://wa.me/918178557544?text=Hello%20Samarpan%2C%20I%20would%20like%20to%20discuss%20a%20project%20or%20job%20opportunity."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ea5e9] to-[#2563EB] hover:from-[#0369A1] hover:to-[#1D4ED8] text-white font-bold text-sm shadow-[0_6px_22px_rgba(2,132,199,0.38)] hover:shadow-[0_8px_28px_rgba(2,132,199,0.5)] active:scale-95 transition-all group"
                  >
                    <span>Connect on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <Link
                    href="/our-work"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#0F172A] font-semibold text-sm shadow-xs transition-colors"
                  >
                    <span>Explore Projects</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Direct Quick Contact Capsule Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-white/95 backdrop-blur-md border border-[#BAE6FD]/90 shadow-xl space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="font-mono text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                      DIRECT CONTACT
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Available Now
                    </span>
                  </div>

                  <div className="space-y-3 text-sm text-[#475569]">
                    <div className="p-3.5 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD]/60 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                        <MessageSquare className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0F172A] block text-sm">Direct WhatsApp</span>
                        <span className="text-xs text-[#64748B]">+91 81785 57544</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#0F172A] text-white flex items-center justify-center shrink-0">
                        <Clock className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="font-bold text-[#0F172A] block text-sm">Email Inquiries</span>
                        <span className="text-xs text-[#64748B]">samarpansingh17@gmail.com</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="mailto:samarpansingh17@gmail.com"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0F172A] hover:bg-[#0284C7] text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
                  >
                    <span>Send an Email</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}
