export type SiteLinks = {
  generalMembershipForm?: string
  analystInterestForm?: string
  studioInterestForm?: string
  calendarUrl?: string
  contactEmail?: string
  linkedin?: string
  instagram?: string
}

export const organizationName = 'Geopolitical Capital Club'

export const siteLinks: SiteLinks = {
  generalMembershipForm: 'https://docs.google.com/forms/d/e/1FAIpQLSdsJGmIyJ3WU-I-NhYvA2f7sXmQ2JUrZAP3ofSA4akUUDYwEQ/viewform?usp=publish-editor',
  analystInterestForm: 'https://docs.google.com/forms/d/e/1FAIpQLScDBg334h8ACGa1g_SfZC43sNaT_uX0aTFURFqiZYOWPaQEOQ/alreadyresponded',
  studioInterestForm: 'https://docs.google.com/forms/d/e/1FAIpQLSfnMEzeY6c5-7s6o65WYOT2CDHMOZERibekknN3meZs8F_L_w/viewform',
  calendarUrl: 'https://calendar.google.com/calendar/embed?src=geopoliticalcapitalclub%40gmail.com&ctz=America%2FNew_York&mode=AGENDA&color=%237D0F2D',
  contactEmail: 'geopoliticalcapitalclub@gmail.com',
  linkedin: 'https://www.linkedin.com/company/geopoliticalcapital/?viewAsMember=true',
  instagram: 'https://www.instagram.com/geopoliticalcapital/',
}

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Our Program', to: '/program' },
  { label: 'Analyst Track', to: '/analyst' },
  { label: 'Studio Track', to: '/studio' },
  { label: 'Our Team', to: '/team' },
  { label: 'Join GCC', to: '/join', primary: true },
]
