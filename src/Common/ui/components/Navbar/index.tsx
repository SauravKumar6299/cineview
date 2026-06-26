import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../Auth/data/context/useAuth'
import Button from '../Button'
import { Bar, Brand, Links, Right, SearchInput } from './StyledComponents'
import { useTranslation } from 'react-i18next'
import { usePreferences } from '../../../../Preferences/data/store/usePreferences'

const Navbar = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
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
  const navItems = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/watchlist', label: t('nav.watchlist') },
    { to: '/lists', label: t('nav.lists') },
    { to: '/settings', label: t('nav.settings') },
  ]

  return (
    <Bar>
      <Brand to="/">{t('brand')}</Brand>
      <Links>
        {navItems.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'active' : '')}>
            {label}
          </NavLink>
        ))}
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
}

export default Navbar