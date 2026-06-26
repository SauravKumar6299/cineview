import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: 1.5rem;
`

export const Heading = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`

export const Count = styled.span`
  font-size: 0.8rem;
  color: var(--color-text-faint);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
`