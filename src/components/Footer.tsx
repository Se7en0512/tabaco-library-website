import Link from 'next/link';
import { MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">

          {/* Logo and Tagline - Far Left */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 hover:opacity-80 transition-opacity">
              <div className="font-bold text-xl text-white leading-tight">Tabaco City Library and Information Center</div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering our community through access to information, technology, and lifelong learning opportunities.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>3rd Floor, Tabaco City Mall Building</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>citylibrarytabaco@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/library-services" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Library Services
                </Link>
              </li>
              <li>
                <Link href="/e-gov-services" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  E-Gov Services
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/staff" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Our Staff
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Programs & Events
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Connect</h3>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585715202676"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                <span>📘</span>
                <span>Facebook</span>
              </a>
              <div className="text-sm text-gray-400">
                <p>Mon-Thu: 7AM-6PM</p>
                <p>Closed on Holidays</p>
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
              © 2026 Tabaco City Library and Information Center. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Government Services Made Easy</span>
              <span>•</span>
              <span>Empowering Our Community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}