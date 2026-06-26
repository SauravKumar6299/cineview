import styled from 'styled-components'
import { Link } from 'react-router-dom'

  export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
`

export const Brand = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  color: #a5b4fc;
  text-decoration: none;
  white-space: nowrap;
`

export const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  a {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    padding-bottom: 0.125rem;
    border-bottom: 2px solid transparent;
    transition: color 0.15s ease;

    &:hover {
      color: var(--color-text);
    }

    &.active {
      color: var(--color-nav-active);
      border-bottom-color: var(--color-primary);
    }
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
`

export const SearchInput = styled.input`
  width: 220px;
  max-width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border-strong);
  background: var(--color-surface);
  color: var(--color-text);
  outline: none;

  &::placeholder {
    color: var(--color-text-faint);
  }

  &:focus {
    border-color: var(--color-primary);
  }

  @media (max-width: 480px) {
    width: 130px;
  }
`