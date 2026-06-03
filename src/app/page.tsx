'use client';

import Link from 'next/link';
import { ChevronRight, BookOpen, Monitor, Cpu } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import HeroSection from '@/components/HeroSection';
import { useTranslations } from '@/i18n/useTranslations';

export default function Home() {
  const t = useTranslations();

  const partners = [
    {
      logo: '/partners/city-of-tabaco-local-government-unit-logo.png',
      title: 'City of Tabaco Local Government Unit',
      description: 'As the primary steward, the LGU ensures the library remains a fully funded, accessible public space. Their commitment transforms the library from a mere building into a vibrant community center dedicated to the welfare of Tabaqueños.'
    },
    {
      logo: '/partners/sanggunian-panlungsod-tabaco-city-logo.png',
      title: 'Sanggunian Panlungsod - Tabaco City',
      description: 'The City Council provides the crucial legislative framework and budgetary approvals needed for sustainable growth. Their ordinances ensure that the library\'s expansion, digital upgrades, and community programs are prioritized in the city\'s development agenda.'
    },
    {
      logo: '/partners/national-library-of-the-philippines-logo.png',
      title: 'National Library of the Philippines',
      description: 'Aligning with national standards, the NLP guides our cataloging systems, professional development for staff, and access to the Philippine eLib network, connecting Tabaco to the broader world of knowledge.'
    },
    {
      logo: '/partners/department-of-information-and-communications-technology-logo.png',
      title: 'Department of Information and Communications Technology',
      description: 'In partnership with the DICT, we are bridging the digital divide. This collaboration powers our E-Gov Services Integration, enabling seamless access to national platforms like PAG-IBIG, SSS, NBI, NCSC, PRC, and PHILSYS. The DICT also supports our infrastructure with reliable connectivity and cybersecurity standards, ensuring safe and efficient digital transactions for all patrons.'
    },
    {
      logo: '/partners/gender-and-development-office-logo.png',
      title: 'Gender and Development Office',
      description: 'We believe knowledge is for everyone. Working closely with the GAD Office, we curate inclusive collections and host programs that promote gender sensitivity, women\'s empowerment, and equal access to information. This partnership ensures our space is safe, welcoming, and responsive to the diverse needs of all genders and age groups.'
    },
    {
      logo: '/partners/deped-logo.svg',
      title: 'Department of Education (DepEd)',
      description: 'Working with the Department of Education to support literacy, lifelong learning, and educational programs for Tabaqueños of all ages.'
    },
  ];

  const steps = [
    {
      number: '01',
      icon: <BookOpen className="w-7 h-7" />,
      title: 'Prepare Your Requirements',
      description: 'Prepare your 2x2 ID picture, Barangay Clearance, and a valid government ID.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: <Monitor className="w-7 h-7" />,
      title: 'Submit Your Application',
      description: 'Fill out the online form or visit the library — our staff will guide you through the process.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      number: '03',
      icon: <Cpu className="w-7 h-7" />,
      title: 'Enjoy Your Benefits',
      description: 'Borrow books, use free WiFi, access e-Gov services, and join community programs.',
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Event Announcement Banner */}
      {new Date() < new Date('2026-06-11') && (
      <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white overflow-hidden">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
          <div className="flex items-center gap-3 px-4 py-2 sm:py-2.5 flex-1 min-w-0">
            <span className="flex-shrink-0 bg-white/20 backdrop-blur-sm text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Event</span>
            <div className="overflow-hidden flex-1 min-w-0">
              <div className="marquee-track flex gap-12 whitespace-nowrap">
                <span className="text-xs sm:text-sm font-medium">
                  🎨 Canva Graphic Design Workshop — June 9–10, 2026  •  Free for MSMEs  •  Register Now!  •
                </span>
                <span className="text-xs sm:text-sm font-medium">
                  🎨 Canva Graphic Design Workshop — June 9–10, 2026  •  Free for MSMEs  •  Register Now!  •
                </span>
              </div>
            </div>
          </div>
          <a
            href="https://forms.gle/45XufbbSQm9W9HCQA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-center text-sm font-extrabold bg-white text-[#0038A8] px-6 py-2.5 rounded-full hover:bg-blue-50 transition-colors shadow-[0_0_0_2px_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_0_0_2px_rgba(255,255,255,0.8),0_6px_16px_rgba(0,0,0,0.2)] mx-3 sm:mx-0 sm:mr-4 mb-2 sm:mb-0"
          >
            Register Now →
          </a>
        </div>
      </div>
      )}

      {/* Get Started in 3 Steps */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 scroll-animate" suppressHydrationWarning>
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="text-4xl md:text-6xl font-black text-[var(--text)] mb-6">
              <span className="block bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-blue-600 bg-clip-text text-transparent">
                Join the Library in 3 Simple Steps
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden shadow-xl hover-glow relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${step.color} p-8 flex items-center justify-center text-white relative`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <span className="absolute top-3 right-4 text-6xl font-black text-white/10 select-none">{step.number}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} text-white text-sm font-bold flex items-center justify-center`}>
                      {step.number}
                    </span>
                    <span className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">STEP {step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{step.description}</p>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--primary)] transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--secondary)] hover:to-[var(--primary)] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Apply Now
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {new Date() < new Date('2026-06-11') && (
      <section className="section py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 scroll-animate" suppressHydrationWarning>
        <div className="container mx-auto max-w-6xl">
          <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-8 md:p-12 text-white text-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">Upcoming Event</span>
              <h2 className="text-3xl md:text-5xl font-black mb-3 leading-tight">
                Elevate Your Business with Canva
              </h2>
              <p className="text-lg text-white/90 font-medium">Free Graphic Design Workshop</p>
            </div>
            <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-[var(--text)] leading-relaxed">
                  The Tabaco City Library and Information Center, through the Tech4ED Digital Transformation Center, invites local Micro, Small, and Medium Enterprises (MSMEs) to a free, two-day basic graphic design workshop. This session is designed to help entrepreneurs master Canva and create professional digital content to enhance their online presence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📅</span>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted)] font-medium">When</p>
                      <p className="text-sm font-semibold text-[var(--text)]">June 9–10, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted)] font-medium">Where</p>
                      <p className="text-sm font-semibold text-[var(--text)]">Tabaco City Library & Information Center</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">👥</span>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted)] font-medium">Who can join</p>
                      <p className="text-sm font-semibold text-[var(--text)]">All Tabaco City MSMEs</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--muted)]">
                  Snacks and lunch will be provided to all participants. Slots are limited and will be allocated on a first-come, first-served basis.
                </p>
              </div>
              <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
                <img
                  src="/images/canva-workshop.png"
                  alt="QR Code - Register for Canva Workshop"
                  className="w-auto h-auto max-w-full max-h-[320px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Partners Section */}
      <section className="section py-20 px-6 bg-gradient-to-r from-[var(--bg)] to-blue-50/50 scroll-animate" aria-labelledby="partners-title" suppressHydrationWarning>
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            tag={<><span className="text-2xl">🤝</span> {t.partners.tag}</>}
            title={t.partners.title}
            description={t.partners.desc}
            id="partners-title"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl shadow-lg hover-glow text-center group"
              >
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3 shadow border border-white/20 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xs font-semibold text-[var(--text)] leading-tight">{partner.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
