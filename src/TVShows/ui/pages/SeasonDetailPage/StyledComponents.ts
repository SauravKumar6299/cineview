import styled from 'styled-components'

export const Header = styled.header`
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`

export const SeasonTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`

export const ProgressWrap = styled.div`
  display: grid;
  gap: 0.35rem;
`

export const ProgressMeta = styled.span`
  color: var(--color-text-muted);
  font-size: 0.85rem;
`

export const ProgressTrack = styled.div`
  height: 0.5rem;
  border-radius: 999px;
  background: var(--color-elevated);
  overflow: hidden;
`

export const ProgressFill = styled.div<{ $percent: number }>`
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  background: var(--color-primary);
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const SmallButton = styled.button`
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text);
  padding: 0.4rem 0.7rem;
  cursor: pointer;
  font-weight: 600;
`