import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollAnimations from "../components/ScrollAnimations";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Tabaco City Library and Information Center",
    template: "%s | Tabaco City Library and Information Center",
  },
  description: "Government Services Made Easy at Your Library! The Tabaco City Library and Information Center upholds the government's effort to provide accessible services to every Filipino.",
  metadataBase: new URL("https://tclic.ph"),
  openGraph: {
    title: "Tabaco City Library and Information Center",
    description: "Government Services Made Easy at Your Library!",
    url: "https://tclic.ph",
    siteName: "Tabaco City Library and Information Center",
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Library',
    name: 'Tabaco City Library and Information Center',
    description: 'Government Services Made Easy at Your Library!',
    url: 'https://tclic.ph',
    address: { '@type': 'PostalAddress', streetAddress: '3rd Floor, Tabaco City Mall Building', addressLocality: 'Tabaco City', addressRegion: 'Albay', postalCode: '4511', addressCountry: 'PH' },
    email: 'citylibrarytabaco@gmail.com',
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '07:00', closes: '18:00' },
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
