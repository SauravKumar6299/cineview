import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const HeaderCopy = styled.div`
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

export const FormCard = styled.form`
  display: grid;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.9rem;
  background: var(--color-surface);
`

export const Field = styled.label`
  display: grid;
  gap: 0.35rem;
  font-weight: 600;
`

export const Input = styled.input`
  border: 1px solid var(--color-border-strong);
  border-radius: 0.55rem;
  background: var(--color-surface-2);
  color: var(--color-text);
  padding: 0.6rem 0.75rem;
  font: inherit;
`

export const TextArea = styled.textarea`
  min-height: 84px;
  resize: vertical;
  border: 1px solid var(--color-border-strong);
  border-radius: 0.55rem;
  background: var(--color-surface-2);
  color: var(--color-text);
  padding: 0.6rem 0.75rem;
  font: inherit;
`

export const Counter = styled.span<{ $warning: boolean }>`
  justify-self: end;
  color: ${({ $warning }) => ($warning ? 'var(--color-danger-text)' : 'var(--color-text-muted)')};
  font-size: 0.8rem;
`

export const FormActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`

export const ListCard = styled.article`
  display: grid;
  gap: 0.8rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.9rem;
  background: var(--color-surface);
`

export const ListTitle = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.05rem;

  &:hover {
    color: var(--color-link);
  }
`

export const Description = styled.p`
  margin: 0;
  min-height: 1.25rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
`

export const Meta = styled.span`
  color: var(--color-text-faint);
  font-size: 0.85rem;
`

export const PreviewRow = styled.div`
  display: flex;
  min-height: 58px;
`

export const PreviewPoster = styled.div`
  width: 42px;
  aspect-ratio: 2 / 3;
  border-radius: 0.35rem;
  overflow: hidden;
  background: var(--color-elevated);
  border: 2px solid var(--color-surface);

  & + & {
    margin-left: -0.75rem;
  }
`

export const CardActions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`