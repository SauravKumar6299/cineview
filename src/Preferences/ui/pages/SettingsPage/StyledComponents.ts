import styled from 'styled-components'

export const Page = styled.section`
  max-width: 640px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
`

export const Subtitle = styled.p`
  margin: 0.25rem 0 1.5rem;
  color: var(--color-text-muted);
  font-size: 0.95rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: var(--color-surface);
  overflow: hidden;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;

  & + & {
    border-top: 1px solid var(--color-border);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const RowInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`

export const RowLabel = styled.span`
  font-weight: 600;
`

export const RowHint = styled.span`
  font-size: 0.8rem;
  color: var(--color-text-muted);
`

export const Select = styled.select`
  appearance: none;
  min-width: 180px;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border-strong);
  background: var(--color-surface-2);
  color: var(--color-text);
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;

  &:focus-visible {
    border-color: var(--color-primary);
  }
`

export const Segmented = styled.div`
  display: inline-flex;
  align-self: flex-start;
  border: 1px solid var(--color-border-strong);
  border-radius: 0.5rem;
  overflow: hidden;
`

export const SegmentButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.1rem;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({ $active }) => ($active ? 'var(--color-primary)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--color-on-primary)' : 'var(--color-text-muted)')};

  & + & {
    border-left: 1px solid var(--color-border-strong);
  }
`

export const Footer = styled.div`
  margin-top: 1.5rem;
`