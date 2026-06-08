import type { Metadata } from 'next';
import EGovServicesClient from './EGovServicesClient';

export const metadata: Metadata = {
  title: 'E-Gov Services | Tabaco City Library and Information Center',
  description: 'Tabaco City Library E-Gov Services — assistance with PAG-IBIG, PSA, NBI, DFA, SSS, NCSC, PNP, PRC online appointments and registrations.',
};

export default function EGovServices() {
  return <EGovServicesClient />;
}
