'use client';

import { useState, useEffect, useRef } from 'react';
import { BookOpen, Laptop, GraduationCap, Users, Info, Calendar, Clock, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { useTranslations } from '@/i18n/useTranslations';
import { events, getEventStatus, formatEventDate } from '@/data/events';
import type { Event, EventStatus } from '@/data/events';

function statusConfig(t: ReturnType<typeof useTranslations>): Record<EventStatus, { label: string; classes: string }> {
  return {
    upcoming: {
      label: t.programs.statusUpcoming,
      classes: 'bg-blue-100 text-blue-800 border-blue-200',
    },
    ongoing: {
      label: t.programs.statusOngoing,
      classes: 'bg-green-100 text-green-800 border-green-200',
    },
    past: {
      label: t.programs.statusPast,
      classes: 'bg-gray-200 text-gray-700 border-gray-300',
    },
  };
}

function EventCard({ event, t }: { event: Event; t: ReturnType<typeof useTranslations> }) {
  const status = getEventStatus(event);
  const config = statusConfig(t)[status];
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setLightboxIdx((lightboxIdx - 1 + event.images!.length) % event.images!.length);
      if (e.key === 'ArrowRight') setLightboxIdx((lightboxIdx + 1) % event.images!.length);
      if (e.key === 'Escape') setLightboxIdx(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIdx, event.images]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setLightboxIdx((lightboxIdx! + 1) % event.images!.length);
      else setLightboxIdx((lightboxIdx! - 1 + event.images!.length) % event.images!.length);
    }
  };

  return (
    <>
      <div className="rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md shadow-sm">
        <div className="p-6 bg-white">
          <div className="flex items-start justify-between mb-3">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${config.classes}`}>
              {config.label}
            </span>
            {event.registrationLink && status !== 'past' && (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 underline"
              >
                Register →
              </a>
            )}
          </div>

          <h3 className="text-lg font-bold mb-2 text-gray-900">
            {event.title}
          </h3>

          <p className="text-sm mb-4 leading-relaxed text-gray-600">
            {event.description}
          </p>

          <div className="space-y-1.5 mb-4">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar className="w-3.5 h-3.5" />
              {formatEventDate(event.startDate)}{formatEventDate(event.startDate) !== formatEventDate(event.endDate) ? ` — ${formatEventDate(event.endDate)}` : ''}
            </div>
            {event.time && (
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock className="w-3.5 h-3.5" />
                {event.time}
              </div>
            )}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <MapPin className="w-3.5 h-3.5" />
              {event.location}
            </div>
          </div>

          {/* Cover Image Gallery */}
          {event.images && event.images.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => setLightboxIdx(0)}
                className="w-full relative overflow-hidden rounded-xl border border-gray-200 bg-gray-100 group"
              >
                <img
                  src={event.images[0]}
                  alt={`${event.title} cover photo`}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg">
                    Click to view all {event.images.length} photos
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && event.images && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + event.images!.length) % event.images!.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <img
            src={event.images![lightboxIdx]}
            alt={`${event.title} photo ${lightboxIdx + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % event.images!.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-1.5 rounded-full">
            {lightboxIdx + 1} / {event.images!.length}
          </div>
        </div>
      )}
    </>
  );
}

function EventSection({ title, description, events, status, t }: { title: string; description: string; events: Event[]; status: EventStatus; t: ReturnType<typeof useTranslations> }) {
  if (events.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function ProgramsClient() {
  const t = useTranslations();
  const now = new Date();
  const ongoingEvents = events.filter((e) => now >= e.startDate && now <= e.endDate).sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  const upcomingEvents = events.filter((e) => now < e.startDate).sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  const pastEvents = events.filter((e) => now > e.endDate).sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  const programsList = [
    { icon: <BookOpen className="w-8 h-8" />, title: t.programs.story.title, desc: t.programs.story.desc },
    { icon: <Laptop className="w-8 h-8" />, title: t.programs.digital.title, desc: t.programs.digital.desc },
    { icon: <GraduationCap className="w-8 h-8" />, title: t.programs.tutorial.title, desc: t.programs.tutorial.desc },
    { icon: <Users className="w-8 h-8" />, title: t.programs.community.title, desc: t.programs.community.desc },
    { icon: <Info className="w-8 h-8" />, title: t.programs.announcements.title, desc: t.programs.announcements.desc },
  ];

  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6">
        <SectionHeader
          tag={t.programs.tag}
          title={t.programs.title}
          description={t.programs.desc}
        />

        <div className="container mx-auto max-w-6xl">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {programsList.map((program, index) => (
              <li key={index} role="listitem">
                <Card
                  icon={program.icon}
                  title={program.title}
                  description={program.desc}
                  className="h-full border border-gray-200 bg-white shadow-sm rounded-xl"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            tag={t.programs.eventsTimeline}
            title={t.programs.title}
            description={t.programs.eventsTimelineDesc}
          />

          {ongoingEvents.length === 0 && upcomingEvents.length === 0 && pastEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-gray-500">{t.programs.eventsEmpty}</p>
            </div>
          )}

          <EventSection
            title={t.programs.eventsOngoing}
            description={t.programs.eventsOngoingDesc}
            events={ongoingEvents}
            status="ongoing"
            t={t}
          />

          <EventSection
            title={t.programs.eventsUpcoming}
            description={t.programs.eventsUpcomingDesc}
            events={upcomingEvents}
            status="upcoming"
            t={t}
          />

          <EventSection
            title={t.programs.eventsPast}
            description={t.programs.eventsPastDesc}
            events={pastEvents}
            status="past"
            t={t}
          />
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-sm font-medium text-blue-800">
              {t.programs.note.split('. ').slice(0, -1).join('. ')}.
              For the latest updates, visit our <a href="https://www.facebook.com/profile.php?id=61585715202676" target="_blank" rel="noopener noreferrer" className="underline font-bold">Facebook page</a> or <a href="/contact" className="underline font-bold">contact us</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
