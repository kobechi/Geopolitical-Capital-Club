import leahPhoto from '../assets/Leah.png'
import mariamPhoto from '../assets/mariam fixed.png'
import matthewPhoto from '../assets/matthew-new.png'
import neelPhoto from '../assets/Neel.png'
import oskarPhoto from '../assets/Oskar.png'
import paulPhoto from '../assets/Paul.png'
import rachelPhoto from '../assets/Racheal.png'
import type { BoardPosition, TeamLeadGroup } from '../types/content'

const kobePhoto = new URL('../assets/Kobe.PNG', import.meta.url).href

export const executiveBoard: BoardPosition[] = [
  {
    track: 'analyst',
    role: 'Analyst Co-President',
    name: 'Matthew Yang',
    bio: 'Matthew is a sophomore from Canada studying Economics at Boston College. He is the Co-Founder of Geopolitical Capital Club (GCC) and leads the Analyst Track. Outside of GCC, he is involved in PULSE, volunteering as a youth mentor at Roxbury Youth Program. This summer, he is an incoming Sales & Trading Analyst at CIBC Capital Markets. In his free time, Matthew enjoys skiing and sailing.',
    photo: { src: matthewPhoto, alt: 'Matthew Yang' },
    linkedinUrl: 'https://www.linkedin.com/in/matthewcyang/',
  },
  {
    track: 'studio',
    role: 'Studio Co-President',
    name: 'Kobe Chi',
    bio: 'Kobe is a sophomore from New York, studying Finance and Computer Science. He is currently founding co-president of GCC and leads the Studio Track. Outside of GCC, they are involved with Entrepreneurs for Social Impact and Carroll Scholars. Last summer, he interned for a consulting startup. Next summer, he plans to intern in wealth management or quant. In his free time, Kobe enjoys reading, basketball, and meeting new people.',
    photo: { src: kobePhoto, alt: 'Kobe Chi' },
    linkedinUrl: 'https://www.linkedin.com/in/kobechi/',
  },
  {
    track: 'analyst',
    role: 'Finance & Venture Analysis',
    name: 'Paul Purev',
    bio: '',
    photo: { src: paulPhoto, alt: 'Paul Purev', scale: 2.5 },
    linkedinUrl: 'https://www.linkedin.com/in/battushig-paul-purev-851057353/',
  },
  {
    track: 'studio',
    role: 'Operations, Legal & Execution',
    name: 'Rachel Choi',
    bio: 'Rachel is a junior from New Jersey studying History and Philosophy. She is GCC’s Head of Operations, Legal, and Execution, and is a member of the Studio Track. Outside of GCC, she is involved with the Bellarmine Law Society Review, Oracle, and Unheard Narratives. She is a Legal Assistant at Dean Street Law, supporting M&A and corporate governance. In her free time, she enjoys science fiction and vintage thrifting.',
    photo: { src: rachelPhoto, alt: 'Rachel Choi' },
    linkedinUrl: 'https://www.linkedin.com/in/rachel-choi-8995a4273/',
  },
  {
    track: 'analyst',
    role: 'Geopolitical Intelligence & Strategy',
    name: 'Neel Mascarenhas',
    bio: '',
    photo: { src: neelPhoto, alt: 'Neel Mascarenhas' },
    linkedinUrl: 'https://www.linkedin.com/in/neel-mascarenhas/',
  },
  {
    track: 'studio',
    role: 'Product & Technology',
    name: 'Mariam Djaby',
    bio: '',
    photo: { src: mariamPhoto, alt: 'Mariam Djaby' },
    linkedinUrl: 'https://www.linkedin.com/in/mariam-djaby/',
  },
  {
    track: 'analyst',
    role: 'Partnerships & Outreach',
    name: 'Oskar Kowalkowski',
    bio: 'Oskar Kowalkowski is a sophomore from Poland, majoring in Political Science. He is currently the Head of Geopolitical Intelligence & Strategy at GCC and a member of the Analyst Track. Outside of GCC, he is involved with the Boston College Consulting Club and the Investment Banking Association. This summer, he is an incoming Investment Banking Analyst at UniCredit. In his free time, Oskar enjoys playing soccer and skiing.',
    photo: { src: oskarPhoto, alt: 'Oskar Kowalkowski', scale: 1.2 },
    linkedinUrl: 'https://www.linkedin.com/in/oskar-kowalkowski-a9403a438/',
  },
  {
    track: 'studio',
    role: 'Growth, Brand & Market',
    name: 'Leah Aguilar',
    bio: '',
    photo: { src: leahPhoto, alt: 'Leah Aguilar' },
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
