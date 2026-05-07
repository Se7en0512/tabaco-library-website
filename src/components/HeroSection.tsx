'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Route, MapPin } from 'lucide-react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animated Gradient Mesh Overlay */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-teal-900/70" />

        {/* Animated mesh overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/15 via-transparent to-teal-600/15 animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500/8 to-transparent animate-pulse delay-1000" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-teal-600/15 via-transparent to-indigo-600/15 animate-pulse delay-500" />

          {/* Floating mesh particles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl animate-bounce delay-300" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl animate-bounce delay-700" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-bounce delay-1000" />
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_50%)]" />
        </div>
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Welcome Tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-semibold text-sm mb-8 shadow-lg">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Your Gateway to Learning and Government Services
        </div>

        {/* Main Heading */}
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 drop-shadow-2xl"
        >
          <span className="block">Beyond Boundaries</span>
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-200 to-teal-200 bg-clip-text text-transparent">
            Knowledge Without Limits
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Empowering Tabaco City Through Information and Service.
          <span className="block mt-2 text-lg text-blue-200">Government Made Simple, Knowledge Made Accessible.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/library-services"
            className="group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 border border-white/20"
          >
            <Route className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Explore Services
          </Link>

          <Link
            href="/contact"
            className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 hover:scale-105 border border-white/30"
          >
            <MapPin className="w-5 h-5 group-hover:animate-bounce" />
            Visit Us
          </Link>
        </div>
      </div>



      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}