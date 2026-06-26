import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: 2rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`

export const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
`

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scroll-snap-type: x mandatory;

  > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-strong);
    border-radius: 4px;
  }
`