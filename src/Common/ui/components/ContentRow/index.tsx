import type { ReactNode } from 'react'
import Spinner from '../Spinner'
import ErrorState from '../ErrorState'
import EmptyState from '../EmptyState'
import { Header, Row, Section, Title } from './StyledComponents'

interface ContentRowProps<T> {
  title: string
  items: T[]
  isLoading: boolean
  isError?: boolean
  onRetry?: () => void
  renderItem: (item: T) => ReactNode
  emptyMessage?: string
}

const ContentRow = <T,>({
  title,
  items,
  isLoading,
  isError,
  onRetry,
  renderItem,
  emptyMessage,
}: ContentRowProps<T>) => {
  const renderBody = () => {
    if (isLoading) return <Spinner />
    if (isError) return <ErrorState onRetry={onRetry} />
    if (items.length === 0) return <EmptyState message={emptyMessage} />
    return <Row>{items.map(renderItem)}</Row>
  }

  return (
    <Section>
      <Header>
        <Title>{title}</Title>
      </Header>
      {renderBody()}
    </Section>
  )
}

export default ContentRow