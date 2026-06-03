'use client';

import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { MapPin, Clock, Mail, Send, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from '@/i18n/useTranslations';

export default function Contact() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL || 'https://formspree.io/f/mpqeayyn';

    try {
      const res = await fetch(formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `Website Contact: ${formData.name}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Unable to send message. Please try again later.');
    }
  };
  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6">
        <SectionHeader
          tag={<><span className="text-2xl">📞</span> {t.nav.contact}</>}
          title={t.contactPage.title}
          description={t.contactPage.desc}
        />

        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side: Contact Details */}
            <div className="space-y-8">
              {/* Address */}
              <Card className="h-fit">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-2">{t.contactPage.address}</h3>
                    <p className="text-[var(--muted)] font-medium leading-relaxed">
                      3rd Floor, Tabaco City Mall<br />
                      Tabaco City, Philippines, 4511
                    </p>
                    <Link
                      href="https://www.facebook.com/profile.php?id=61585715202676"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium px-4 py-2 rounded-lg transition-colors mt-3 text-sm"
                      aria-label="Facebook profile"
                    >
                      {t.contactPage.visitFacebook}
                    </Link>
                  </div>
                </div>
                {/* Location Map */}
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.1234567890123!2d123.7295966!3d13.3582737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1adb81ec01949%3A0xe0ebeafc8a3f0007!2sTabaco+City+Mall!5e0!3m2!1sen!2sus!4v1715097600!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tabaco City Mall Location"
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-[var(--muted)] mt-4 text-center">
                  {t.contactPage.interactiveMap}
                </p>
              </Card>

              {/* Operating Hours */}
              <Card className="h-fit">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-2">{t.contactPage.operatingHours}</h3>
                    <p className="text-[var(--muted)] font-medium leading-relaxed">
                      {t.contactPage.hoursDetail}<br />
                      <span className="block mt-2 text-red-600 font-bold">
                        {t.contactPage.closedHoliday}
                      </span>
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="h-fit">
                <h3 className="text-xl font-bold text-[var(--text)] mb-4">{t.contactPage.contactInfo}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-[var(--text)]">{t.contactPage.email}</div>
                      <a
                        href="mailto:citylibrarytabaco@gmail.com"
                        className="text-blue-600 hover:text-blue-700 font-medium underline"
                      >
                        citylibrarytabaco@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ExternalLink className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-[var(--text)]">Facebook</div>
                      <a
                        href="https://www.facebook.com/profile.php?id=61585715202676"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium underline"
                      >
                        Tabaco City Library
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Side: Contact Form */}
            <Card className="h-fit">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[var(--text)] mb-2">{t.contactPage.sendMessage}</h3>
                <p className="text-[var(--muted)]">
                  {t.contactPage.formDesc}
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                    {t.contactPage.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder={t.contactPage.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                    {t.contactPage.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder={t.contactPage.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">
                    {t.contactPage.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-vertical"
                    placeholder={t.contactPage.messagePlaceholder}
                  />
                </div>
                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm text-center">
                    {statusMessage}
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm text-center">
                    {statusMessage}
                  </div>
                )}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--secondary)] hover:to-[var(--primary)] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {status === 'sending' ? t.contactPage.sending : t.contactPage.send}
                  </button>
                </div>
              </form>
            </Card>
          </div>




        </div>
      </section>
    </div>
  );
}