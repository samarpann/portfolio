"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TechCarousel from "../components/TechCarousel";
import ProjectsShowcase from "../components/ProjectsShowcase";
import ServicesSection from "../components/ServicesSection";
import ExperienceSection from "../components/ExperienceSection";
import WhatsAppChatbotSection from "../components/WhatsAppChatbotSection";
import { ArrowUpRight, Mail, Phone, FileDown } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#7DD3FC]/30 selection:text-[#0F172A] overflow-x-hidden">

      {/* ======================================================== */}
      {/* 1. HERO SECTION (Full Viewport Width, Flush Edges)       */}
      {/* ======================================================== */}
      <section className="relative w-full min-h-screen lg:h-screen min-h-[600px] bg-gradient-to-b from-[#FFFFFF] via-[#F9FBFE] to-[#EDF5FC] flex flex-col justify-between pt-3 sm:pt-4 lg:pt-5 pb-8 sm:pb-12 lg:pb-14 px-5 sm:px-8 lg:px-12 xl:px-16 overflow-hidden z-10">

        {/* ====================================================== */}
        {/* Navbar (Contained Inside Canvas Card at Top)           */}
        {/* ====================================================== */}
        <Navbar />

        {/* ====================================================== */}
        {/* Realistic 3D Silk Wave / Fluid Ribbon Artwork          */}
        {/* (Full-loop, uncropped, balanced composition)           */}
        {/* ====================================================== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Ambient soft blue atmospheric depth glow in upper-right */}
          <div className="absolute top-1/4 right-0 sm:right-6 lg:right-12 w-[550px] h-[550px] bg-gradient-to-bl from-[#38BDF8]/20 via-[#93C5FD]/15 to-transparent rounded-full blur-[110px] pointer-events-none" />

          {/* Dimensional Fluid Silk Waves SVG (Uncropped, graceful fit) */}
          <svg
            className="absolute top-10 sm:top-14 lg:top-16 right-0 sm:right-4 lg:right-8 xl:right-12 w-[72%] sm:w-[62%] lg:w-[52%] xl:w-[46%] max-w-[850px] h-[75%] sm:h-[80%] lg:h-[84%] pointer-events-none"
            viewBox="0 0 1000 850"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Deep Core Blue Fold Gradient */}
              <linearGradient id="silkDeepBlue" x1="450" y1="120" x2="850" y2="650" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.55" />
                <stop offset="35%" stopColor="#2563EB" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.0" />
              </linearGradient>

              {/* Translucent Foreground Petal Gradient */}
              <linearGradient id="silkFrontPetal" x1="200" y1="50" x2="880" y2="750" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.85" />
                <stop offset="30%" stopColor="#BAE6FD" stopOpacity="0.5" />
                <stop offset="75%" stopColor="#7DD3FC" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
              </linearGradient>

              {/* Background Soft Ambient Flow Gradient */}
              <linearGradient id="silkBackFlow" x1="100" y1="0" x2="900" y2="600" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
              </linearGradient>

              {/* Illuminated Silk Edge Rim Light */}
              <linearGradient id="silkRimLight" x1="250" y1="50" x2="800" y2="650" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Layer 1: Ambient background veil spreading across top right */}
            <path
              d="M 240 80 C 460 200 690 120 900 200 C 920 300 840 380 720 340 Z"
              fill="url(#silkBackFlow)"
              opacity="0.8"
            />

            {/* Layer 2: Main sweeping background loop (Complete, smooth outer contour) */}
            <path
              d="M 380 90 C 640 130 840 240 860 440 C 880 620 720 670 560 560 C 420 450 360 260 380 90 Z"
              fill="url(#silkDeepBlue)"
              opacity="0.75"
            />

            {/* Layer 3: Overlapping translucent front fold curl */}
            <path
              d="M 440 140 C 680 180 820 310 780 490 C 740 630 610 590 510 470 C 420 350 400 220 440 140 Z"
              fill="url(#silkFrontPetal)"
              stroke="url(#silkRimLight)"
              strokeWidth="1.25"
            />

            {/* Layer 4: Delicate luminous wave contours tracing the ribbon curves */}
            <path
              d="M 320 460 C 490 320 700 350 880 480"
              fill="none"
              stroke="url(#silkRimLight)"
              strokeWidth="1.5"
              opacity="0.75"
            />

            <path
              d="M 380 500 C 540 380 740 400 880 530"
              fill="none"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth="1"
            />

            <path
              d="M 490 220 C 640 270 760 380 740 500"
              fill="none"
              stroke="rgba(255, 255, 255, 0.85)"
              strokeWidth="1.25"
            />
          </svg>
        </div>

        {/* ====================================================== */}
        {/* Hero Content (Positioned in Lower-Left / Middle)       */}
        {/* ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl lg:max-w-[660px] my-auto py-2 sm:py-4 select-none"
        >
          {/* Top Pill Badge */}
          <div className="inline-block mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-[#0284C7] bg-[#E0F2FE]/90 border border-[#BAE6FD] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              SAMARPAN SINGH • DELHI, INDIA
            </span>
          </div>

          {/* Left-Aligned Main Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.85rem] font-bold text-[#0F172A] tracking-[-0.03em] leading-[1.12]">
              Full Stack Developer{" "}
              <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#0284C7]">
                &amp; MERN Specialist.
              </span>
            </h1>
          </div>

          {/* Description (Directly below heading) */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#64748B] leading-relaxed max-w-lg font-normal">
            Building responsive web applications, business platforms, and internal tools with modern frontend &amp; backend architectures. Skilled in the MERN stack, database design, and high-performance UI engineering.
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-3.5">
            {/* Primary CTA: Glowing Rich Blue Pill Button */}
            <a
              href="#our-work"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#2563EB] hover:from-[#0369A1] hover:to-[#1D4ED8] text-white font-semibold text-xs sm:text-sm shadow-[0_8px_20px_rgba(2,132,199,0.38)] hover:shadow-[0_12px_28px_rgba(2,132,199,0.48)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Resume Download CTA */}
            <a
              href="/Samarpan_Singh_Resume.pdf"
              download="Samarpan_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200/90 hover:border-slate-300 text-xs sm:text-sm font-semibold shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FileDown className="w-4 h-4 text-[#0284C7]" />
              <span>Download Resume</span>
            </a>

            {/* Contact WhatsApp CTA */}
            <a
              href="https://wa.me/918178557544?text=Hello%20Samarpan%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-slate-100/90 hover:bg-slate-200/80 text-[#0F172A] text-xs sm:text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom spacing anchor to keep hero content beautifully centered */}
        <div className="relative z-10 w-full select-none pointer-events-none" />

      </section>

      {/* ======================================================== */}
      {/* 2. ABOUT SECTION (Fits Cleanly Within 100vh + Tech Track) */}
      {/* ======================================================== */}
      <section
        id="about"
        className="relative z-20 min-h-screen bg-white rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4rem] border-t border-slate-200/90 shadow-[0_-20px_50px_-10px_rgba(15,23,42,0.06)] flex flex-col justify-between items-center px-4 sm:px-8 lg:px-16 pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden"
      >

        {/* Subtle Ambient Background inside About section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-25" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-gradient-to-tr from-[#E0F2FE]/40 via-[#BAE6FD]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Main Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-7 my-auto py-8 sm:py-12"
        >
          {/* Top Label */}
          <div className="inline-block">
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.25em] text-[#64748B] uppercase">
              ABOUT SAMARPAN SINGH
            </span>
          </div>

          {/* Balanced Responsive Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.95rem] font-medium sm:font-semibold text-[#0F172A] tracking-tight leading-[1.22] sm:leading-[1.25] max-w-4xl mx-auto">
            I build{" "}
            <span className="font-serif italic font-normal text-[#0F172A]">
              responsive web applications &amp; internal platforms
            </span>{" "}
            that help businesses streamline workflows, scale operations, and deliver seamless digital experiences.
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto font-normal">
            Based in Delhi, India, I specialize in full-stack engineering using MongoDB, Express.js, React.js, Node.js, and modern styling architectures. From enterprise ERP dashboards and gold rate tracking platforms to client e-commerce portals, I bridge thoughtful UI design with resilient backend systems.
          </p>

          {/* Key Quick Stats */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-center">
            <div>
              <span className="font-brand font-extrabold text-2xl sm:text-3xl text-[#0284C7] block">5+</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">Live Platforms</span>
            </div>
            <div className="w-px h-8 bg-slate-200 hidden sm:block" />
            <div>
              <span className="font-brand font-extrabold text-2xl sm:text-3xl text-[#0F172A] block">2+</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">Years Exp</span>
            </div>
            <div className="w-px h-8 bg-slate-200 hidden sm:block" />
            <div>
              <span className="font-brand font-extrabold text-2xl sm:text-3xl text-[#0284C7] block">2nd</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">Hackathon Award</span>
            </div>
          </div>
        </motion.div>

        {/* ====================================================== */}
        {/* Continuous Technologies Carousel (End of About Page)   */}
        {/* ====================================================== */}
        <div className="relative z-10 w-full max-w-7xl mx-auto pt-6 border-t border-slate-100 flex flex-col items-center gap-3">
          <span className="text-[11px] font-mono tracking-widest text-[#94A3B8] uppercase">
            Technical Stack &amp; Core Tools
          </span>
          <TechCarousel />
        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. PROJECTS SHOWCASE (Directly Below Tech Carousel)      */}
      {/* ======================================================== */}
      <ProjectsShowcase />

      {/* ======================================================== */}
      {/* 4. SERVICES / WHAT I BUILD SECTION                       */}
      {/* ======================================================== */}
      <ServicesSection />

      {/* ======================================================== */}
      {/* 5. EXPERIENCE & EDUCATION TIMELINE                       */}
      {/* ======================================================== */}
      <ExperienceSection />

      {/* ======================================================== */}
      {/* 6. WHATSAPP & WORKFLOW SECTION                           */}
      {/* ======================================================== */}
      <WhatsAppChatbotSection />

      {/* ======================================================== */}
      {/* 7. FOOTER                                                */}
      {/* ======================================================== */}
      <footer id="contact" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-brand font-extrabold text-lg text-[#0F172A]">Samarpan Singh</span>
            <span className="text-xs text-[#64748B]">© 2026 Samarpan Singh • Delhi, India.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#64748B]">
            <a href="#about" className="hover:text-[#0F172A] transition-colors">About</a>
            <a href="#our-work" className="hover:text-[#0F172A] transition-colors">Projects</a>
            <a href="#services" className="hover:text-[#0F172A] transition-colors">Capabilities</a>
            <a href="#experience" className="hover:text-[#0F172A] transition-colors">Experience</a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <a
              href="https://github.com/samarpann"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[#0F172A] hover:text-[#0284C7] transition-colors"
              title="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/samarpan-singh-56396836a/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[#0F172A] hover:text-[#0284C7] transition-colors"
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="/Samarpan_Singh_Resume.pdf"
              download="Samarpan_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#0284C7] hover:underline transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
            <a
              href="mailto:samarpansingh17@gmail.com"
              className="inline-flex items-center gap-1.5 text-[#0F172A] hover:text-[#0284C7] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>samarpansingh17@gmail.com</span>
            </a>
            <a
              href="https://wa.me/918178557544"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[#0284C7] hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 8178557544</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
