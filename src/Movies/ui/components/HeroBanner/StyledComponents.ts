import styled from 'styled-components'

export const Hero = styled.section<{ $backdrop: string }>`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  min-height: 380px;
  background: ${({ $backdrop }) =>
      $backdrop ? `url(${$backdrop})` : 'linear-gradient(var(--color-surface), var(--color-surface))'}
    center / cover no-repeat;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(
    90deg,
    rgba(11, 12, 16, 0.95) 0%,
    rgba(11, 12, 16, 0.45) 55%,
    transparent 100%
  );
`

export const Content = styled.div`
  padding: 2rem;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const HeroTitle = styled.h1`
  color: white;
  font-size: 2.25rem;
  font-weight: 800;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`

export const Overview = styled.p`
  color: white;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
`