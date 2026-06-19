import type { Feature } from '../data/content'
import LazyImage from './LazyImage'
import { membershipFeatures, profileSkills } from '../data/content'

function BlueDot({ className = '' }: { className?: string }) {
  return <span className={`absolute h-[22px] w-[22px] rounded-full bg-check-gradient ${className}`} aria-hidden />
}

function Badge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`grid place-items-center rounded-full bg-badge-gradient shadow-float ${className}`}
      aria-hidden
    >
      <img src="/badge-rr.svg" alt="" className="h-1/2 w-1/2" />
    </span>
  )
}

function Avatar({ size = 52 }: { size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full bg-amber-gradient"
      style={{ height: size, width: size }}
    >
      <img
        src="/avatar-gru.png"
        alt=""
        loading="lazy"
        decoding="async"
        className="rounded-full object-cover"
        style={{ height: size - 8, width: size - 8 }}
      />
    </span>
  )
}

function PersonChip({
  role,
  name,
  roleColor,
  className = '',
}: {
  role: string
  name: string
  roleColor: string
  className?: string
}) {
  return (
    <div
      className={`w-88 absolute flex items-center gap-3 rounded-[36px] bg-white p-2 pr-6 shadow-float ${className} shadow-[#8781F51C]`}
    >
      <Avatar />
      <div className="leading-tight">
        <p className="text-xs font-semibold" style={{ color: roleColor }}>
          {role}
        </p>
        <p className="text-[15px] font-medium text-navy sm:text-[17px]">{name}</p>
      </div>
    </div>
  )
}

function GradientCheck() {
  return (
    <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-check-gradient">
      <svg viewBox="0 0 10 8" className="h-2 w-2.5" fill="none" aria-hidden>
        <path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function JobBoardMockup() {
  return (

    <div className="relative mx-auto w-full max-w-[355px] min-h-[451px] rounded-[34px] border border-[#F6F4FF] bg-white p-5 shadow-[14px_41px_100px_0px_rgba(49,89,211,0.12)] box-border">
      <div className="relative h-[176px] overflow-hidden rounded-[18px] shadow-card">
        <LazyImage
          src="/mockup-jobboard.webp"
          alt="RemoteRecruit job board dashboard listing recent remote roles"
          className="absolute h-[170%] max-w-none origin-top-left -left-[46px]"
        />
      </div>
      <BlueDot className="sm:left-2 md:-left-10 -top-0 " />
      <Badge className="absolute -right-3 bottom-56 h-16 w-16 sm:-right-6 sm:h-20 sm:w-20" />
      <PersonChip
        role="Python Developer"
        name="Felonious Gru"
        roleColor="#1E3E85"
        className="-left-10 bottom-[145px] hidden sm:flex sm:-left-16"
      />
      <PersonChip
        role="Front End Wizard"
        name="Mel Muselphiem"
        roleColor="#52B4DA"
        className="-right-4 bottom-10 hidden sm:flex"
      />
    </div>
  )
}

function MembershipMockup() {
  return (
    <div className="relative w-full max-w-[355px] p-8 rounded-[34px] h-[500px] border border-[#F6F4FF] bg-white shadow-[14px_41px_100px_0px_rgba(49,89,211,0.12)] box-border">
      <div className="">
        <p className="text-xs font-semibold text-ink-muted">Your Membership Tier</p>
        <p className="mt-1 bg-check-gradient bg-clip-text text-xl font-semibold text-transparent">
          Premium
        </p>
        <p className="mb-4 mt-5 text-[10px] font-bold uppercase tracking-wide text-navy">Features</p>
        <ul className="space-y-5">
          {membershipFeatures.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm font-medium text-ink-dark">
              <GradientCheck />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute w-[352px] bottom-7 right-[60px] flex items-center gap-3 rounded-[36px] bg-white p-1 shadow-float">
        <span className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full bg-social-gradient">
          <img src="/icon-paypal.svg" alt="PayPal" className="h-6 w-6" />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-royal-deep">Upcoming Payment In…</p>
          <p className="text-[15px] font-medium text-navy sm:text-[17px]">14 Days - $79.99</p>
        </div>
      </div>

      <Badge className="absolute -right-3 top-6 h-16 w-16 sm:-right-6 sm:h-20 sm:w-20" />
    </div>
  )
}

function PlayButton({ className = '' }: { className?: string }) {
  return (
    <span className={`grid place-items-center rounded-full bg-cyan shadow-float ${className}`} aria-hidden>
      <svg viewBox="0 0 21 23" className="h-5 w-5" fill="none">
        <path
          d="M18.75 7.9c2.67 1.54 2.67 5.39 0 6.93L6 22.19C3.33 23.73 0 21.81 0 18.73V4C0 .93 3.33-1 6 .54L18.75 7.9Z"
          fill="#1E3E85"
        />
      </svg>
    </span>
  )
}

function ProfileMockup() {
  return (
    <div className="relative w-full max-w-[355px] h-[451px] rounded-[34px] p-5 border border-[#F6F4FF] bg-white shadow-[14px_41px_100px_0px_rgba(49,89,211,0.12)] box-border">

      <div className="overflow-hidden rounded-[18px] h-[176px] " >
        <LazyImage
          src="/mockup-profile.webp"
          alt="RemoteRecruit candidate profile for Dylan Hodges with completed jobs"
          className="w-full"
        />
      </div>

      <div className='absolute bottom-10'>
      <div className="flex flex-wrap gap-3">
        {profileSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-soft-glow px-3 py-1.5 text-xs font-medium text-royal-deep"
          >
            {skill}
          </span>
        ))}
      </div>
</div>
      <BlueDot className="-left-1 -top-2 sm:-left-10" />
      <PlayButton className="absolute left-1/2 top-[22%] h-12 w-12 -translate-x-1/4" />
      <PersonChip
        role="Past Client Feedback"
        name="Best Developer Ever!"
        roleColor="#1E3E85"
        className="-left-6 top-[51%] hidden sm:flex sm:-left-16"
      />
      <span className="absolute -right-3 top-[30%] grid h-16 w-16 place-items-center rounded-full bg-badge-gradient shadow-float sm:-right-5 sm:h-[72px] sm:w-[72px]">
        <img src="/avatar-gru.png" alt="" loading="lazy" className="h-[85%] w-[85%] rounded-full object-cover" />
      </span>
    </div>
  )
}

export default function FeatureMockup({ variant }: { variant: Feature['variant'] }) {
  if (variant === 'jobBoard') return <JobBoardMockup />
  if (variant === 'membership') return <MembershipMockup />
  return <ProfileMockup />
}
