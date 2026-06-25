import styled from 'styled-components'

export const Shell = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: #0b0c10;
  color: #e5e7eb;
`

export const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`