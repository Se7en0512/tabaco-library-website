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
            <Card className="text-center h-full hover-lift glass p-6 rounded-xl shadow-[var(--shadow)] border border-[var(--border)]">
              <div className="card-icon w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-4">{t.search.bookTitle}</h3>
              <p className="text-[var(--muted)]">
                {t.search.bookDesc}
              </p>
            </Card>

            <Card className="text-center h-full hover-glow glass p-6 rounded-xl shadow-[var(--shadow)] border border-[var(--border)]">
              <div className="card-icon w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-4">{t.search.helpTitle}</h3>
              <p className="text-[var(--muted)] mb-4">
                {t.search.helpDesc} <strong>citylibrarytabaco@gmail.com</strong>
              </p>
            </Card>

            <Card className="text-center h-full hover-border-reveal glass p-6 rounded-xl shadow-[var(--shadow)] border border-[var(--border)]">
              <div className="card-icon w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-4">{t.search.hoursTitle}</h3>
              <p className="text-[var(--muted)]">
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