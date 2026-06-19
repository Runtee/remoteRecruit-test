// Content for the RemoteRecruit Features page, transcribed verbatim from the
// Figma frame "RemoteRecruit - Features".

export type Feature = {
  tag: string
  title: string
  body: string
  /** Which side the illustration sits on at desktop widths. */
  imageSide: 'left' | 'right'
  variant: 'jobBoard' | 'membership' | 'profile'
}

export const features: Feature[] = [
  {
    tag: 'Global Reach',
    title: 'The First Fully Global Job Board, Anywhere, Ever',
    body: 'RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.',
    imageSide: 'right',
    variant: 'jobBoard',
  },
  {
    tag: 'Actually Fee Free',
    title: 'Fee-Free Forever',
    body: 'We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved.',
    imageSide: 'left',
    variant: 'membership',
  },
  {
    tag: 'Custom Profile',
    title: 'Showcase Your Talents',
    body: 'Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.',
    imageSide: 'right',
    variant: 'profile',
  },
]

const loremAnswer =
  'Actually beard single-origin coffee, twee 90’s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90’s, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr'

export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  { question: 'Do I have to sign a long-term contract?', answer: loremAnswer },
  {
    question: 'Can I pay for a whole year?',
    answer:
      'Actually beard single-origin coffee, twee 90’s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90’s, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr',
  },
  { question: 'What if I need help?', answer: loremAnswer },
]

export type PlanFeature = { label: string; included: boolean }

export type Plan = {
  name: string
  subtitle: string
  period?: string
  badge?: string
  featured: boolean
  features: PlanFeature[]
}

export const plans: Plan[] = [
  {
    name: 'Free',
    subtitle: 'Basic',
    featured: false,
    features: [
      { label: '1 Active Job', included: true },
      { label: 'Basic List Placement', included: true },
      { label: 'Unlimited Job Applicants', included: false },
      { label: 'Invite Anyone to Apply to Your Jobs', included: false },
    ],
  },
  {
    name: '$79.99',
    subtitle: 'Per Month',
    badge: 'Premium',
    featured: true,
    features: [
      { label: 'Unlimited Job Posts', included: true },
      { label: 'Instant Job Post Approval', included: true },
      { label: 'Premium List Placement', included: true },
      { label: 'Unlimited Job Applicants', included: true },
    ],
  },
]

// Membership-tier card shown inside the "Fee-Free Forever" feature mockup.
export const membershipFeatures = [
  'Up to 25 active job posts',
  'Premium Placement & Visibility',
  'Messaging anyone, unlimited',
  'Unlimited invites',
  'View all applicants',
  'Unlimited invites to jobseekers',
]

export const profileSkills = [
  'Python Dev',
  'Javascript',
  'Front End',
  'Back End',
  'IOS Development',
  '+12',
]

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'F.A.Q', href: '#faq' },
]

export const socials = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'X', href: '#', icon: 'x' },
  { label: 'Twitter', href: '#', icon: 'twitter' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Snapchat', href: '#', icon: 'snapchat' },
] as const
