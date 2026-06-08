'use client';

import { useState, useMemo } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { Users, UserCheck, Search } from 'lucide-react';

const staffData = {
  administration: [
    { name: 'Baby Glenda O. Bongao', role: 'City Vice-Mayor', avatar: 'https://ui-avatars.com/api/?name=Baby+Glenda+O.+Bongao&background=random&size=128' },
    { name: 'Katherine T. Bunao', role: 'City Librarian', avatar: 'https://ui-avatars.com/api/?name=Katherine+T.+Bunao&background=random&size=128' },
    { name: 'Marilyn M. Bendicio', role: 'Consultant Librarian', avatar: 'https://ui-avatars.com/api/?name=Marilyn+M.+Bendicio&background=random&size=128' },
  ],
  circulation: [
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
  ],
  electronic: [
    { name: 'Reymund Broncate', role: 'Electronic Resources', avatar: 'https://ui-avatars.com/api/?name=Reymund+Broncate&background=random&size=128' },
    { name: 'Marivic C. Burce', role: 'Electronic Resources', avatar: 'https://ui-avatars.com/api/?name=Marivic+C.+Burce&background=random&size=128' },
    { name: 'Phillip Wendyll Belenzo', role: 'Electronic Resources', avatar: 'https://ui-avatars.com/api/?name=Phillip+Wendyll+Belenzo&background=random&size=128' },
  ],
  support: [
    { name: 'Erma B Cardi\u00f1o', role: 'Maintenance Support Staff', avatar: 'https://ui-avatars.com/api/?name=Erma+B+Cardi%C3%B1o&background=random&size=128' },
    { name: 'Nestor Almonte', role: 'Utility', avatar: 'https://ui-avatars.com/api/?name=Nestor+Almonte&background=random&size=128' },
  ],
};

type StaffKey = keyof typeof staffData;

const sectionLabels: Record<StaffKey, string> = {
  administration: 'Administration',
  circulation: 'Circulation & Services',
  electronic: 'Electronic Resources',
  support: 'Support',
};

export default function Staff() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return staffData;

    const q = searchQuery.toLowerCase();
    const result: Partial<Record<StaffKey, typeof staffData.administration>> = {};

    for (const [key, members] of Object.entries(staffData)) {
      const filtered = members.filter(
        (m) => m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q)
      );
      if (filtered.length > 0) {
        result[key as StaffKey] = filtered;
      }
    }

    return result as typeof staffData;
  }, [searchQuery]);

  const totalVisible = useMemo(
    () => Object.values(filteredSections).reduce((sum, arr) => sum + arr.length, 0),
    [filteredSections]
  );

  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6">
        <SectionHeader
          tag={<><Users className="w-6 h-6" /> Our Staff</>}
          title="People Who Make Service Possible"
          description="Meet the Tabaco City Library and Information Center team. We are committed to accessible, respectful, and accurate assistance."
        />

        <div className="container mx-auto max-w-6xl">
          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
              <input
                type="text"
                placeholder="Search by name or position..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-gray-900"
              />
            </div>
            {searchQuery && (
              <p className="text-sm text-[var(--muted)] text-center mt-3">
                {totalVisible} staff member{totalVisible !== 1 ? 's' : ''} found
              </p>
            )}
          </div>

          {/* Staff Sections */}
          {Object.entries(filteredSections).map(([key, staff]) => (
            <section key={key} className="mb-16" aria-labelledby={`section-${key}`}>
              <div className="section-header mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] text-center" id={`section-${key}`}>
                  {sectionLabels[key as StaffKey]}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staff.map((person, index) => (
                  <div key={index} className="border border-gray-200 bg-white shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow flex items-center gap-4">
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
          ))}

          {totalVisible === 0 && (
            <div className="text-center py-16">
              <UserCheck className="w-16 h-16 text-[var(--muted)] mx-auto mb-4 opacity-40" />
              <p className="text-xl font-semibold text-[var(--text)] mb-2">No staff found</p>
              <p className="text-[var(--muted)]">Try a different search term.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
