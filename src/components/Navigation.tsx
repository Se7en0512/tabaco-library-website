'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslations } from '@/i18n/useTranslations';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path ? 'text-blue-600' : 'text-gray-700';

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 rounded-lg border shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {t.nav.skipLink}
      </a>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity rounded-lg p-1"
              aria-label="Tabaco City Library and Information Center - Go to homepage"
            >
              <img
                src="/logo.png"
                alt=""
                className="w-10 h-10 rounded-lg object-contain shadow-sm"
              />
              <div className="hidden lg:block">
                <div className="font-bold text-lg text-gray-900 leading-tight">Tabaco City Library and Information Center</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${isActive('/')} hover:text-blue-600 hover:bg-blue-50`}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                {t.nav.home}
              </Link>

              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-colors ${pathname.startsWith('/e-gov-services') || pathname.startsWith('/library-services') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 hover:bg-blue-50`}
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                >
                  {t.nav.services}
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div
                    id="services-menu"
                    className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 py-2 z-50"
                    role="menu"
                  >
                    <Link
                      href="/e-gov-services"
                      className={`block px-4 py-3 rounded-lg mx-2 transition-colors ${pathname === '/e-gov-services' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`}
                      role="menuitem"
                    >
                      {t.nav.eGovServices}
                    </Link>
                    <Link
                      href="/library-services"
                      className={`block px-4 py-3 rounded-lg mx-2 transition-colors ${pathname === '/library-services' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`}
                      role="menuitem"
                    >
                      {t.nav.libraryServices}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/programs"
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${isActive('/programs')} hover:text-blue-600 hover:bg-blue-50`}
                aria-current={pathname === '/programs' ? 'page' : undefined}
              >
                {t.nav.programs}
              </Link>

              <div className="relative">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-colors ${pathname.startsWith('/about') || pathname.startsWith('/staff') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 hover:bg-blue-50`}
                  aria-expanded={aboutOpen}
                  aria-controls="about-menu"
                >
                  {t.nav.about}
                  <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>

                {aboutOpen && (
                  <div
                    id="about-menu"
                    className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 py-2 z-50"
                    role="menu"
                  >
                    <Link
                      href="/about"
                      className={`block px-4 py-3 rounded-lg mx-2 transition-colors ${pathname === '/about' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`}
                      role="menuitem"
                    >
                      {t.nav.aboutUs}
                    </Link>
                    <Link
                      href="/staff"
                      className={`block px-4 py-3 rounded-lg mx-2 transition-colors ${pathname === '/staff' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`}
                      role="menuitem"
                    >
                      {t.nav.ourStaff}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${isActive('/contact')} hover:text-blue-600 hover:bg-blue-50`}
                aria-current={pathname === '/contact' ? 'page' : undefined}
              >
                {t.nav.contact}
              </Link>
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/membership"
                className="hidden lg:inline-flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                {t.nav.joinNow}
              </Link>

              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg"
          >
            <div className="px-6 py-6 space-y-4">
              <Link
                href="/"
                className={`block py-2 font-medium ${isActive('/')}`}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.home}
              </Link>

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center gap-1 w-full py-2 font-medium ${pathname.startsWith('/e-gov-services') || pathname.startsWith('/library-services') ? 'text-blue-600' : 'text-gray-700'}`}
                  aria-expanded={servicesOpen}
                >
                  {t.nav.services}
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-100 pl-4">
                    <Link
                      href="/e-gov-services"
                      className="block text-gray-600 hover:text-blue-700 py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t.nav.eGovServices}
                    </Link>
                    <Link
                      href="/library-services"
                      className="block text-gray-600 hover:text-blue-700 py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t.nav.libraryServices}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/programs"
                className={`block py-2 font-medium ${isActive('/programs')}`}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.programs}
              </Link>

              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`flex items-center gap-1 w-full py-2 font-medium ${pathname.startsWith('/about') || pathname.startsWith('/staff') ? 'text-blue-600' : 'text-gray-700'}`}
                  aria-expanded={aboutOpen}
                >
                  {t.nav.about}
                  <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>

                {aboutOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-100 pl-4">
                    <Link
                      href="/about"
                      className="block text-gray-600 hover:text-blue-700 py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t.nav.aboutUs}
                    </Link>
                    <Link
                      href="/staff"
                      className="block text-gray-600 hover:text-blue-700 py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t.nav.ourStaff}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className={`block py-2 font-medium ${isActive('/contact')}`}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.contact}
              </Link>

              <Link
                href="/membership"
                className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-center mt-6"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.joinNow}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}