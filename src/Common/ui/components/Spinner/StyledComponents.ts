import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to { transform: rotate(360deg); }
`

export const Loader = styled.div`
  width: 2rem;
  height: 2rem;
  border: 3px solid var(--color-border-strong);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: 2rem auto;
`