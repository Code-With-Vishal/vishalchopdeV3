import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "AI Lead System | AI Operating System for Real Estate Agents",
  description: "Get 20–50 qualified real estate leads automatically. AI responds, qualifies, and books calls 24/7 — in under 60 seconds.",
  keywords: "real estate AI, lead automation, AI lead system, real estate agent automation, WhatsApp leads",
  openGraph: {
    title: "AI Lead System | Automated Lead Generation for Real Estate",
    description: "Your AI system responds, qualifies, and books calls — 24/7.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grid-bg">
        <Navbar />
        <main style={{ paddingTop: '72px' }}>
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
