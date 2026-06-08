import type { Metadata } from 'next';
import LibraryServicesClient from './LibraryServicesClient';

export const metadata: Metadata = {
  title: 'Library Services | Tabaco City Library and Information Center',
  description: 'Explore our free library services — card application, research assistance, book borrowing, and internet access at Tabaco City Library.',
};

export default function LibraryServices() {
  return <LibraryServicesClient />;
}
