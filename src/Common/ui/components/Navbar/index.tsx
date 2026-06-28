import { observer } from 'mobx-react-lite'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../../Auth/data/context/useAuth'
import { useCollection } from '../../../../Collection'
import { usePreferences } from '../../../../Preferences/data/store/usePreferences'
import Button from '../Button'
import { Badge, Bar, Brand, Links, Right, SearchInput, WatchlistLink } from './StyledComponents'

const Navbar = observer(() => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const collection = useCollection()
  const preferences = usePreferences()
const nextLanguage = preferences.language === 'en' ? 'es' : 'en'
const handleLanguageChange = () => {
  preferences.setLanguage(nextLanguage)
}
  const { t } = useTranslation('common')
  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <Bar>
      <Brand to="/">{t('brand')}</Brand>
      <Links>
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
        {t('nav.home')}
      </NavLink>

      <WatchlistLink to="/watchlist" className={({ isActive }) => (isActive ? 'active' : '')}>
        {t('nav.watchlist')}
        {collection.totalWatchlistCount > 0 ? <Badge>{collection.totalWatchlistCount}</Badge> : null}
      </WatchlistLink>

      <NavLink to="/lists" className={({ isActive }) => (isActive ? 'active' : '')}>
        {t('nav.lists')}
      </NavLink>

      <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
        {t('nav.settings')}
      </NavLink>
    </Links>
      <Right>
        <SearchInput placeholder={t('search.navPlaceholder')} onFocus={() => navigate('/search')} />
        <button type="button" onClick={handleLanguageChange} aria-label={t('nav.changeLanguage')}>
          🌐 {preferences.language.toUpperCase()}
        </button>
        <Button variant="ghost" onClick={handleLogout}>{t('nav.logout')}</Button>
      </Right>
    </Bar>
  )
})

export default Navbar