import leahPhoto from '../assets/Leah.png'
import mariamPhoto from '../assets/mariam fixed.png'
import matthewPhoto from '../assets/matthew new.PNG'
import neelPhoto from '../assets/Neel.png'
import oskarPhoto from '../assets/Oskar.png'
import paulPhoto from '../assets/Paul.png'
import rachelPhoto from '../assets/Racheal.png'
import type { BoardPosition, TeamLeadGroup } from '../types/content'

const kobePhoto = new URL('../assets/Kobe.PNG', import.meta.url).href

export const executiveBoard: BoardPosition[] = [
  // Add each member's bio in the `bio` field below; leave it empty until ready.
  {
    track: 'analyst',
    role: 'Analyst Co-President',
    name: 'Matthew Yang',
    bio: '',
    photo: { src: matthewPhoto, alt: 'Matthew Yang', zoom: 1, x: 33, y: 0 },
    linkedinUrl: 'https://www.linkedin.com/in/matthewcyang/',
  },
  {
    track: 'studio',
    role: 'Studio Co-President',
    name: 'Kobe Chi',
    bio: '',
    photo: { src: kobePhoto, alt: 'Kobe Chi', zoom: 1.05, x: 60, y: 53 },
    linkedinUrl: 'https://www.linkedin.com/in/kobechi/',
  },
  {
    track: 'analyst',
    role: 'Finance & Venture Analysis',
    name: 'Paul Purev',
    bio: '',
    photo: { src: paulPhoto, alt: 'Paul Purev', zoom: 2.1, x: 56, y: 27 },
    linkedinUrl: 'https://www.linkedin.com/in/battushig-paul-purev-851057353/',
  },
  {
    track: 'studio',
    role: 'Operations, Legal & Execution',
    name: 'Rachel Choi',
    bio: '',
    photo: { src: rachelPhoto, alt: 'Rachel Choi', zoom: 1.4, x: 50, y: 28 },
    linkedinUrl: 'https://www.linkedin.com/in/rachel-choi-8995a4273/',
  },
  {
    track: 'analyst',
    role: 'Geopolitical Intelligence & Strategy',
    name: 'Neel Mascarenhas',
    bio: '',
    photo: { src: neelPhoto, alt: 'Neel Mascarenhas', zoom: 1.2, x: 37, y: 0 },
    linkedinUrl: 'https://www.linkedin.com/in/neel-mascarenhas/',
  },
  {
    track: 'studio',
    role: 'Product & Technology',
    name: 'Mariam Djaby',
    bio: '',
    photo: { src: mariamPhoto, alt: 'Mariam Djaby', zoom: 1.3, x: 48, y: 56 },
    linkedinUrl: 'https://www.linkedin.com/in/mariam-djaby/',
  },
  {
    track: 'analyst',
    role: 'Partnerships & Outreach',
    name: 'Oskar Kowalkowski',
    bio: '',
    photo: { src: oskarPhoto, alt: 'Oskar Kowalkowski', zoom: 1, x: 40, y: 0 },
    linkedinUrl: 'https://www.linkedin.com/in/oskar-kowalkowski-a9403a438/',
  },
  {
    track: 'studio',
    role: 'Growth, Brand & Market',
    name: 'Leah Aguilar',
    bio: '',
    photo: { src: leahPhoto, alt: 'Leah Aguilar', zoom: 1.3, x: 32, y: 5 },
    linkedinUrl: 'https://www.linkedin.com/in/leah-aguilar-25b4b0339/',
  },
]

export const teamLeadGroups: TeamLeadGroup[] = [
  {
    track: 'analyst',
    title: 'Analyst team leads',
    description:
      'Analyst team leads manage their own research teams and coordinate structured analysis.',
  },
  {
    track: 'studio',
    title: 'Studio team leads',
    description:
      'Studio team leads manage their own startup teams and guide product and business development.',
  },
  {
    track: 'studio',
    title: 'Functional board leads',
    description:
      'Functional board leads oversee their assigned areas across teams and support milestone reviews.',
  },
]
