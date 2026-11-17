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
 * SAMARPAN SINGH - SELECTED PRODUCTION & CLIENT PROJECTS
 * Real client, production, and enterprise platforms built and delivered by Samarpan Singh.
 */
export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "swastik-jewels",
    title: "Swastik Jewels",
    subtitle: "Luxury fine gold and natural diamond jewellery storefront presenting products, curated collections, and digital shopping experience.",
    category: "Luxury E-Commerce",
    date: "Production",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "E-Commerce", "Tailwind CSS", "REST APIs"],
    link: "https://www.swastikjewel.in/"
  },
  {
    id: "sanki-streetwear",
    title: "SANKI",
    subtitle: "Contemporary streetwear apparel brand with limited drops, custom fit guides, and seamless mobile-first checkout experience.",
    category: "Fashion & Retail",
    date: "Live Brand",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    tags: ["Brand Storefront", "Apparel", "E-Commerce", "Mobile-First"],
    link: "https://sanki.online/"
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
    id: "garvik-india",
    title: "Garvik India",
    subtitle: "360° strategic marketing, advertising, and creative branding agency platform driving corporate visibility and lead generation.",
    category: "Digital Agency & Marketing",
    date: "Live Client",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Corporate Branding", "Tailwind CSS", "Lead Generation"],
    link: "https://www.garvikindia.com/"
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
    subtitle: "Modern financial services and wealth management platform delivering clean interfaces, financial resources, and digital tools.",
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
    id: "sauriksha-villa",
    title: "Sauriksha Villa",
    subtitle: "Scenic boutique mountain villa and resort near Nainital/Bhimtal featuring direct room bookings and bespoke guest hospitality.",
    category: "Hospitality & Resort",
    date: "Live Client",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Hospitality", "Resort Website", "Room Booking", "Travel UX"],
    link: "https://www.saurikshavilla.com/index.html"
  },
  {
    id: "grilli-restaurant",
    title: "Grilli Restaurant",
    subtitle: "Exquisite culinary dining experience featuring interactive menus, chef specials, and direct online table reservation engine.",
    category: "Culinary & Dining",
    date: "Live Project",
    image: "https://6919d520872fbc7a96a26a0a--mellow-lokum-5f3443.netlify.app/assets/images/hero-slider-1.jpg",
    tags: ["Food & Beverage", "Table Booking", "Interactive Menu", "Modern Web"],
    link: "https://6919d520872fbc7a96a26a0a--mellow-lokum-5f3443.netlify.app/"
  }
];
