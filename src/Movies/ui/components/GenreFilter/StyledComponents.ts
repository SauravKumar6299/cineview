import styled from 'styled-components'

export const Chips = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
`

export const Chip = styled.button<{ $active: boolean }>`
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.8rem;
  border: 1px solid ${({ $active }) => ($active ? 'var(--color-primary)' : 'var(--color-border-strong)')};
  background: ${({ $active }) => ($active ? 'rgba(99, 102, 241, 0.2)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--color-link-strong)' : 'var(--color-text-muted)')};
`