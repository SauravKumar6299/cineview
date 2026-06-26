import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Hero = styled.section<{ $backdrop: string }>`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background: ${({ $backdrop }) =>
      $backdrop ? `url(${$backdrop})` : 'linear-gradient(var(--color-surface), var(--color-surface))'}
    center / cover no-repeat;
`

export const HeroOverlay = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: linear-gradient(90deg, var(--color-hero-gradient-1) 10%, var(--color-hero-gradient-2) 60%);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const Poster = styled.div`
  flex: 0 0 220px;
  width: 220px;
  aspect-ratio: 2 / 3;
  border-radius: 0.75rem;
  overflow: hidden;
  background: #ffffff;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 720px;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
`

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  color: white;
  font-size: 0.9rem;
`

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: white;
`

export const GenreTag = styled.span`
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  border: 1px solid white;
  font-size: 0.75rem;
`

export const Tagline = styled.p`
  font-style: italic;
  color: #9ca3af;
`

export const Overview = styled.p`
  color: #e5e7eb;
  line-height: 1.6;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`

export const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 1rem;
  text-align: center;
`