import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;
  display: inline-flex;
  z-index: 100;
`

export const Trigger = styled.button`
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text);
  padding: 0.45rem 0.75rem;
  cursor: pointer;
  font-weight: 600;
`

export const Panel = styled.div`
  position: absolute;
  right: 0;
  z-index: 1000;
  width: 240px;
  display: grid;
  gap: 0.65rem;
  padding: 0.85rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: var(--color-surface);
  bottom: calc(100% + 0.5rem);
  color: var(--color-text);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.3);
`

export const Title = styled.h3`
  margin: 0;
  font-size: 0.9rem;
`

export const EmptyText = styled.p`
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.85rem;
`

export const ListOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--color-text);
  font-size: 0.9rem;
  cursor: pointer;
`

export const Checkbox = styled.input`
  accent-color: var(--color-primary);
`

export const ListName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`