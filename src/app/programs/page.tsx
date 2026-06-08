import type { Metadata } from 'next';
import ProgramsClient from './ProgramsClient';

export const metadata: Metadata = {
  title: 'Programs & Events | Tabaco City Library and Information Center',
  description: 'Join community programs at Tabaco City Library — story time, digital literacy workshops, tutorial sessions, events, and more.',
  openGraph: {
    title: 'Programs & Events | Tabaco City Library',
    description: 'Join community programs at Tabaco City Library — events, workshops, and learning opportunities.',
  },
};

export default function Programs() {
  return <ProgramsClient />;
}
