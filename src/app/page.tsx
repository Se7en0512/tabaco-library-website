import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Tabaco City Library and Information Center | Home',
  description: 'Welcome to Tabaco City Library — free library services, E-Gov transactions, digital literacy programs, and community resources. Government Services Made Easy at Your Library!',
  openGraph: {
    title: 'Tabaco City Library and Information Center',
    description: 'Empowering our community through access to information, technology, and lifelong learning opportunities.',
    url: 'https://tclic.ph',
    siteName: 'Tabaco City Library and Information Center',
    locale: 'en_PH',
    type: 'website',
  },
};

export default function Home() {
  return <HomeClient />;
}
