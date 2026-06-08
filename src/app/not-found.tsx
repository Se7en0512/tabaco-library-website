'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { useTranslations } from '@/i18n/useTranslations';

export default function NotFound() {
  const t = useTranslations();
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="border border-gray-200 bg-white shadow-sm p-12 rounded-xl text-center max-w-lg mx-auto">
        <div className="w-24 h-24 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl font-bold text-white">404</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.notFound.title}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {t.notFound.desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-bold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            {t.notFound.goHome}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            {t.notFound.goBack}
          </button>
        </div>
      </div>
    </div>
  );
}