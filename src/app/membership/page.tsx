'use client';

import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { IdCard, BookOpen, Wifi, Send, FileEdit } from 'lucide-react';
import { useState } from 'react';

const serviceOptions = [
  'Library Card Application',
  'Library Research',
  'Borrowing Books',
  'Internet & E-Resources',
  'Other',
];

const serviceRequirements: Record<string, string[]> = {
  'Library Card Application': [
    '2x1 ID pictures',
    'Barangay Clearance',
    'Valid ID',
  ],
  'Library Research': [
    'Valid ID or Library Card',
  ],
  'Borrowing Books': [
    'Validated Library Card',
  ],
  'Internet & E-Resources': [
    'Valid ID or Library Card',
  ],
};

export default function Membership() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    address: '',
    serviceType: '',
    requirementsLink: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
          _subject: `Membership Application: ${formData.serviceType} — ${formData.fullName}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setStatusMessage('Application submitted successfully! We will contact you soon.');
        setFormData({ fullName: '', email: '', contactNumber: '', address: '', serviceType: '', requirementsLink: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Unable to submit. Please try again later.');
    }
  };

  const benefits = [
    {
      icon: <IdCard className="w-8 h-8" />,
      title: 'Free Registration',
      description: 'Membership is provided to support access to information and community services.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Borrowing Privileges',
      description: 'Use your card to borrow materials and access on-site services.',
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Digital Access',
      description: 'Access public computers and learning resources (subject to availability and rules).',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6">
        <SectionHeader
          tag={<><span className="text-2xl">👑</span> Membership</>}
          title="Get Your Library Card"
          description="Enjoy free access to library resources and assistance for supported transactions and digital learning."
        />

        <div className="container mx-auto max-w-6xl">
          <ul className="grid-cards grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {benefits.map((benefit, index) => (
              <li key={index} role="listitem">
                <Card
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  className="h-full text-center hover-bg-shift glass p-6 rounded-xl shadow-[var(--shadow)] border border-[var(--border)]"
                />
              </li>
            ))}
          </ul>


        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[var(--bg-alt)]">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            tag={<><FileEdit className="w-6 h-6 inline" /> Apply Now</>}
            title="Submit Your Application"
            description="Fill out the form below to apply for membership or any library service. We'll reach out to you via email or phone."
          />

          <Card className="p-8 glass">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[var(--text)] mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="juan@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-[var(--text)] mb-2">Contact Number *</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="0917 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-[var(--text)] mb-2">Service Interested In *</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {formData.serviceType && serviceRequirements[formData.serviceType] && (
                    <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                      <p className="text-sm font-semibold text-amber-800 mb-2">Requirements to prepare:</p>
                      <ul className="text-sm text-amber-700 space-y-1">
                        {serviceRequirements[formData.serviceType].map((req, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-amber-600 mt-2">
                        Upload your documents to Google Drive, then paste the shareable link below.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-[var(--text)] mb-2">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                  placeholder="Brgy. San Miguel, Tabaco City"
                />
              </div>

              <div>
                <label htmlFor="requirementsLink" className="block text-sm font-medium text-[var(--text)] mb-2">Link to Requirements (Google Drive / Cloud)</label>
                <input
                  type="url"
                  id="requirementsLink"
                  name="requirementsLink"
                  value={formData.requirementsLink}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                  placeholder="https://drive.google.com/..."
                />
                <p className="text-xs text-[var(--muted)] mt-1">
                  Upload your documents (ID, clearance, etc.) to Google Drive, set sharing to &quot;Anyone with the link&quot;, and paste the link here.
                </p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">Additional Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-vertical"
                  placeholder="Any special requests or notes..."
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

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--secondary)] hover:to-[var(--primary)] text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed text-lg"
                >
                  <Send className="w-5 h-5" />
                  {status === 'sending' ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
