import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import { Search, BookOpen, Mail, Clock } from 'lucide-react';

export default function SearchPage() {
  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6" style={{ paddingTop: '108px' }}>
        <SectionHeader
          tag={<><Search className="w-6 h-6" /> Search</>}
          title="Under Development"
          description="The library catalog search is currently being prepared. In the meantime, you may visit the library or contact us for assistance."
        />

        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center h-full">
              <div className="card-icon w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-4">How to find a book</h3>
              <p className="text-[var(--muted)]">
                Tell our staff the title/author you're looking for, and we will help you locate the best available option.
              </p>
            </Card>

            <Card className="text-center h-full">
              <div className="card-icon w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-4">Need help now?</h3>
              <p className="text-[var(--muted)] mb-4">
                Email us at <strong>citylibrarytabaco@gmail.com</strong> or visit us during operating hours.
              </p>
            </Card>

            <Card className="text-center h-full">
              <div className="card-icon w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-4">Operating Hours</h3>
              <p className="text-[var(--muted)]">
                Monday – Thursday | 7:00 AM – 6:00 PM<br />
                Closed on Holidays
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}