import styled, { css } from 'styled-components'

export const StyledButton = styled.button<{ $variant: 'primary' | 'ghost' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $variant }) =>
    $variant === 'primary'
      ? css`
          background: var(--color-primary);
          color: #fff;
          border: none;
        `
      : css`
          background: transparent;
          color: inherit;
          border: 1px solid currentColor;
        `}
`