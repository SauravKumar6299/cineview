import styled from 'styled-components'

export const Shell = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
  color: var(--color-text);
`

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 1.5rem 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`