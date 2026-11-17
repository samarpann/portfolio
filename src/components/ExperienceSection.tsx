"use client";

import React from "react";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, FileDown } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Swastik Jewels",
      period: "May 2026 – Present",
      location: "Delhi, India",
      points: [
        "Developing and maintaining business websites, CRM workflows, and digital products for jewellery and other business domains.",
        "Working across frontend interfaces, backend services, API integrations, database operations, and deployment workflows.",
        "Key platforms delivered: Swastik Jewels, Swastik CRM, RK Steel Company, FundSphere, and Dr. Nidan."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"]
    },
    {
      role: "Full Stack Developer",
      company: "Orange Technology",
      period: "January 2025 – April 2026",
      location: "Delhi, India",
      points: [
        "Built and maintained responsive web applications using modern frontend and backend technologies.",
        "Implemented reusable UI components, integrated APIs, and supported backend and database functionality.",
        "Collaborated on application features, debugging, performance improvements, and deployment tasks."
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB", "Git"]
    },
    {
      role: "Developer",
      company: "4th Dimension Private Limited",
      period: "January 2024 – December 2024",
      location: "Delhi, India",
      points: [
        "Contributed to web application development and maintenance across frontend and backend tasks.",
        "Worked on responsive interfaces, application functionality, and implementation of project requirements."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Web Development", "UI Components"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Guru Gobind Singh Indraprastha University",
      period: "2025 – Present",
      type: "Undergraduate Degree"
    },
    {
      degree: "12th Grade (CBSE)",
      institution: "Sarvodaya Vidyalaya",
      period: "Completed 2025",
      type: "Senior Secondary"
    }
  ];

  const achievements = [
    {
      title: "2nd Place — Dice Academy Hackathon",
      year: "2025",
      description: "Recognized for engineering a high-impact, full-stack application under competitive rapid-development conditions."
    },
    {
      title: "Web Development Certification",
      year: "2025",
      description: "Completed intensive curriculum at Dice Academy covering modern full-stack web engineering and architectures."
    }
  ];

  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-gradient-to-br from-[#BAE6FD]/20 via-[#E0F2FE]/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#38BDF8]/15 via-[#BAE6FD]/25 to-transparent rounded-full blur-[100px]" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
        <div className="inline-block">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE]/80 border border-[#BAE6FD] shadow-xs">
            <Briefcase className="w-3 h-3 text-[#0284C7]" />
            <span>CAREER TRACK RECORD</span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Experience &amp; Education
        </h2>

        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-lg mx-auto font-normal">
          A proven history of engineering dependable web products, client platforms, and enterprise internal software.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
        
        {/* ======================================================== */}
        {/* LEFT COLUMN: Work Experience Timeline (7 Cols)           */}
        {/* ======================================================== */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
            <div className="w-7 h-7 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD]/60 text-[#0284C7] flex items-center justify-center">
              <Briefcase className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
              Work Experience
            </h3>
          </div>

          <div className="space-y-5">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white border border-slate-200/90 hover:border-[#38BDF8] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2.5">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#0284C7] transition-colors tracking-tight">
                      {exp.role}
                    </h4>
                    <span className="text-xs sm:text-sm font-semibold text-[#0284C7]">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#64748B]">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0F172A] font-medium">
                      <Calendar className="w-3 h-3 text-[#64748B]" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-[#64748B] mb-3">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded-md bg-[#F0F9FF] border border-[#BAE6FD]/70 text-[#0284C7] text-[10px] sm:text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: Education & Achievements (5 Cols)          */}
        {/* ======================================================== */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Education Block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
              <div className="w-7 h-7 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD]/60 text-[#0284C7] flex items-center justify-center">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                Education
              </h3>
            </div>

            <div className="space-y-3.5">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl p-4 sm:p-5 bg-white border border-slate-200/90 hover:border-[#38BDF8] shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#0284C7] mb-1">
                    {edu.type}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-[#64748B] mt-1">
                    {edu.institution}
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-[#0284C7] font-semibold">
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications Block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
              <div className="w-7 h-7 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD]/60 text-[#0284C7] flex items-center justify-center">
                <Award className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                Achievements &amp; Certifications
              </h3>
            </div>

            <div className="space-y-3.5">
              {achievements.map((ach, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl p-4 sm:p-5 bg-white border border-slate-200/90 hover:border-[#38BDF8] shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight">
                      {ach.title}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[10px] font-mono font-bold shrink-0">
                      {ach.year}
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="rounded-2xl sm:rounded-3xl p-5 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white shadow-xl space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#7DD3FC] uppercase">
              Available For Opportunities
            </span>
            <h4 className="text-base sm:text-lg font-bold">
              Looking for a Full Stack Developer?
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Open to full-time roles, contract work, and custom platform development.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <a
                href="/Samarpan_Singh_Resume.pdf"
                download="Samarpan_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] text-xs font-semibold shadow-md transition-all"
              >
                <FileDown className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="https://wa.me/918178557544"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-semibold shadow-md transition-all"
              >
                <span>WhatsApp: +91 8178557544</span>
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

