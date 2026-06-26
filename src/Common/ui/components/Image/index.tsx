import { useState } from 'react'
import { Placeholder, StyledImg } from './StyledComponents'

interface ImageProps {
  src: string | null
  alt: string
  className?: string
}

const Image = ({ src, alt, className }: ImageProps) => {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <Placeholder className={className} role="img" aria-label={alt}>
        🎬
      </Placeholder>
    )
  }

  return (
    <StyledImg
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  )
}

export default Image