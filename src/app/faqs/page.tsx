'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { ChevronDown } from 'lucide-react';

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is membership free?',
      answer: 'Yes. Library membership is free and helps you access library resources and on-site support.',
    },
    {
      question: 'Do you assist with online government transactions?',
      answer: 'Yes. The library supports guided online transactions with national agencies within official authorizations.',
    },
    {
      question: 'Are library services free?',
      answer: 'Most services are free. Fees may apply only in specific cases such as damaged or lost items.',
    },
    {
      question: 'What do I need to get help at the library?',
      answer: 'Bring a valid ID when needed and any documents required by the service. If you are unsure, our staff can guide you.',
    },
    {
      question: 'Where are you located?',
      answer: '3rd Floor, Tabaco City Mall Building, Tabaco City, Philippines, 4511.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6" style={{ paddingTop: '108px' }}>
        <SectionHeader
          tag={<><span className="text-2xl">❓</span> FAQs</>}
          title="Quick Answers"
          description="Everything you need to know to visit the library and access government assistance with confidence."
        />

        <div className="container mx-auto max-w-4xl">
          <div className="faq-list space-y-4" role="list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item glass rounded-xl overflow-hidden" role="listitem">
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