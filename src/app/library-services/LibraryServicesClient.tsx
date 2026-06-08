'use client';

import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { IdCard, Search, BookOpen, RotateCcw, Wifi } from 'lucide-react';
import { useTranslations } from '@/i18n/useTranslations';

export default function LibraryServicesClient() {
  const t = useTranslations();

  const services = [
    {
      icon: <IdCard className="w-8 h-8" />,
      title: t.libServices.card.title,
      description: t.libServices.card.desc,
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: t.libServices.research.title,
      description: t.libServices.research.desc,
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: t.libServices.borrow.title,
      description: t.libServices.borrow.desc,
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: t.libServices.return.title,
      description: t.libServices.return.desc,
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: t.libServices.internet.title,
      description: t.libServices.internet.desc,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6">
        <SectionHeader
          tag={t.libServices.tag}
          title={t.libServices.title}
          description={t.libServices.desc}
        />

        <div className="container mx-auto max-w-6xl">
          <ul className="grid-cards grid grid-cols-1 lg:grid-cols-2 gap-8" role="list">
            {services.map((service, index) => (
              <li key={index} role="listitem">
                <Card
                  icon={service.icon}
                  title={service.title}
                  className="h-full border border-gray-200 bg-white shadow-sm p-6 rounded-xl"
                >
                  <div className="text-[var(--muted)] leading-relaxed">{service.description}</div>
                </Card>
              </li>
            ))}
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-12 text-center">
            <p className="text-lg font-medium text-blue-800 mb-6">{t.libServices.note}</p>
            <Link
              href="/membership"
              className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-bold px-8 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
            >
              {t.libServices.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
