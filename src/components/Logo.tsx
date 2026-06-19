export default function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" aria-label="RemoteRecruit home" className={`inline-block ${className}`}>
      <img src="/logo.svg" alt="RemoteRecruit" className="h-full w-auto" />
    </a>
  )
}
