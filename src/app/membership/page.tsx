import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { IdCard, BookOpen, Wifi } from 'lucide-react';

export default function Membership() {
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
      <section className="content-section py-20 px-6" style={{ paddingTop: '108px' }}>
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
                  className="h-full text-center"
                />
              </li>
            ))}
          </ul>

          <div className="note bg-amber-50 border border-amber-200 rounded-xl p-6 mt-12 text-center">
            <p className="text-lg font-medium text-amber-800 mb-6">
              Fees are generally None/Free unless damaged items require replacement or repair.
            </p>
            <Link
              href="/library-services"
              className="btn btn-primary bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--secondary)] hover:to-[var(--primary)] text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-2 hover:scale-105"
            >
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              Learn About Library Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}