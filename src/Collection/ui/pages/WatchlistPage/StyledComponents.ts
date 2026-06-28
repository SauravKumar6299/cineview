import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 1.75rem;
`

export const Subtitle = styled.p`
  margin: 0;
  color: var(--color-text-muted);
`

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`

export const Filters = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const FilterButton = styled.button<{ $active: boolean }>`
  border: 1px solid ${({ $active }) => ($active ? 'var(--color-primary)' : 'var(--color-border)')};
  background: ${({ $active }) => ($active ? 'var(--color-primary)' : 'var(--color-surface)')};
  color: ${({ $active }) => ($active ? 'var(--color-on-primary)' : 'var(--color-text)')};
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  cursor: pointer;
  font-weight: 600;
`

export const SortControl = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
`

export const Select = styled.select`
  border: 1px solid var(--color-border-strong);
  border-radius: 0.5rem;
  background: var(--color-surface);
  color: var(--color-text);
  padding: 0.45rem 0.65rem;
`

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
`

export const Item = styled.article`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.9rem;
  background: var(--color-surface);

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

export const PosterLink = styled(Link)`
  display: block;
  width: 96px;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  border-radius: 0.6rem;
  background: var(--color-elevated);

  @media (max-width: 520px) {
    width: 120px;
  }
`

export const ItemBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ItemTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`

export const ItemTitleLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.05rem;

  &:hover {
    color: var(--color-link);
  }
`

export const Meta = styled.div`
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  color: var(--color-text-muted);
  font-size: 0.85rem;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const RemoveButton = styled.button`
  border: 1px solid var(--color-danger);
  color: var(--color-danger-text);
  background: transparent;
  border-radius: 0.5rem;
  padding: 0.45rem 0.7rem;
  cursor: pointer;
`

export const NoteArea = styled.textarea`
  width: 100%;
  min-height: 74px;
  resize: vertical;
  border: 1px solid var(--color-border);
  border-radius: 0.6rem;
  background: var(--color-surface-2);
  color: var(--color-text);
  padding: 0.65rem;
  font: inherit;
`

export const NoteFooter = styled.div<{ $warning: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: ${({ $warning }) => ($warning ? 'var(--color-danger-text)' : 'var(--color-text-muted)')};
  font-size: 0.8rem;
`
export const EpisodeProgressBadge = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border-radius: 999px;
  background: var(--color-primary-soft);
  color: var(--color-link-strong);
  padding: 0.3rem 0.65rem;
  font-size: 0.8rem;
  font-weight: 700;
`