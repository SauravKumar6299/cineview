import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import { Main, Shell } from './StyledComponents'

const AppLayout = () => (
  <Shell>
    <Navbar />
    <Main>
      <Outlet />
    </Main>
  </Shell>
)

export default AppLayout