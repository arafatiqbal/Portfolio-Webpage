import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docdro.id/QemPkxu', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '1.png',
    title: 'Automated Website Navigation',
    info: 'Automatically claims a week of unemployment for me. This program was made to make it easier for me to claim a week of unemployment, instead of having to maanually do it every time, I can run this and it will fill everything up for me based on the info.py file.',
    info2: '',
    url: 'https://github.com/arafatiqbal/WeeklyUnemploymentClaim',
    repo: '', // if no repo, the button will not show up
  }

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact Me',
  email: 'arafatiqbal123@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/arafat-iqbal/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/arafatiqbal',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
