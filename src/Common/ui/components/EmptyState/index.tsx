import { useTranslation } from 'react-i18next'
import { Wrapper } from './StyledComponents'

interface EmptyStateProps {
  message?: string
}

const EmptyState = ({ message }: EmptyStateProps) => {
  const { t } = useTranslation('common')

  return <Wrapper>{message ?? t('states.empty')}</Wrapper>
}

export default EmptyState