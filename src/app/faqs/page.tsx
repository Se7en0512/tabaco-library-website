'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from '@/i18n/useTranslations';

export default function FAQs() {
  const t = useTranslations();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    { question: t.faqs.q1, answer: t.faqs.a1 },
    { question: t.faqs.q2, answer: t.faqs.a2 },
    { question: t.faqs.q3, answer: t.faqs.a3 },
    { question: t.faqs.q4, answer: t.faqs.a4 },
    { question: t.faqs.q5, answer: t.faqs.a5 },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6">
        <SectionHeader
          tag={t.faqs.tag}
          title={t.faqs.title}
          description={t.faqs.desc}
        />

        <div className="container mx-auto max-w-4xl">
          <div className="faq-list space-y-4" role="list">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 bg-white shadow-sm rounded-xl overflow-hidden" role="listitem">
                <button
                  className="faq-question w-full text-left p-6 flex items-center justify-between hover:bg-[var(--border)] transition-colors focus:outline-none focus:shadow-[var(--focus)] rounded-xl"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                  type="button"
                >
                  <span className="text-lg font-semibold text-[var(--text)]">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--muted)] transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`faq-answer overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={openFAQ !== index}
                >
                  <div className="p-6 pt-0 text-[var(--muted)] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}