import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../Auth/data/context/useAuth'
import Button from '../Button'
import { Bar, Brand, Links, Right, SearchInput } from './StyledComponents'

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/watchlist', label: 'Watchlist' },
  { to: '/lists', label: 'Lists' },
  { to: '/settings', label: 'Settings' },
]

const Navbar = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <Bar>
      <Brand to="/">CineView</Brand>
      <Links>
        {NAV_ITEMS.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'active' : '')}>
            {label}
          </NavLink>
        ))}
      </Links>
      <Right>
        <SearchInput placeholder="Search movies, TV shows…" onFocus={() => navigate('/search')} />
        {/* Language switcher placeholder — wired in Milestone 4 */}
        <span aria-hidden>🌐</span>
        <img src="/favicon.svg" alt="User avatar" width={28} height={28} />
        <Button variant="ghost" onClick={handleLogout}>Logout</Button>
      </Right>
    </Bar>
  )
}

export default Navbar