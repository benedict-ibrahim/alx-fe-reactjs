import { Outlet, Link, useLocation } from 'react-router-dom'
import './Profile.css'

const ProfileLayout = () => {
  const location = useLocation()

  return (
    <div className="profile-layout">
      <h2>User Profile</h2>
      
      <nav className="profile-nav">
        <Link 
          to="/profile" 
          className={location.pathname === '/profile' ? 'active' : ''}
        >
          Profile Details
        </Link>
        <Link 
          to="/profile/settings" 
          className={location.pathname === '/profile/settings' ? 'active' : ''}
        >
          Settings
        </Link>
      </nav>

      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  )
}

export default ProfileLayout