import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import {
  BookOpen,
  Laptop,
  GraduationCap,
  Users,
  Info
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Programs & Events | Tabaco City Library and Information Center',
  description: 'Join community programs at Tabaco City Library — story time, digital literacy workshops, tutorial sessions, and more.',
};

export default function Programs() {
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
      <section className="content-section py-20 px-6">
        <SectionHeader
          tag={<><span className="text-2xl">📅</span> Programs & Events</>}
          title="Learn, Connect, Participate"
          description="Join community-focused programs designed to build literacy, digital skills, and lifelong learning—open to everyone."
        />

        <div className="container mx-auto max-w-6xl">
          <ul className="grid-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {programs.map((program, index) => (
              <li key={index} role="listitem">
                <Card
                  icon={program.icon}
                  title={program.title}
                  description={program.description}
                  className="h-full hover-glow glass p-6 rounded-xl shadow-[var(--shadow)] border border-[var(--border)]"
                />
              </li>
            ))}
          </ul>

          <div className="note bg-blue-50 border border-blue-200 rounded-xl p-6 mt-12 text-center">
            <p className="text-lg font-medium text-blue-800">
              Programs may vary depending on schedules and resource availability. For the latest updates, visit our Facebook page or contact us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}