export interface Event {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  time?: string;
  location?: string;
  images?: string[];
  registrationLink?: string;
}

export type EventStatus = 'upcoming' | 'ongoing' | 'past';

function toDate(date: string): Date {
  return new Date(date + 'T00:00:00');
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Canva Graphic Design Workshop',
    description: 'A free two-day workshop for Tabaco City MSMEs to master Canva and create professional digital content for their business. Snacks and lunch provided.',
    startDate: toDate('2026-06-09'),
    endDate: toDate('2026-06-10'),
    time: '8:00 AM - 5:00 PM',
    location: 'Tabaco City Library & Information Center',
    registrationLink: 'https://forms.gle/45XufbbSQm9W9HCQA',
  },
  {
    id: 5,
    title: 'Book Donation Activity — Brigada Eskwela 2026',
    description: 'In support of the Department of Education\'s Brigada Eskwela 2026, the library conducted a Book Donation Activity for selected public elementary schools including Pawa Elementary School, Guinobat Elementary School, and Mayon Integrated School.',
    startDate: toDate('2026-06-03'),
    endDate: toDate('2026-06-03'),
    location: 'Pawa Elementary School, Guinobat Elementary School, Mayon Integrated School',
    images: [
      '/images/events/brigada-eskwela-2026/Front.jpg',
      '/images/events/brigada-eskwela-2026/712267449_122131452219190506_806490289847840420_n.jpg',
      '/images/events/brigada-eskwela-2026/712429100_122131452381190506_7366801837960255645_n.jpg',
      '/images/events/brigada-eskwela-2026/713186037_122131451649190506_4874691235556206544_n.jpg',
      '/images/events/brigada-eskwela-2026/714689574_122131451805190506_3836598114279341694_n.jpg',
      '/images/events/brigada-eskwela-2026/714830673_122131452393190506_5706012999787391596_n.jpg',
      '/images/events/brigada-eskwela-2026/714931363_122131452297190506_3905834301930714620_n.jpg',
      '/images/events/brigada-eskwela-2026/715376451_122131451643190506_2022667792522210368_n.jpg',
      '/images/events/brigada-eskwela-2026/715670773_122131451853190506_900376642586782848_n.jpg',
      '/images/events/brigada-eskwela-2026/715870823_122131451823190506_781117673732406223_n.jpg',
      '/images/events/brigada-eskwela-2026/716230951_122131452717190506_2764338773543995259_n.jpg',
      '/images/events/brigada-eskwela-2026/716270767_122131452195190506_2183236000683293331_n.jpg',
    ],
  },
  {
    id: 3,
    title: 'Community Poetry Workshop and DIY Chapbook Publishing',
    description: 'As we continue our outreach program on the Community Poetry Workshop and DIY Chapbook Publishing, we conducted the second part of this initiative in the remote barangay of Sua-Igot, Tabaco City. Led by Tabaco Writers\' Organization (TAWO) founder Mr. Jaime Jesus U. Borlagdan, we gathered children and youth as program participants, exploring their skills and talents in poetry writing. The workshop produced a DIY chapbook showcasing the astonishing Bicol language through written community narratives.',
    startDate: toDate('2026-05-28'),
    endDate: toDate('2026-05-28'),
    location: 'Barangay Sua-Igot, Tabaco City',
    images: [
      '/images/events/poetry-workshop/Front.jpg',
      '/images/events/poetry-workshop/710478864_122131108989190506_770887067856561757_n.jpg',
      '/images/events/poetry-workshop/710556998_122131109493190506_1390894372379164557_n.jpg',
      '/images/events/poetry-workshop/710592428_122131108887190506_913842116267232132_n.jpg',
      '/images/events/poetry-workshop/710613567_122131108959190506_5964839799036787675_n.jpg',
      '/images/events/poetry-workshop/710640317_122131108881190506_2390488896634555158_n.jpg',
      '/images/events/poetry-workshop/710651719_122131108875190506_9013076428569321420_n.jpg',
      '/images/events/poetry-workshop/710700976_122131109445190506_1768790576164764777_n.jpg',
      '/images/events/poetry-workshop/710777001_122131109625190506_6811034983409354930_n.jpg',
      '/images/events/poetry-workshop/710849039_122131109403190506_4201745784178518919_n.jpg',
      '/images/events/poetry-workshop/711065807_122131109211190506_5789390354406595985_n.jpg',
      '/images/events/poetry-workshop/711566894_122131109337190506_4213259774056096630_n.jpg',
      '/images/events/poetry-workshop/711670927_122131110579190506_5317774108589800119_n.jpg',
      '/images/events/poetry-workshop/711751756_122131109733190506_6623281435098365552_n.jpg',
      '/images/events/poetry-workshop/711869774_122131109703190506_5912173342231264285_n.jpg',
      '/images/events/poetry-workshop/711906098_122131109175190506_400043116295741476_n.jpg',
      '/images/events/poetry-workshop/712411326_122131109961190506_5878724917964438363_n.jpg',
      '/images/events/poetry-workshop/712469337_122131109049190506_1370081462197450345_n.jpg',
      '/images/events/poetry-workshop/712744919_122131109877190506_8347064681378705862_n.jpg',
      '/images/events/poetry-workshop/712744924_122131109871190506_4672761798483305913_n.jpg',
      '/images/events/poetry-workshop/712763801_122131109553190506_3651819737322726950_n.jpg',
    ],
  },
];

export function getEventStatus(event: Event): EventStatus {
  const now = new Date();
  if (now >= event.startDate && now <= event.endDate) return 'ongoing';
  if (now < event.startDate) return 'upcoming';
  return 'past';
}

export function isPreviousMonth(event: Event): boolean {
  const now = new Date();
  let prevYear = now.getFullYear();
  let prevMonth = now.getMonth() - 1;
  if (prevMonth < 0) { prevMonth = 11; prevYear -= 1; }
  const eventStart = new Date(event.startDate);
  const eventEnd = new Date(event.endDate);
  return (
    (eventStart.getFullYear() === prevYear && eventStart.getMonth() === prevMonth) ||
    (eventEnd.getFullYear() === prevYear && eventEnd.getMonth() === prevMonth)
  );
}

export function isCurrentMonth(event: Event): boolean {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const eventStart = new Date(event.startDate);
  const eventEnd = new Date(event.endDate);
  return (
    (eventStart.getFullYear() === currentYear && eventStart.getMonth() === currentMonth) ||
    (eventEnd.getFullYear() === currentYear && eventEnd.getMonth() === currentMonth)
  );
}

export function formatEventDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
