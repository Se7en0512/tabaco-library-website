'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="glass p-12 rounded-3xl shadow-[var(--shadow)] text-center max-w-lg mx-auto">
        <div className="w-24 h-24 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl font-bold text-white">404</span>
        </div>
        <h1 className="text-3xl font-bold text-[var(--text)] mb-4">Page Not Found</h1>
        <p className="text-[var(--muted)] mb-8 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline-pill inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}