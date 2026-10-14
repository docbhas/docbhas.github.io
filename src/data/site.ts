export const site = {
  title: 'Gus Bhas — Build · Heal · Share',
  description:
    'Bringing together medical science, clinical informatics, and human understanding to create more holistic and compassionate care.',
  name: 'Ida Bagus Aditya Bhaskara',
  instagram: 'https://www.instagram.com/docbhas/',
  handle: '@docbhas',
  medix: 'https://sites.google.com/view/medix-bhs',
};

export const nav = [
  { href: '/about/', label: 'About' },
  { href: '/work/', label: 'Work' },
  { href: '/contact/', label: 'Contact' },
];

// Earlier explainer videos (INTERNADDICT channel), made before BHS.
export const videos = [
  { id: 'wMmARxsqq0A', title: '#PDKT Anemia · Ep. 1: Intro', date: 'Jul 2020' },
  { id: 'WRHJZ7m4ozI', title: '#PDKT Anemia · Ep. 2: Hypochromic microcytic', date: 'Sep 2020' },
  { id: '6RaPdng5XOo', title: 'COVID-19: diagnosis and initial management at triage and primary care', date: 'May 2020' },
];

export const pillars = [
  {
    key: 'build',
    num: '01',
    label: 'Build Creatively',
    question: 'What is truly worth developing?',
    body: 'I design clinical decision support tools, dashboards, and data analyses from questions that come up in practice.',
    img: { src: '/images/research-presentation.webp', pos: '72% 30%', alt: 'Gus Bhas presenting a systematic review and meta-analysis on a large screen' },
    points: ['Clinical calculators', 'Dashboards & ML analyses', 'Status stated honestly'],
    cta: { label: "See what I'm building", href: '/work/' },
  },
  {
    key: 'heal',
    num: '02',
    label: 'Heal Holistically',
    question: 'Who is the person behind the numbers?',
    body: 'I learn to care for the whole person: evidence, clinical reasoning, life context, and emotional needs.',
    img: { src: '/images/yoga-dm-poster.webp', pos: '50% 38%', alt: 'Gus Bhas beside his poster on yoga as a complementary intervention for type 2 diabetes' },
    points: ['Clinical reasoning notes', 'Communication & uncertainty', 'Integrative care, clear limits'],
    cta: { label: 'Read my perspective', href: '/about/' },
  },
  {
    key: 'share',
    num: '03',
    label: 'Share Meaningfully',
    question: 'What is worth sharing, and who will it help?',
    body: "I share learning notes, educational material, scientific posters, and the process of building tools, including what hasn't worked yet.",
    img: { src: '/images/health-talk.webp', pos: '55% 22%', alt: 'Gus Bhas giving a health talk with a microphone' },
    points: ['Learning notes & essays', 'Scientific posters', 'Instagram @docbhas'],
    cta: { label: 'Explore what I share', href: 'https://www.instagram.com/docbhas/' },
  },
];

