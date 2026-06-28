import styled from 'styled-components'

export const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-content: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
  background: var(--color-bg);
  color: var(--color-text);
`

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
`

export const Subtitle = styled.p`
  margin: 0;
  max-width: 520px;
  color: var(--color-text-muted);
  font-size: 1rem;
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`