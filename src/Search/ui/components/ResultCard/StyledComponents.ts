import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const cardBase = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-decoration: none;
  color: inherit;
`

export const Card = styled.div`
  ${cardBase}
`

export const CardLink = styled(Link)`
  ${cardBase}
`

export const Poster = styled.div`
  position: relative;
  aspect-ratio: 2 / 3;
  border-radius: 0.6rem;
  overflow: hidden;
  background: var(--color-elevated);
`

export const RatingSlot = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
`

export const Name = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Meta = styled.span`
  font-size: 0.75rem;
  color: var(--color-text-faint);
`