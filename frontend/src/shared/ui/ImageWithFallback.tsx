import { useState } from 'react'
import type { ImgHTMLAttributes, ReactEventHandler } from 'react'

export type ImageWithFallbackProps = {
  fallbackSrc?: string
} & ImgHTMLAttributes<HTMLImageElement>

export const ImageWithFallback = ({
  fallbackSrc,
  src,
  onError,
  ...props
}: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false)

  const handleError: ReactEventHandler<HTMLImageElement> = (event) => {
    setHasError(true)
    if (onError) {
      onError(event)
    }
  }

  return (
    <img
      {...props}
      src={hasError && fallbackSrc ? fallbackSrc : (src as string)}
      onError={handleError}
    />
  )
}
