'use client';

import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { Search, BookOpen, Mail, Clock } from 'lucide-react';
import { useTranslations } from '@/i18n/useTranslations';

export default function SearchPage() {
  const t = useTranslations();
  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6">
        <SectionHeader
          tag={<><Search className="w-6 h-6" /> {t.search.tag}</>}
          title={t.search.title}
          description={t.search.desc}
        />

        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center h-full border border-gray-200 bg-white shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="card-icon w-14 h-14 bg-[var(--primary)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.search.bookTitle}</h3>
              <p className="text-gray-600">
                {t.search.bookDesc}
              </p>
            </Card>

            <Card className="text-center h-full border border-gray-200 bg-white shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="card-icon w-14 h-14 bg-[var(--primary)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.search.helpTitle}</h3>
              <p className="text-gray-600 mb-4">
                {t.search.helpDesc} <strong>citylibrarytabaco@gmail.com</strong>
              </p>
            </Card>

            <Card className="text-center h-full border border-gray-200 bg-white shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="card-icon w-14 h-14 bg-[var(--primary)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.search.hoursTitle}</h3>
              <p className="text-gray-600">
                {t.search.hoursDesc}<br />
                {t.contactPage.closedHoliday}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}