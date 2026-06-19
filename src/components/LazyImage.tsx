import type { ImgHTMLAttributes } from 'react'

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
}

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
