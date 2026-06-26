import styled from 'styled-components'

export const Card = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  text-align: center;
`

export const Avatar = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  background: var(--color-elevated);
`

export const Name = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Character = styled.span`
  font-size: 0.75rem;
  color: var(--color-text-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`