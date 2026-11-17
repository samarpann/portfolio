import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samarpan Singh — Full Stack Web Developer | MERN Stack",
  description: "Personal portfolio of Samarpan Singh, Full Stack Web Developer based in Delhi, India. Specializing in MERN stack, React.js, Node.js, MongoDB, Express, and modern digital platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] text-[#0F172A] min-h-screen selection:bg-[#7DD3FC]/30 selection:text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
