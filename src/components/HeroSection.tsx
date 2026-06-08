'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Route, MapPin, BookOpen, Users, Clock } from 'lucide-react';
import { useTranslations } from '@/i18n/useTranslations';

const stats = [
  { icon: BookOpen, value: 'Free Access', label: 'General Reference' },
  { icon: Users, value: 'Open to All', label: 'Tabaqueños' },
  { icon: Clock, value: 'WiFi', label: 'Mon–Thu, 7AM–6PM' },
];

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900/75" />

      {/* Hero Content */}
      <div className={`relative z-10 text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Main Heading */}
        <h1
          id="hero-title"
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5"
        >
          <span className="block">{t.hero.welcome}</span>
          <span className="block text-white">
            {t.hero.library}
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subtitle}
          <span className="block mt-1 text-base text-blue-300">{t.hero.subtitle2}</span>
        </p>

        {/* Stat Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-white/90 text-sm font-medium"
            >
              <s.icon className="w-4 h-4 text-blue-300" />
              <span>{s.value}</span>
              <span className="text-white/50 ml-0.5">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/library-services"
            className="bg-white text-blue-900 font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-shadow inline-flex items-center gap-2"
          >
            <Route className="w-5 h-5" />
            {t.hero.exploreServices}
          </Link>

          <Link
            href="/contact"
            className="bg-white/10 border border-white/30 text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors inline-flex items-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            {t.hero.visitUs}
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40">
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/30 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}