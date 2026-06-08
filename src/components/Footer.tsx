'use client';

import Link from 'next/link';
import { MapPin, Mail } from 'lucide-react';
import { useTranslations } from '@/i18n/useTranslations';

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">

          {/* Logo and Tagline - Far Left */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 hover:opacity-80 transition-opacity">
              <div className="font-bold text-xl text-white leading-tight text-pretty">Tabaco City Library and Information Center</div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>{t.footer.email}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">{t.footer.libraryServices}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/library-services" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  {t.nav.libraryServices}
                </Link>
              </li>
              <li>
                <Link href="/e-gov-services" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  {t.nav.eGovServices}
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  {t.nav.joinNow}
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">{t.footer.about}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  {t.nav.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/staff" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  {t.nav.ourStaff}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">{t.footer.resources}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  {t.footer.programsEvents}
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  {t.footer.faqs}
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  {t.footer.search}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">{t.footer.connect}</h3>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585715202676"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>{t.footer.facebook}</span>
              </a>
              <div className="text-sm text-gray-400">
                <p>{t.footer.hours}</p>
                <p>{t.footer.closedHolidays}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t.footer.copyright}
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>{t.footer.govTag}</span>
              <span>{t.footer.empowerTag}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}