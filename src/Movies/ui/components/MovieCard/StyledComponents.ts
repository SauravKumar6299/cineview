import styled from 'styled-components'

export const Card = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const PosterWrap = styled.div`
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

export const WatchlistButton = styled.button<{ $active: boolean }>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);
  color: ${({ $active }) => ($active ? 'var(--color-danger)' : '#ffffff')};
`

export const CardTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const CardActions = styled.div`
  display: flex;
  gap: 0.35rem;
  align-items: center;
  justify-content: space-between;
`