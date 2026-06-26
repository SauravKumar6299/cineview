import { ClearButton, Chip, Chips, Header, Title, Wrapper } from './StyledComponents'

interface RecentSearchesProps {
  terms: string[]
  onSelect: (term: string) => void
  onClear: () => void
}

const RecentSearches = ({ terms, onSelect, onClear }: RecentSearchesProps) => {
  if (terms.length === 0) return null

  return (
    <Wrapper>
      <Header>
        <Title>Recent Searches</Title>
        <ClearButton type="button" onClick={onClear}>
          Clear History
        </ClearButton>
      </Header>
      <Chips>
        {terms.map((term) => (
          <Chip key={term} type="button" onClick={() => onSelect(term)}>
            {term}
          </Chip>
        ))}
      </Chips>
    </Wrapper>
  )
}

export default RecentSearches