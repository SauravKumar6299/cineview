import type { SearchResult } from '../../../data/schemas/Search.schemas'
import ResultCard from '../ResultCard'
import { Count, Grid, Heading, Section } from './StyledComponents'

interface ResultGroupProps {
  title: string
  results: SearchResult[]
}

const ResultGroup = ({ title, results }: ResultGroupProps) => {
  if (results.length === 0) return null

  return (
    <Section>
      <Heading>
        {title} <Count>{results.length}</Count>
      </Heading>
      <Grid>
        {results.map((result) => (
          <ResultCard key={`${result.media_type}-${result.id}`} result={result} />
        ))}
      </Grid>
    </Section>
  )
}

export default ResultGroup