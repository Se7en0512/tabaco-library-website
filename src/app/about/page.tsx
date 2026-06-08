import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Tabaco City Library and Information Center',
  description: 'Learn about the vision, mission, and values of Tabaco City Library and Information Center — empowering the community through knowledge and service.',
};

export default function About() {
  return <AboutClient />;
}