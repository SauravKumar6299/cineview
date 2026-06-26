import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.8);
`

export const Dialog = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  overflow: hidden;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
`