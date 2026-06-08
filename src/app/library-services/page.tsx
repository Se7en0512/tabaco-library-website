import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { IdCard, Search, BookOpen, RotateCcw, Wifi } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Library Services | Tabaco City Library and Information Center',
  description: 'Explore our free library services — card application, research assistance, book borrowing, and internet access at Tabaco City Library.',
};

export default function LibraryServices() {
  const services = [
    {
      icon: <IdCard className="w-8 h-8" />,
      title: 'Library Card Application',
      description: (
        <div>
          <strong>Free</strong><br />
          Requirements: 2x1 ID pictures, Barangay Clearance, Valid ID<br />
          Processing time: ~40 mins total (steps consolidated for convenience)
        </div>
      ),
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Library Research',
      description: (
        <div>
          <strong>Free</strong><br />
          Requirements: Valid ID/Library Card; sign logbook and deposit bags (valuables exempted)<br />
          Processing time: ~22 mins total
        </div>
      ),
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Borrowing Books',
      description: (
        <div>
          <strong>Free</strong><br />
          Requirements: Validated Library Card; check for defects before borrowing<br />
          Processing time: ~28–48 mins total
        </div>
      ),
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: 'Returning Books',
      description: (
        <div>
          <strong>Free</strong><br />
          Requirements: Validated Library Card; return items for damage checking<br />
          Notes: Damaged items may incur fees<br />
          Processing time: ~25 mins total
        </div>
      ),
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Internet & E-Resources',
      description: (
        <div>
          <strong>Free</strong><br />
          Requirements: Valid ID/Library Card; computer session access with time limit<br />
          Time: 1-hr limit (extendable if free)<br />
          Processing time: ~16 mins total
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6">
        <SectionHeader
          tag="Library Services"
          title="Citizen's Charter"
          description="Quick overview of commonly requested library services. Fees are generally None/Free unless items are damaged."
        />

        <div className="container mx-auto max-w-6xl">
          <ul className="grid-cards grid grid-cols-1 lg:grid-cols-2 gap-8" role="list">
            {services.map((service, index) => (
              <li key={index} role="listitem">
                <Card
                  icon={service.icon}
                  title={service.title}
                  className="h-full border border-gray-200 bg-white shadow-sm p-6 rounded-xl"
                >
                  <div className="text-[var(--muted)] leading-relaxed">
                    {service.description}
                  </div>
                </Card>
              </li>
            ))}
          </ul>

          <div className="note bg-blue-50 border border-blue-200 rounded-xl p-6 mt-12 text-center">
            <p className="text-lg font-medium text-blue-800 mb-6">
              All services are provided by trained library staff. Processing times are approximate.
            </p>
            <Link
              href="/membership"
              className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-bold px-8 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
            >
              Learn About Membership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
