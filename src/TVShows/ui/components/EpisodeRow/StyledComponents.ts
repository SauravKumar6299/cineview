import styled from 'styled-components'

export const Row = styled.article`
  display: flex;
  gap: 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  padding: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const Still = styled.div`
  position: relative;
  flex: 0 0 160px;
  width: 160px;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
  overflow: hidden;
  background: var(--color-elevated);
`

export const EpBadge = styled.span`
  position: absolute;
  bottom: 0.4rem;
  left: 0.4rem;
  background: var(--color-ep-badge);
  padding: 0.1rem 0.4rem;
  border-radius: 0.3rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--color-ep-badge-text);
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
`

export const RowHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const EpTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
`

export const AirDate = styled.span`
  font-size: 0.75rem;
  color: var(--color-text-faint);
`

export const EpOverview = styled.p`
  font-size: 0.85rem;
  color: var(--color-text-secondary);
`

export const PlaceholderToggle = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  border: 1px solid var(--color-border-strong);
  background: transparent;
  cursor: not-allowed;
  flex: 0 0 auto;
`
export const WatchedToggle = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  accent-color: var(--color-primary);
  cursor: pointer;
  flex: 0 0 auto;
`