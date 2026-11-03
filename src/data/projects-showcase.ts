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
 * REAL PROJECTS SHOWCASE DATA
 * Real client and production projects built and delivered by Webify.
 */
export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "swastik-jewels",
    title: "Swastik Jewels",
    subtitle: "Luxury fine gold & natural diamond jewellery storefront with curated collections and digital shopping experience.",
    category: "Luxury E-Commerce",
    date: "Live Project",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    tags: ["Shopify", "E-Commerce", "Luxury Retail", "Payment Gateway"],
    link: "https://www.swastikjewel.in/"
  },
  {
    id: "sanki-streetwear",
    title: "SANKI",
    subtitle: "Contemporary streetwear apparel brand with limited drops, custom fit guides, and seamless mobile checkouts.",
    category: "Fashion & Retail",
    date: "Live Project",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    tags: ["Brand Storefront", "Apparel", "E-Commerce", "Mobile-First"],
    link: "https://sanki.online/"
  },
  {
    id: "swastik-crm",
    title: "Swastik Gold CRM",
    subtitle: "Comprehensive gold shop management ERP dashboard for real-time rates, inventory tracking, customer orders, and staff workflows.",
    category: "Custom CRM & ERP",
    date: "Live Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Admin Dashboard", "Inventory ERP", "CRM Solution"],
    link: "https://crm.swastikjewel.in/admin/dashboard"
  },
  {
    id: "garvik-india",
    title: "Garvik India",
    subtitle: "360° strategic marketing, advertising, and creative branding agency platform driving corporate visibility and lead generation.",
    category: "Digital Agency & Marketing",
    date: "Live Project",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Corporate Branding", "Tailwind CSS", "Lead Generation"],
    link: "https://www.garvikindia.com/"
  },
  {
    id: "sauriksha-villa",
    title: "Sauriksha Villa",
    subtitle: "Scenic boutique mountain villa & resort near Nainital/Bhimtal featuring direct room bookings and bespoke guest hospitality.",
    category: "Hospitality & Resort",
    date: "Live Project",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Hospitality", "Resort Website", "Room Booking", "Travel UX"],
    link: "https://www.saurikshavilla.com/index.html"
  },
  {
    id: "grilli-restaurant",
    title: "Grilli Restaurant",
    subtitle: "Exquisite culinary dining experience featuring interactive menus, chef specials, and direct online table reservation engine.",
    category: "Restaurant & Culinary",
    date: "Live Project",
    image: "https://6919d520872fbc7a96a26a0a--mellow-lokum-5f3443.netlify.app/assets/images/hero-slider-1.jpg",
    tags: ["Food & Beverage", "Table Booking", "Interactive Menu", "Modern Web"],
    link: "https://6919d520872fbc7a96a26a0a--mellow-lokum-5f3443.netlify.app/"
  }
];
