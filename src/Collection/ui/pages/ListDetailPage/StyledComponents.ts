import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const BackLink = styled(Link)`
  color: var(--color-link);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: var(--color-link-strong);
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 1.75rem;
`

export const Description = styled.p`
  margin: 0;
  color: var(--color-text-muted);
`

export const Meta = styled.span`
  color: var(--color-text-faint);
  font-size: 0.9rem;
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

export const ItemMeta = styled.div`
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  color: var(--color-text-muted);
  font-size: 0.85rem;
`

export const RemoveButton = styled.button`
  border: 1px solid var(--color-danger);
  color: var(--color-danger-text);
  background: transparent;
  border-radius: 0.5rem;
  padding: 0.45rem 0.7rem;
  cursor: pointer;
`

export const NotFoundWrap = styled.div`
  display: grid;
  justify-items: center;
  gap: 0.75rem;
  padding: 4rem 1rem;
  text-align: center;
`