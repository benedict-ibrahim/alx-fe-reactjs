import { Outlet, Link } from 'react-router-dom'

const ProfileLayout = () => {
  return (
    <div className="profile-layout">
      <h2>Profile</h2>
      <nav className="profile-nav">
        <Link to="/profile">Details</Link>
        <Link to="/profile/settings">Settings</Link>
      </nav>
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  )
}

export default ProfileLayout