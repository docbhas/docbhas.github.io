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

export const talks = [
  {
    img: '/images/research-presentation.webp',
    alt: 'Gus Bhas presenting a research poster on a large screen',
    kind: 'Research presentation',
    pos: '70% 30%',
    title: 'Prognostic scores for disease-specific mortality in differentiated thyroid carcinoma: a systematic review and meta-analysis',
  },
  {
    img: '/images/health-talk.webp',
    alt: 'Gus Bhas giving a health talk with a microphone in a hospital lobby',
    kind: 'Health education',
    pos: '50% 25%',
    title: 'Community health talk in the hospital lobby',
  },
];

// Earlier explainer videos (INTERNADDICT channel), made before BHS.
export const videos = [
  { id: 'wMmARxsqq0A', title: '#PDKT Anemia · Ep. 1: Intro', topic: 'Diagnostic approach to anemia' },
  { id: 'WRHJZ7m4ozI', title: '#PDKT Anemia · Ep. 2: Hypochromic microcytic', topic: 'Hypochromic microcytic anemia' },
  { id: '6RaPdng5XOo', title: 'COVID-19: diagnosis and initial management at triage and primary care', topic: 'May 2020' },
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

