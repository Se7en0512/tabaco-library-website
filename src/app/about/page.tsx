import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import { Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Tabaco City Library and Information Center',
  description: 'Learn about the vision, mission, and values of Tabaco City Library and Information Center — empowering the community through knowledge and service.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="content-section py-20 px-6">
        <SectionHeader
          title="About Tabaco City Library and Information Center"
          className="mb-16"
        />

        <div className="container mx-auto max-w-6xl space-y-20">

          {/* Vision Section */}
          <div className="glass p-12 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)]">Our Vision</h2>
            </div>

            <div className="space-y-6 text-lg text-[var(--muted)] leading-relaxed">
              <p>
                As a vital center for information and knowledge, we envision having an intellectually empowered constituency, that is abreast with the trend of global modernization and technological advancement in the field of Information and Communications Technology which will make them more active contributors in the development of Tabaco City.
              </p>
              <p>
                We further envision building an institution furnished with the most advanced information and knowledge-providing materials and equipped with modern and upgraded facilities that cater to a world-class service delivering the utmost client satisfaction.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="glass p-12 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)]">Our Mission</h2>
            </div>

            <p className="text-lg text-[var(--muted)] leading-relaxed">
              Tabaco City Library and Information Center is committed to supporting the informational, educational, social, cultural, and recreational needs of the community especially the underserved and marginalized sectors of society by providing access to information and knowledge through books and a variety of resources, information technology, proactive programs, and services.
            </p>
          </div>

          {/* Values Section */}
          <div className="glass p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-8">What We Value</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-lg text-[var(--muted)]">Accessibility for everyone</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-lg text-[var(--muted)]">Privacy and respectful service</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-lg text-[var(--muted)]">Reliable guidance for transactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-lg text-[var(--muted)]">Learning resources for all ages</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-lg text-[var(--muted)]">Community empowerment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-lg text-[var(--muted)]">Technological innovation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-lg text-[var(--muted)]">Inclusive service delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-lg text-[var(--muted)]">Lifelong learning support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}