import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { StyledButton } from './StyledComponents'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  isLoading?: boolean
  children: ReactNode
}

const Button = ({ variant = 'primary', isLoading, disabled, children, ...rest }: ButtonProps) => (
  <StyledButton $variant={variant} disabled={disabled || isLoading} {...rest}>
    {isLoading ? 'Please wait…' : children}
  </StyledButton>
)

export default Button