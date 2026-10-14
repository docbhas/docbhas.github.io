export const site = {
  title: 'Gus Bhas — Build · Heal · Share',
  description:
    'Bringing together medical science, clinical informatics, and human understanding to create more holistic and compassionate care.',
  name: 'Ida Bagus Aditya Bhaskara',
  instagram: 'https://www.instagram.com/docbhas/',
  handle: '@docbhas',
};

export const nav = [
  { href: '/about/', label: 'About' },
  { href: '/work/', label: 'Work' },
  { href: '/contact/', label: 'Contact' },
];

export const pillars = [
  {
    key: 'build',
    num: '01',
    label: 'Build Creatively',
    question: 'What is truly worth developing?',
    body: 'I design clinical decision support tools, dashboards, and data analyses from questions that come up in practice.',
    points: ['Clinical calculators', 'Dashboards & ML analyses', 'Status stated honestly'],
    cta: { label: "See what I'm building", href: '/work/' },
  },
  {
    key: 'heal',
    num: '02',
    label: 'Heal Holistically',
    question: 'Who is the person behind the numbers?',
    body: 'I learn to care for the whole person: evidence, clinical reasoning, life context, and emotional needs.',
    points: ['Clinical reasoning notes', 'Communication & uncertainty', 'Integrative care, clear limits'],
    cta: { label: 'Read my perspective', href: '/about/' },
  },
  {
    key: 'share',
    num: '03',
    label: 'Share Meaningfully',
    question: 'What is worth sharing, and who will it help?',
    body: "I share learning notes, educational material, scientific posters, and the process of building tools, including what hasn't worked yet.",
    points: ['Learning notes & essays', 'Scientific posters', 'Instagram @docbhas'],
    cta: { label: 'Explore what I share', href: 'https://www.instagram.com/docbhas/' },
  },
];

export type Status = 'Concept' | 'Prototype' | 'Active' | 'Published';

// TODO(Gus Bhas): confirm question, audience, status, and role for each project before publishing.
export const projects: {
  name: string;
  question: string;
  for: string;
  status: Status;
  role: string;
  href?: string;
}[] = [
  {
    name: 'Acid–base & electrolyte calculator',
    question: 'How can acid–base disorders be read step by step?',
    for: 'Internal medicine residents',
    status: 'Prototype',
    role: 'Designer, developer, content author',
  },
  {
    name: 'eMATCA',
    question: '[Clinical question this project answers]',
    for: '[Intended users]',
    status: 'Concept',
    role: '[Role]',
  },
  {
    name: 'LUPINA',
    question: '[Clinical question this project answers]',
    for: '[Intended users]',
    status: 'Concept',
    role: '[Role]',
  },
];
