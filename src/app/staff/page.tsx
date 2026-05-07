'use client';

import SectionHeader from '@/components/SectionHeader';
import { Users, UserCheck } from 'lucide-react';

export default function Staff() {
  const administration = [
    { name: 'Baby Glenda O. Bongao', role: 'City Vice-Mayor', avatar: 'https://ui-avatars.com/api/?name=Baby+Glenda+O.+Bongao&background=random&size=128' },
    { name: 'Katherine T. Bunao', role: 'City Librarian', avatar: 'https://ui-avatars.com/api/?name=Katherine+T.+Bunao&background=random&size=128' },
    { name: 'Marilyn M. Bendicio', role: 'Consultant Librarian', avatar: 'https://ui-avatars.com/api/?name=Marilyn+M.+Bendicio&background=random&size=128' },
  ];

  const circulation = [
    { name: 'Glenda L. Hagosohos', role: 'Permanent Circulation', avatar: 'https://ui-avatars.com/api/?name=Glenda+L.+Hagosohos&background=random&size=128' },
    { name: 'Jecel B. Burce', role: 'Casual Librarian', avatar: 'https://ui-avatars.com/api/?name=Jecel+B.+Burce&background=random&size=128' },
    { name: 'Bonifacio B. Borlasa III', role: 'Casual Information', avatar: 'https://ui-avatars.com/api/?name=Bonifacio+B.+Borlasa+III&background=random&size=128' },
    { name: 'Frances C. Volante', role: 'Bag Depository', avatar: 'https://ui-avatars.com/api/?name=Frances+C.+Volante&background=random&size=128' },
    { name: 'Eva B. Meneses', role: 'Local History', avatar: 'https://ui-avatars.com/api/?name=Eva+B.+Meneses&background=random&size=128' },
    { name: 'Angelina B. Bron', role: 'GAD Corner', avatar: 'https://ui-avatars.com/api/?name=Angelina+B.+Bron&background=random&size=128' },
    { name: 'Marilyn R. Lovenario', role: 'Periodicals', avatar: 'https://ui-avatars.com/api/?name=Marilyn+R.+Lovenario&background=random&size=128' },
    { name: 'Armaela C. Bonto', role: 'Children Section', avatar: 'https://ui-avatars.com/api/?name=Armaela+C.+Bonto&background=random&size=128' },
    { name: 'France N. Buiza', role: 'Book Nook', avatar: 'https://ui-avatars.com/api/?name=France+N.+Buiza&background=random&size=128' },
    { name: 'Myra B. Bombita', role: 'Voucher Processor Reference', avatar: 'https://ui-avatars.com/api/?name=Myra+B.+Bombita&background=random&size=128' },
    { name: 'Anna Rose D. Canon', role: 'Fiction', avatar: 'https://ui-avatars.com/api/?name=Anna+Rose+D.+Canon&background=random&size=128' },
    { name: 'Shyla P. Bonaobra', role: 'Law Corner', avatar: 'https://ui-avatars.com/api/?name=Shyla+P.+Bonaobra&background=random&size=128' },
    { name: 'Maria Loures Bongalon', role: 'Processor', avatar: 'https://ui-avatars.com/api/?name=Maria+Loures+Bongalon&background=random&size=128' },
  ];

  const electronic = [
    { name: 'Reymund Broncate', role: 'Electronic Resources', avatar: 'https://ui-avatars.com/api/?name=Reymund+Broncate&background=random&size=128' },
    { name: 'Marivic C. Burce', role: 'Electronic Resources', avatar: 'https://ui-avatars.com/api/?name=Marivic+C.+Burce&background=random&size=128' },
    { name: 'Phillip Wendyll Belenzo', role: 'Electronic Resources', avatar: 'https://ui-avatars.com/api/?name=Phillip+Wendyll+Belenzo&background=random&size=128' },
  ];

  const support = [
    { name: 'Erma B Cardiño', role: 'Maintenance Support Staff', avatar: 'https://ui-avatars.com/api/?name=Erma+B+Cardi%C3%B1o&background=random&size=128' },
    { name: 'Nestor Almonte', role: 'Utility', avatar: 'https://ui-avatars.com/api/?name=Nestor+Almonte&background=random&size=128' },
  ];

  const StaffSection = ({ title, staff }: { title: string; staff: typeof administration }) => (
    <section className="mb-16" aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="section-header mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] text-center" id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((person, index) => (
          <div key={index} className="glass p-6 rounded-xl shadow-[var(--shadow)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 flex items-center gap-4">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-16 h-16 rounded-xl border-2 border-[var(--border)] flex-shrink-0"
              loading="lazy"
            />
            <div>
              <h4 className="font-semibold text-[var(--text)] text-lg leading-tight">{person.name}</h4>
              <p className="text-sm text-[var(--muted)] font-medium">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6" style={{ paddingTop: '108px' }}>
        <SectionHeader
          tag={<><Users className="w-6 h-6" /> Our Staff</>}
          title="People Who Make Service Possible"
          description="Meet the Tabaco City Library and Information Center team. We are committed to accessible, respectful, and accurate assistance."
        />

        <div className="container mx-auto max-w-6xl">
          <StaffSection title="Administration" staff={administration} />
          <StaffSection title="Circulation & Services" staff={circulation} />
          <StaffSection title="Electronic Resources" staff={electronic} />
          <StaffSection title="Support" staff={support} />
        </div>
      </section>
    </div>
  );
}