import { Link } from 'react-router-dom'
import { Button } from '../../Common'
import { Actions, Page, Subtitle, Title } from './StyledComponents'

const NotFoundPage = () => (
  <Page>
    <Title>Page not found</Title>
    <Subtitle>The page you are looking for does not exist or may have been moved.</Subtitle>
    <Actions>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </Actions>
  </Page>
)

export default NotFoundPage