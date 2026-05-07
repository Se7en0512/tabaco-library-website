'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, MapPin, Clock, Mail, Play, X } from 'lucide-react';
import { useState } from 'react';
import TestimonialMarquee from '@/components/TestimonialMarquee';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const quickAccessCards = [
    {
      href: '/e-gov-services',
      icon: <img src="/icons/egov-services-icon.png" alt="E-Gov Services Icon" className="w-12 h-12 object-contain" />,
      title: 'E-Gov Services',
      description: 'Seamlessly connect with national agencies for essential online transactions and government services.',
    },
    {
      href: '/library-services',
      icon: <img src="/icons/library-services-icon.png" alt="Library Services Icon" className="w-12 h-12 object-contain" />,
      title: 'Library Services',
      description: 'Access comprehensive library resources, borrow materials, and receive expert research assistance.',
    },
    {
      href: '/programs',
      icon: <img src="/icons/programs-events-icon.png" alt="Programs & Events Icon" className="w-12 h-12 object-contain" />,
      title: 'Programs & Events',
      description: 'Join our educational workshops, digital literacy classes, and enriching community programs.',
    },
  ];

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
  ];

  const libraryVideos = [
    {
      id: 1,
      name: 'TECH4ED',
      company: 'Educational Partner',
      videoUrl: '/videos/TECH4ED VIDEO.mp4',
      thumbnail: '/videos/tech4ed-thumbnail.jpg'
    },
    {
      id: 2,
      name: 'Tabaco City Library',
      company: 'Information Center',
      videoUrl: '/videos/Tabaco City Library and Information Center.mp4',
      thumbnail: '/videos/library-thumbnail.jpg'
    },
    {
      id: 3,
      name: 'DTC',
      company: 'Digital Transformation Center',
      videoUrl: '/videos/DTC.mp4',
      thumbnail: '/videos/dtc-thumbnail.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Library Showcase */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 scroll-animate" suppressHydrationWarning>
        <div className="container mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--text)] mb-6">
              <span className="block bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-blue-600 bg-clip-text text-transparent">
                Library Showcase
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full mx-auto"></div>
          </div>

          {/* Video Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {libraryVideos.map((video, index) => (
              <div
                key={video.id}
                className="group relative glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setPlayingVideo(video.videoUrl)}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                  <img
                    src={video.thumbnail}
                    alt={`${video.name} - ${video.company}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop`;
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    {video.id === 1 && '3:45'}
                    {video.id === 2 && '2:12'}
                    {video.id === 3 && '4:23'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--text)] mb-2 text-center">{video.name}</h3>
                  <p className="text-[var(--muted)] text-center mb-3 font-medium">{video.company}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed text-center">
                    {video.id === 1 && 'Discover cutting-edge educational technology programs designed to enhance learning experiences and digital skills development.'}
                    {video.id === 2 && 'Explore the heart of Tabaco City\'s premier information hub, showcasing our commitment to community knowledge and growth.'}
                    {video.id === 3 && 'Experience how we bridge the digital divide through comprehensive technology training and innovative digital solutions.'}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--primary)] transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Minimal CTA */}
          <div className="text-center mt-12">
            <Link
              href="/library-services"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--secondary)] font-semibold transition-colors duration-300"
            >
              <span>View All Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="section py-20 px-6 scroll-animate" aria-labelledby="quick-access-title" suppressHydrationWarning>
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            tag="Discover Our Services"
            title="How Can We Support Your Journey?"
            id="quick-access-title"
          />

          <ul className="grid-cards quick-access-grid grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {quickAccessCards.map((card, index) => (
              <li key={index} className="quick-card scroll-animate animate-delay-200" role="listitem" style={{ animationDelay: `${index * 0.1}s` }} suppressHydrationWarning>
                <Card
                  href={card.href}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  className="h-full hover:border-[var(--primary)] transition-colors"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section py-20 px-6 bg-gradient-to-r from-[var(--bg)] to-blue-50/50 scroll-animate" aria-labelledby="partners-title" suppressHydrationWarning>
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            tag={<><span className="text-2xl">🤝</span> Our Partners</>}
            title="Building Community Together"
            description="Strategic partnerships that enhance our ability to serve the community through combined resources, expertise, and shared commitment to public service excellence."
            id="partners-title"
          />

          <div className="space-y-20">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 scroll-animate animate-delay-${(index + 1) * 100}`} suppressHydrationWarning
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)]">{partner.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full mt-2"></div>
                  </div>
                  <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
                    {partner.description}
                  </p>
                  <div className="flex items-center gap-2 text-[var(--primary)] font-semibold">
                    <span className="text-sm">Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Visual Side - Partner Showcase */}
                <div className="flex-1">
                  <div className="glass p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      {/* Partner Logo */}
                      <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-white/20 overflow-hidden">
                        <img
                          src={partner.logo}
                          alt={`${partner.title} Logo`}
                          className={`${partner.title === 'Department of Information and Communications Technology' ? 'w-20 h-20' : 'w-16 h-16'} object-contain`}
                        />
                      </div>

                      {/* Support Description */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-[var(--text)]">Library Support</h4>
                        <p className="text-xs text-[var(--muted)] leading-relaxed">
                          {partner.title === 'Department of Information and Communications Technology' && 'In partnership with the DICT, we are bridging the digital divide. This collaboration powers our E-Gov Services Integration, enabling seamless access to national platforms like PAG-IBIG, SSS, NBI, NCSC, PRC, and PHILSYS. The DICT also supports our infrastructure with reliable connectivity and cybersecurity standards, ensuring safe and efficient digital transactions for all patrons.'}
                          {partner.title === 'National Library of the Philippines' && 'Aligning with national standards, the NLP guides our cataloging systems, professional development for staff, and access to the Philippine eLib network, connecting Tabaco to the broader world of knowledge.'}
                          {partner.title === 'City of Tabaco Local Government Unit' && 'As the primary steward, the LGU ensures the library remains a fully funded, accessible public space. Their commitment transforms the library from a mere building into a vibrant community center dedicated to the welfare of Tabaqueños.'}
                          {partner.title === 'Sanggunian Panlungsod - Tabaco City' && 'The City Council provides the crucial legislative framework and budgetary approvals needed for sustainable growth. Their ordinances ensure that the library\'s expansion, digital upgrades, and community programs are prioritized in the city\'s development agenda.'}
                          {partner.title === 'Gender and Development Office' && 'We believe knowledge is for everyone. Working closely with the GAD Office, we curate inclusive collections and host programs that promote gender sensitivity, women\'s empowerment, and equal access to information. This partnership ensures our space is safe, welcoming, and responsive to the diverse needs of all genders and age groups.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {playingVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[80vh] bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Player */}
            <video
              src={playingVideo}
              controls
              autoPlay
              className="w-full h-full max-h-[70vh] object-contain"
              onError={() => {
                // Handle video load error
                alert('Video not found. Please check if the video file has been uploaded.');
                setPlayingVideo(null);
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
