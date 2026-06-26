import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.aside`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  padding: 1rem;
  height: fit-content;
`

export const Heading = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SeasonItem = styled(Link)<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0.8rem;
  border-radius: 0.5rem;
  text-decoration: none;
  background: ${({ $active }) => ($active ? 'var(--color-primary)' : 'transparent')};
  color: ${({ $active }) => ($active ? '#ffffff' : 'var(--color-text-secondary)')};

  &:hover {
    background: ${({ $active }) => ($active ? 'var(--color-primary)' : 'var(--color-elevated)')};
  }
`

export const SeasonName = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
`

export const SeasonMeta = styled.span`
  font-size: 0.75rem;
  opacity: 0.7;
`