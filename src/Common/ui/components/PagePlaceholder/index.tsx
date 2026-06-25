import { Wrapper, Title, Subtitle } from './StyledComponents'

interface PagePlaceholderProps {
  title: string
  subtitle?: string
}

const PagePlaceholder = ({ title, subtitle }: PagePlaceholderProps) => (
  <Wrapper>
    <Title>{title}</Title>
    {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
  </Wrapper>
)

export default PagePlaceholder