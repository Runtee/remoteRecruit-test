import type { ImgHTMLAttributes } from 'react'

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
}

/**
 * Thin wrapper around <img> that enables native lazy loading and async
 * decoding so off-screen imagery doesn't block first paint.
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  ...props
}: LazyImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      {...props}
    />
  )
}
