import { useTranslation } from 'react-i18next'
import { RetryButton, Wrapper } from './StyledComponents'

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

const ErrorState = ({ message, onRetry }: ErrorStateProps) => {
    const { t } = useTranslation('common')
    return (
        <Wrapper>
        <p>{message ?? t('states.error')}</p>
        {onRetry ? <RetryButton type="button" onClick={onRetry}>{t('states.retry')}</RetryButton> : null}
        </Wrapper>
    )
}

export default ErrorState