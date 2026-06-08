'use client';

import { BookOpen, Laptop, GraduationCap, Users, Info, Calendar, Clock, MapPin } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

interface Event {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  time?: string;
  location?: string;
  image?: string;
  registrationLink?: string;
}

type EventStatus = 'upcoming' | 'ongoing' | 'past';

const events: Event[] = [
  {
    id: 1,
    title: 'Canva Graphic Design Workshop',
    description: 'A free two-day workshop for Tabaco City MSMEs to master Canva and create professional digital content for their business. Snacks and lunch provided.',
    startDate: new Date('2026-06-09'),
    endDate: new Date('2026-06-10'),
    time: '8:00 AM - 5:00 PM',
    location: 'Tabaco City Library & Information Center',
    registrationLink: 'https://forms.gle/45XufbbSQm9W9HCQA',
  },
  {
    id: 2,
    title: 'Digital Literacy for Seniors',
    description: 'Basic computer skills workshop for senior citizens. Learn how to use email, browse the internet safely, and access government services online.',
    startDate: new Date('2026-05-20'),
    endDate: new Date('2026-05-21'),
    time: '9:00 AM - 12:00 PM',
    location: 'Tabaco City Library',
  },
  {
    id: 3,
    title: 'Storytelling Hour: Children\'s Reading Festival',
    description: 'A fun-filled morning of stories, songs, and activities for children ages 3-7. Parents and guardians are welcome to join.',
    startDate: new Date('2026-04-15'),
    endDate: new Date('2026-04-15'),
    time: '10:00 AM - 11:30 AM',
    location: 'Tabaco City Library',
  },
  {
    id: 4,
    title: 'E-Gov Services Orientation',
    description: 'Learn how to access government services online — SSS, PAG-IBIG, PhilSys, NBI Clearance, and more. One-on-one assistance available.',
    startDate: new Date('2026-03-10'),
    endDate: new Date('2026-03-11'),
    time: '9:00 AM - 4:00 PM',
    location: 'Tabaco City Library',
  },
];

const statusConfig: Record<EventStatus, { label: string; classes: string }> = {
  upcoming: {
    label: 'Upcoming',
    classes: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  ongoing: {
    label: 'Ongoing',
    classes: 'bg-green-100 text-green-800 border-green-200',
  },
  past: {
    label: 'Past Event',
    classes: 'bg-gray-100 text-gray-500 border-gray-200',
  },
};

function getStatus(event: Event): EventStatus {
  const now = new Date();
  if (now >= event.startDate && now <= event.endDate) return 'ongoing';
  if (now < event.startDate) return 'upcoming';
  return 'past';
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function EventCard({ event }: { event: Event }) {
  const status = getStatus(event);
  const config = statusConfig[status];

  return (
    <div className={`rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md ${status === 'past' ? 'opacity-70 hover:opacity-100' : 'shadow-sm'}`}>
      <div className={`p-6 ${status === 'past' ? 'bg-gray-50' : 'bg-white'}`}>
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

        <h3 className={`text-lg font-bold mb-2 ${status === 'past' ? 'text-gray-500' : 'text-gray-900'}`}>
          {event.title}
        </h3>

        <p className={`text-sm mb-4 leading-relaxed ${status === 'past' ? 'text-gray-400' : 'text-gray-600'}`}>
          {event.description}
        </p>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(event.startDate)}{formatDate(event.startDate) !== formatDate(event.endDate) ? ` — ${formatDate(event.endDate)}` : ''}
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
      </div>
    </div>
  );
}

function EventSection({ title, description, events, status }: { title: string; description: string; events: Event[]; status: EventStatus }) {
  if (events.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default function ProgramsClient() {
  const now = new Date();
  const ongoingEvents = events.filter((e) => now >= e.startDate && now <= e.endDate);
  const upcomingEvents = events.filter((e) => now < e.startDate);
  const pastEvents = events.filter((e) => now > e.endDate).reverse();

  const programs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Story Time & Reading Clubs',
      description: 'Engaging sessions for children and families to nurture reading habits and creativity.',
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Digital Literacy Workshops',
      description: 'Practical learning for basic computer skills and safe, confident online navigation.',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Tutorial Sessions',
      description: 'Guided help for schoolwork, research, and supported e-gov transaction preparation.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Learning Programs',
      description: 'Collaborative programs that strengthen inclusion, participation, and access to information.',
    },
    {
      icon: <Info className="w-8 h-8" />,
      title: 'Announcement Updates',
      description: 'Check back regularly for newly scheduled events and program schedules.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Programs Section */}
      <section className="content-section py-20 px-6">
        <SectionHeader
          tag="Programs &amp; Events"
          title="Learn, Connect, Participate"
          description="Join community-focused programs designed to build literacy, digital skills, and lifelong learning—open to everyone."
        />

        <div className="container mx-auto max-w-6xl">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {programs.map((program, index) => (
              <li key={index} role="listitem">
                <Card
                  icon={program.icon}
                  title={program.title}
                  description={program.description}
                  className="h-full border border-gray-200 bg-white shadow-sm rounded-xl"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Events Timeline Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            tag="Events Timeline"
            title="What's Happening at the Library"
            description="Events are automatically categorized — past, ongoing, or upcoming — based on the date."
          />

          {ongoingEvents.length === 0 && upcomingEvents.length === 0 && pastEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-gray-500">No events scheduled yet. Check back soon!</p>
            </div>
          )}

          <EventSection
            title="Ongoing"
            description="Happening right now — don't miss out!"
            events={ongoingEvents}
            status="ongoing"
          />

          <EventSection
            title="Upcoming"
            description="Mark your calendar for these upcoming events."
            events={upcomingEvents}
            status="upcoming"
          />

          <EventSection
            title="Past Events"
            description="Events that have already taken place."
            events={pastEvents}
            status="past"
          />
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-sm font-medium text-blue-800">
              Programs may vary depending on schedules and resource availability. For the latest updates, visit our <a href="https://www.facebook.com/profile.php?id=61585715202676" target="_blank" rel="noopener noreferrer" className="underline font-bold">Facebook page</a> or <a href="/contact" className="underline font-bold">contact us</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
