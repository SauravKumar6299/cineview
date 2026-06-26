import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { StyledButton } from './StyledComponents'
import { useTranslation } from 'react-i18next'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  isLoading?: boolean
  children: ReactNode
}

const Button = ({ variant = 'primary', isLoading, disabled, children, ...rest }: ButtonProps) => {
  const { t } = useTranslation('common')
  return (
    <StyledButton $variant={variant} disabled={disabled || isLoading} {...rest}>
      {isLoading ? t('actions.pleaseWait') : children}
    </StyledButton>
  )
}

export default Button