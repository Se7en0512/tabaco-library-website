import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import {
  Users,
  Shield,
  FileText,
  User,
  Award,
  IdCard
} from 'lucide-react';

export default function EGovServices() {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'PAG-IBIG Fund',
      description: 'Membership and contribution assistance.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Social Security System (SSS)',
      description: 'Registration and account assistance.',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'NBI',
      description: 'Clearance-related guidance and support.',
    },
    {
      icon: <User className="w-8 h-8" />,
      title: 'National Commission on Senior Citizens (NCSC)',
      description: 'Senior citizen program and eligibility support.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'PRC',
      description: 'Licensure and professional verification guidance.',
    },
    {
      icon: <IdCard className="w-8 h-8" />,
      title: 'PHILSYS (National ID)',
      description: 'Registration, status checking, and PhilID claim support.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6" style={{ paddingTop: '108px' }}>
        <SectionHeader
          tag={<><span className="text-2xl">🆔</span> E-Gov Services</>}
          title="Online Government Transactions"
          description="A convenient, guided way to connect with national agencies for supported online transactions through the library's assistance."
        />

        <div className="container mx-auto max-w-6xl">
          <ul className="grid-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {services.map((service, index) => (
              <li key={index} role="listitem">
                <Card
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  className="h-full"
                />
              </li>
            ))}

            <li className="md:col-span-2 lg:col-span-3" role="listitem">
              <Card className="text-center h-full">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-4">
                  Other Government Transactions
                </h3>
                <p className="text-[var(--muted)]">
                  Additional government transactions may be supported depending on agency authorizations for online processing.
                </p>
              </Card>
            </li>
          </ul>

          <div className="note bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-12">
            <p className="text-lg font-medium text-yellow-800 text-center">
              📌 Note: Services are limited to transactions officially authorized for online processing by the respective agencies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}