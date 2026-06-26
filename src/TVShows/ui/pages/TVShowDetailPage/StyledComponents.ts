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
  background: linear-gradient(90deg, rgba(11, 12, 16, 0.96) 30%, rgba(11, 12, 16, 0.6) 100%);

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
  background: var(--color-elevated);
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
  color: var(--color-text-secondary);
  font-size: 0.9rem;
`

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const GenreTag = styled.span`
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--color-border-strong);
  font-size: 0.75rem;
`

export const Tagline = styled.p`
  font-style: italic;
  color: var(--color-text-muted);
`

export const Overview = styled.p`
  color: var(--color-text);
  line-height: 1.6;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const SeasonPanel = styled.div`
  min-width: 0;
`

export const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 1rem;
  text-align: center;
`