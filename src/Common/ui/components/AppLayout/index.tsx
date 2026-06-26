import { Outlet } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { usePreferences } from '../../../../Preferences'
import Navbar from '../Navbar'
import { Main, Shell } from './StyledComponents'

const AppLayout = observer(() => {
  const preferences = usePreferences()

  return (
    <Shell>
      <Navbar />
      <Main key={`${preferences.language}-${preferences.region}`}>
        <Outlet />
      </Main>
    </Shell>
  )
})

export default AppLayout