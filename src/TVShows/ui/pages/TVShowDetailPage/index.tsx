import { Outlet } from 'react-router-dom'
import { PagePlaceholder } from '../../../../Common'

const TVShowDetailPage = () => (
  <>
    <PagePlaceholder title="TV Show Detail" subtitle="TV show detail — coming soon" />
    <Outlet />
  </>
)

export default TVShowDetailPage