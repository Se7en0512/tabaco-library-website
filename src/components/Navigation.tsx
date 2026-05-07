'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setServicesOpen(false);
    setAboutOpen(false);
    setMobileOpen(false);
  };

  const scrollToTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    setServicesOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Skip Link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 rounded-lg border shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo - Left */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1"
              aria-label="Tabaco City Library and Information Center - Go to homepage"
            >
              <img
                src="/logo.png"
                alt="Tabaco City Library and Information Center Logo"
                className="w-10 h-10 rounded-lg object-contain shadow-sm"
              />
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-gray-900 leading-tight">Tabaco City Library and Information Center</div>
              </div>
            </button>

            {/* Desktop Navigation - Center/Right */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
              >
                Home
              </Link>

              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div
                    id="services-menu"
                    className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 py-2 z-50"
                    role="menu"
                  >
                    <a
                      href="/e-gov-services"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2"
                      role="menuitem"
                    >
                      E-Gov Services
                    </a>
                    <a
                      href="/library-services"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2"
                      role="menuitem"
                    >
                      Library Services
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/programs"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
              >
                Programs
              </a>

              <div className="relative">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  aria-expanded={aboutOpen}
                  aria-controls="about-menu"
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>

                {aboutOpen && (
                  <div
                    id="about-menu"
                    className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 py-2 z-50"
                    role="menu"
                  >
                    <a
                      href="/about"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2"
                      role="menuitem"
                    >
                      About Us
                    </a>
                    <a
                      href="/staff"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2"
                      role="menuitem"
                    >
                      Our Staff
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
              >
                Contact
              </a>
            </div>

            {/* CTA Button - Far Right */}
            <div className="flex items-center gap-4">
              <a
                href="/membership"
                className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Join Now
              </a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg"
          >
            <div className="px-6 py-6 space-y-4">
              <Link
                href="/"
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a
                      href="/e-gov-services"
                      className="block text-gray-600 hover:text-blue-700 py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      E-Gov Services
                    </a>
                    <a
                      href="/library-services"
                      className="block text-gray-600 hover:text-blue-700 py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      Library Services
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/programs"
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                Programs
              </a>

              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-1 w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                  aria-expanded={aboutOpen}
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>

                {aboutOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a
                      href="/about"
                      className="block text-gray-600 hover:text-blue-700 py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      About Us
                    </a>
                    <a
                      href="/staff"
                      className="block text-gray-600 hover:text-blue-700 py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      Our Staff
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/contact"
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>

              <a
                href="/contact"
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>

              <a
                href="/membership"
                className="block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-center mt-6"
                onClick={() => setMobileOpen(false)}
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}