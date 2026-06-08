'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import HeroSection from '@/components/HeroSection';

const EVENT_END = new Date('2026-06-11');
const SHOW_EVENT = typeof window !== 'undefined' ? new Date() < EVENT_END : true;

function MarqueeBanner() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let pos = 0;
    let id: number;

    const animate = () => {
      pos -= 0.5;
      const half = el.scrollWidth / 2;
      if (pos <= -half) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      id = requestAnimationFrame(animate);
    };
    id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="overflow-hidden flex-1 min-w-0">
      <div ref={trackRef} className="flex gap-20 whitespace-nowrap" style={{ willChange: 'transform' }}>
        <span className="text-xs sm:text-sm font-medium text-stone-300">
          Canva Graphic Design Workshop  —  June 9–10, 2026  —  Free for MSMEs  —  Register at the library or online  —
        </span>
        <span className="text-xs sm:text-sm font-medium text-stone-300">
          Canva Graphic Design Workshop  —  June 9–10, 2026  —  Free for MSMEs  —  Register at the library or online  —
        </span>
      </div>
    </div>
  );
}

export default function HomeClient() {

  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const translateRef = useRef(0);
  const centerRef = useRef(0);

  const [centerIdx, setCenterIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const startScroll = useCallback(() => {
    let lastTime = 0;
    let lastCenterUpdate = 0;

    const animate = (time: number) => {
      const track = trackRef.current;
      if (!track) return;
      if (!lastTime) lastTime = time;
      const dt = time - lastTime;
      lastTime = time;

      translateRef.current -= (18 * dt) / 1000;

      const half = track.scrollWidth / 2;
      if (Math.abs(translateRef.current) >= half) {
        translateRef.current = 0;
      }

      track.style.transform = `translateX(${translateRef.current}px)`;

      // Find which item is closest to center (throttled)
      if (time - lastCenterUpdate > 250) {
        lastCenterUpdate = time;
        const container = track.parentElement;
        if (container) {
          const cRect = container.getBoundingClientRect();
          const cx = cRect.left + cRect.width / 2;
          let best = 0;
          let bestDist = Infinity;
          for (let i = 0; i < 42; i++) {
            const child = track.children[i] as HTMLElement;
            if (!child) continue;
            const r = child.getBoundingClientRect();
            const d = Math.abs(r.left + r.width / 2 - cx);
            if (d < bestDist) {
              bestDist = d;
              best = i % 21;
            }
          }
          if (best !== centerRef.current) {
            centerRef.current = best;
            setCenterIdx(best);
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  const stopScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
  }, []);

  useEffect(() => {
    startScroll();
    return () => stopScroll();
  }, [startScroll, stopScroll]);

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
      title: 'Prepare Your Requirements',
      description: 'Prepare your 2x2 ID picture, Barangay Clearance, and a valid government ID.',
    },
    {
      number: '02',
      title: 'Submit Your Application',
      description: 'Fill out the online form or visit the library — our staff will guide you through the process.',
    },
    {
      number: '03',
      title: 'Enjoy Your Benefits',
      description: 'Borrow books, use free WiFi, access e-Gov services, and join community programs.',
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* News Ticker Banner */}
      {SHOW_EVENT && (
      <div className="sticky top-16 z-40 bg-stone-900/95 backdrop-blur-md border-b border-white/10 text-white overflow-hidden shadow-lg">
        <div className="flex items-stretch">
          <div className="flex items-center gap-3 bg-gradient-to-r from-red-700 to-red-600 px-4 md:px-6 py-2.5 flex-shrink-0">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">Upcoming Event</span>
          </div>
          <div className="flex items-center flex-1 min-w-0 overflow-hidden px-4">
            <MarqueeBanner />
          </div>
          <a
            href="https://forms.gle/45XufbbSQm9W9HCQA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1.5 text-xs font-bold bg-white/10 hover:bg-white/20 transition-colors px-5 py-2.5 border-l border-white/10"
          >
            Register
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      )}

      {/* Get Started in 3 Steps */}
      <section className="py-20 md:py-24 bg-gray-50 scroll-animate">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join the Library in 3 Simple Steps
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              From requirements to membership, we make it easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="p-6">
                  <div className={`w-10 h-10 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center text-lg font-bold mb-4`}>
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-bold px-8 py-3.5 rounded-xl transition-colors duration-300 shadow-sm"
            >
              Apply Now
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* E-Gov Services Hint */}
      <section className="py-16 md:py-20 bg-white scroll-animate border-b border-gray-100">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <div className="mb-5">
            <img src="/images/agencies/egovph.png" alt="eGovPH" className="h-10 w-auto mx-auto mb-2" />
            <span className="block text-xs font-semibold text-[var(--primary)] uppercase tracking-widest">E-Gov Services</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Need Help with Government Transactions?
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-6 leading-relaxed">
            The library offers free assistance with online appointments and registrations for&nbsp;
            PAG-IBIG, PSA, NBI, DFA, SSS, PRC, NCSC, and PNP.
          </p>
          <Link
            href="/e-gov-services"
            className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-bold px-7 py-3 rounded-xl transition-colors duration-300 shadow-sm text-sm"
          >
            View Available Services
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Newly Acquired Reviewers */}
      <section className="py-20 md:py-24 bg-white scroll-animate overflow-hidden">
        <div className="text-center mb-10 px-6">
          <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-widest mb-3">New Arrivals</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Newly Acquired Reviewers
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Review books for professional and academic exams.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {[
              { label: 'Nursing' },
              { label: 'Midwifery' },
              { label: 'LEPT' },
              { label: 'NAPOLCOM' },
              { label: 'Criminology' },
              { label: 'Civil Service' },
              { label: 'UPCAT' },
            ].map((tag) => (
              <span key={tag.label} className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-md">
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative group/carousel" onMouseEnter={stopScroll} onMouseLeave={startScroll}>
          {/* Left Arrow */}
          <button
            onClick={() => {
              translateRef.current += 280;
              if (translateRef.current > 0) translateRef.current = 0;
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-gray-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => {
              translateRef.current -= 280;
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-gray-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Edge gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          {/* Carousel track */}
          <div className="overflow-hidden px-8 md:px-16 pt-6 pb-2">
            <div
              ref={trackRef}
              className="flex gap-2 md:gap-3"
              style={{ willChange: 'transform' }}
            >
              {Array.from({ length: 42 }, (_, i) => {
                const idx = i % 21;
                const isActive = hoveredIdx !== null ? hoveredIdx === idx : centerIdx === idx;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className={`flex-shrink-0 w-[180px] md:w-[220px] relative rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white transition-all duration-500 ease-out ${isActive ? 'z-20 scale-[1.08] -translate-y-3 shadow-lg border-gray-300' : 'z-0'}`}
                  >
                    <div className="aspect-[2/3] relative overflow-hidden">
                      <img
                        src={`/images/reviewers/reviewer-${idx + 1}.jpg`}
                        alt={`Review book ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6 px-6">
          Hover to preview · Auto-scrolling
        </p>
      </section>

      {/* Featured Event */}
      {SHOW_EVENT && (
      <section className="py-20 md:py-24 bg-gray-50 scroll-animate">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="bg-[var(--primary)] p-8 md:p-10 text-white">
              <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider mb-3">Upcoming Event</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-1">
                Elevate Your Business with Canva
              </h2>
              <p className="text-white/80 text-base">Free Graphic Design Workshop</p>
            </div>
            <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <p className="text-gray-700 leading-relaxed text-sm">
                  The Tabaco City Library and Information Center, through the Tech4ED Digital Transformation Center, invites local Micro, Small, and Medium Enterprises (MSMEs) to a free, two-day basic graphic design workshop. This session is designed to help entrepreneurs master Canva and create professional digital content to enhance their online presence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Dat</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">When</p>
                      <p className="text-sm font-semibold text-gray-800">June 9–10, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-gray-500 uppercase">Loc</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Where</p>
                      <p className="text-sm font-semibold text-gray-800">Tabaco City Library & Information Center</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-gray-500 uppercase">AUD</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Who can join</p>
                      <p className="text-sm font-semibold text-gray-800">All Tabaco City MSMEs</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  Snacks and lunch will be provided to all participants. Slots are limited and will be allocated on a first-come, first-served basis.
                </p>
              </div>
              <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4 border border-gray-200">
                <img
                  src="/images/canva-workshop.png"
                  alt="QR Code — Register for Canva Workshop"
                  className="w-auto h-auto max-w-full max-h-[280px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Partners Section */}
      <section className="py-20 md:py-24 bg-white scroll-animate" aria-labelledby="partners-title">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-widest mb-3">Our Partners</p>
            <h2 id="partners-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Building Community Together
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Strategic partnerships that enhance our ability to serve the community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-center p-5"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3 border border-gray-100">
                  <img
                    src={partner.logo}
                    alt={partner.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xs font-semibold text-gray-700 leading-tight">{partner.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
