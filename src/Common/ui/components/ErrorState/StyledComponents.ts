import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 2rem;
  text-align: center;
  color: var(--color-text-muted);
`

export const RetryButton = styled.button`
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-primary);
  background: transparent;
  color: var(--color-link-strong);
  cursor: pointer;
`