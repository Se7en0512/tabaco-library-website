'use client';

import { useTranslations } from '@/i18n/useTranslations';

const services = [
  {
    name: 'Pag-IBIG Fund',
    logo: '/images/agencies/pagibig.svg',
    desc: 'Online Membership Registration',
    href: 'https://www.pagibigfund.gov.ph/',
  },
  {
    name: 'Philippine Statistics Authority',
    logo: '/images/agencies/psa.png',
    desc: 'Appointment: Birth Certificate, Marriage Contract, CENOMAR, Death Certificate',
    href: 'https://psahelpline.ph/',
  },
  {
    name: 'National Bureau of Investigation',
    logo: '/images/agencies/nbi.png',
    desc: 'NBI Clearance Online Appointment',
    href: 'https://nbi.gov.ph/',
  },
  {
    name: 'Department of Foreign Affairs',
    logo: '/images/agencies/dfa.png',
    desc: 'Passport Appointment (New & Renewal)',
    href: 'https://www.dfa.gov.ph/passport',
  },
  {
    name: 'Social Security System',
    logo: '/images/agencies/sss.svg',
    desc: 'Online Membership Application',
    href: 'https://www.sss.gov.ph/',
  },
  {
    name: 'Professional Regulation Commission',
    logo: '/images/agencies/prc.png',
    desc: 'Online Appointment (Appointment only)',
    href: 'https://www.prc.gov.ph/',
  },
  {
    name: 'National Commission of Senior Citizens',
    logo: '/images/agencies/ncsc.png',
    desc: 'Online Senior Citizen Registration',
    href: 'https://www.ncsc.gov.ph/seniorcitizensdataform',
  },
  {
    name: 'Philippine National Police',
    logo: '/images/agencies/pnp.png',
    desc: 'Online Appointment',
    href: 'https://pnp.gov.ph/',
  },
];

export default function EGovServicesClient() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-widest mb-3">{t.eGov.tag}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Government Services Made Easy at Your Library!
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Tabaco City Library and Information Center upholds the government&apos;s effort to provide accessible services to every Filipino.
            </p>
          </div>

          <div className="border border-gray-200 bg-white shadow-sm rounded-xl p-6 max-w-4xl mx-auto mb-10">
            <h2 className="text-base font-bold text-[var(--primary)] mb-4">{t.libServices.tag}</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Bring a valid government-issued ID</p>
                  <p className="text-sm text-gray-500 mt-0.5">PhilID / ePhilID, Passport, Driver&apos;s License, UMID, or PRC ID</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Have a valid email address ready</p>
                  <p className="text-sm text-gray-500 mt-0.5">Required for online registration and appointment confirmation</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Appointment-only services</p>
                  <p className="text-sm text-gray-500 mt-0.5">PSA, PRC, NBI Clearance, and Passport are by appointment only</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
            {services.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 bg-white shadow-sm rounded-xl p-5 flex items-start gap-4 hover:shadow-md hover:border-gray-300 transition-all"
              >
                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 mt-0.5 bg-gray-50 rounded-lg p-2">
                  <img src={s.logo} alt={s.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-1.5">
                    {s.name}
                    <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 max-w-4xl mx-auto">
            <p className="text-sm text-gray-500 text-center leading-relaxed">
              Services are limited to basic assistance — appointments, inquiries, and guided online transactions. The library provides the facility and guidance to help you connect with official agency websites.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
