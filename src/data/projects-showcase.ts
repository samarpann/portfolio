export interface ShowcaseProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  image: string;
  tags: string[];
  link?: string;
}

/**
 * SAMARPAN SINGH - SELECTED PRODUCTION PROJECTS
 * Real client and production projects built and maintained by Samarpan Singh.
 */
export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "swastik-jewels",
    title: "Swastik Jewels",
    subtitle: "Luxury fine gold and natural diamond jewellery storefront presenting products and online brand presence with an interactive catalog.",
    category: "E-Commerce & Brand",
    date: "Production",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "E-Commerce", "Tailwind CSS", "REST APIs"],
    link: "https://www.swastikjewel.in/"
  },
  {
    id: "swastik-crm",
    title: "Swastik CRM",
    subtitle: "Enterprise gold shop management ERP dashboard supporting customer records, real-time bullion rates, inventory tracking, and workflows.",
    category: "CRM & ERP Platform",
    date: "Enterprise",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "Express", "MongoDB", "Dashboard ERP"],
    link: "https://crm.swastikjewel.in/"
  },
  {
    id: "rk-steel-company",
    title: "RK Steel Company",
    subtitle: "High-performance corporate website for an industrial steel manufacturer, showcasing products, manufacturing capacities, and inquiries.",
    category: "Corporate & Industrial",
    date: "Live Client",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Next.js", "Responsive UI", "Tailwind CSS"],
    link: "https://www.rksteelcompany.in/"
  },
  {
    id: "fundsphere",
    title: "FundSphere",
    subtitle: "Modern financial services and wealth management platform delivering clean interfaces, financial resources, and service calculators.",
    category: "Fintech & Web Platform",
    date: "Production",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    tags: ["MERN Stack", "Fintech", "REST APIs", "Modern UI"],
    link: "https://www.fundsphere.co.in/"
  },
  {
    id: "dr-nidan",
    title: "Dr. Nidan",
    subtitle: "Healthcare-focused web platform providing comprehensive medical brand information, specialty clinic services, and patient consultations.",
    category: "Healthcare & Clinic",
    date: "Live Client",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Healthcare UX", "React", "Tailwind CSS", "SEO & Speed"],
    link: "https://www.drnidan.in/"
  },
  {
    id: "dice-hackathon-platform",
    title: "Dice Hackathon Winner",
    subtitle: "Award-winning full-stack web application engineered during the Dice Academy Hackathon, securing 2nd place among competitive teams.",
    category: "Hackathon 2nd Place",
    date: "Award 2025",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    tags: ["MERN Stack", "Hackathon", "Rapid Prototyping", "Full Stack"],
    link: "https://github.com/samarpann"
  }
];
