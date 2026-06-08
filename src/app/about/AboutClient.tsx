'use client';

import SectionHeader from '@/components/SectionHeader';
import { Target, Eye } from 'lucide-react';
import { useTranslations } from '@/i18n/useTranslations';

export default function AboutClient() {
  const t = useTranslations();
  const values = [
    { color: 'bg-blue-500', label: t.about.val1 },
    { color: 'bg-green-500', label: t.about.val2 },
    { color: 'bg-purple-500', label: t.about.val3 },
    { color: 'bg-orange-500', label: t.about.val4 },
    { color: 'bg-teal-500', label: t.about.val5 },
    { color: 'bg-indigo-500', label: t.about.val6 },
    { color: 'bg-pink-500', label: t.about.val7 },
    { color: 'bg-yellow-500', label: t.about.val8 },
  ];

  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6">
        <SectionHeader title={t.about.title} className="mb-16" />

        <div className="container mx-auto max-w-6xl space-y-20">
          <div className="border border-gray-200 bg-white shadow-sm p-10 md:p-12 rounded-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-xl flex items-center justify-center">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.about.vision}</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>{t.about.vision1}</p>
              <p>{t.about.vision2}</p>
            </div>
          </div>

          <div className="border border-gray-200 bg-white shadow-sm p-10 md:p-12 rounded-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.about.mission}</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">{t.about.mission1}</p>
          </div>

          <div className="border border-gray-200 bg-white shadow-sm p-10 md:p-12 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t.about.values}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {values.slice(0, 4).map((v) => (
                  <div key={v.label} className="flex items-center gap-3">
                    <div className={`w-3 h-3 ${v.color} rounded-full`}></div>
                    <span className="text-lg text-gray-600">{v.label}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {values.slice(4).map((v) => (
                  <div key={v.label} className="flex items-center gap-3">
                    <div className={`w-3 h-3 ${v.color} rounded-full`}></div>
                    <span className="text-lg text-gray-600">{v.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
