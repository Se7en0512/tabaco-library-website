import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollAnimations from "../components/ScrollAnimations";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tabaco City Library and Information Center",
  description: "Government Services Made Easy at Your Library! The Tabaco City Library and Information Center upholds the government's effort to provide accessible services to every Filipino.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${inter.variable} font-sans antialiased`}>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main id="main">
          {children}
        </main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
