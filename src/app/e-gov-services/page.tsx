import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import EGovServiceCard from '@/components/EGovServiceCard';
import {
  Users,
  Shield,
  FileText,
  User,
  Award,
  IdCard
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'E-Gov Services | Tabaco City Library and Information Center',
  description: 'Access online government services at Tabaco City Library — PAG-IBIG, SSS, NBI, NCSC, PRC, and PhilSys National ID assistance.',
};

export default function EGovServices() {
  const services = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'PAG-IBIG Fund',
      agency: 'Home Development Mutual Fund',
      description: 'Membership registration, contribution verification, and loan application guidance for PAG-IBIG members.',
      status: 'Online' as const,
      href: 'https://www.pagibigfund.gov.ph',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Social Security System (SSS)',
      agency: 'Social Security System',
      description: 'Registration, account assistance, and online transaction support for SSS members and employers.',
      status: 'Online' as const,
      href: 'https://www.sss.gov.ph',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'NBI Clearance',
      agency: 'National Bureau of Investigation',
      description: 'Online clearance application, appointment scheduling, and renewal assistance for NBI Clearance.',
      status: 'Online' as const,
      href: 'https://clearance.nbi.gov.ph',
    },
    {
      icon: <User className="w-5 h-5" />,
      title: 'NCSC',
      agency: 'National Commission on Senior Citizens',
      description: 'Senior citizen program registration, OSCA ID application, and benefit eligibility support.',
      status: 'Online' as const,
      href: 'https://www.ncsc.gov.ph',
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'PRC',
      agency: 'Professional Regulation Commission',
      description: 'Licensure exam applications, professional ID renewal, and verification of PRC credentials.',
      status: 'Maintenance' as const,
      href: 'https://www.prc.gov.ph',
    },
    {
      icon: <IdCard className="w-5 h-5" />,
      title: 'PHILSYS (National ID)',
      agency: 'Philippine Statistics Authority',
      description: 'National ID registration, status checking, ePhilID download, and claim support for PhilSys.',
      status: 'Online' as const,
      href: 'https://www.philsys.gov.ph',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6">
        <SectionHeader
          tag={<><span className="text-2xl">🆔</span> E-Gov Services</>}
          title="Online Government Transactions"
          description="A convenient, guided way to connect with national agencies for supported online transactions through the library's assistance."
        />

        <div className="container mx-auto max-w-6xl">
          <ul className="grid-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {services.map((service, index) => (
              <li key={index} role="listitem">
                <EGovServiceCard
                  icon={service.icon}
                  title={service.title}
                  agency={service.agency}
                  description={service.description}
                  status={service.status}
                  href={service.href}
                />
              </li>
            ))}
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