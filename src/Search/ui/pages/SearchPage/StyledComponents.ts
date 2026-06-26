import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SearchBar = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  padding: 0.5rem 1rem;
`

export const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: inherit;
  font-size: 1.1rem;
  padding: 0.5rem;

  &::placeholder {
    color: var(--color-text-muted);
  }
`