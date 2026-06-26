import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
`

export const ClearButton = styled.button`
  background: none;
  border: none;
  color: var(--color-link);
  cursor: pointer;
  font-size: 0.85rem;
`

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const Chip = styled.button`
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--color-border-strong);
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  font-size: 0.85rem;
`