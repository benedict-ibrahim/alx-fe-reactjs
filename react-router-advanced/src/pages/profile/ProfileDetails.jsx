import { useAuth } from '../../context/AuthContext'
import './Profile.css'

const ProfileDetails = () => {
  const { user } = useAuth()

  return (
    <div className="profile-details">
      <h3>Profile Details</h3>
      
      <div className="profile-info">
        <div className="info-item">
          <label>Username:</label>
          <span>{user?.username || 'No username set'}</span>
        </div>
        
        <div className="info-item">
          <label>Email:</label>
          <span>{user?.email || 'No email set'}</span>
        </div>
        
        <div className="info-item">
          <label>Member Since:</label>
          <span>{user?.joinDate || 'Unknown'}</span>
        </div>
      </div>

      <div className="profile-stats">
        <h4>Activity Stats</h4>
        <div className="stats-grid">
          <div className="stat">
            <span className="stat-number">24</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat">
            <span className="stat-number">156</span>
            <span className="stat-label">Comments</span>
          </div>
          <div className="stat">
            <span className="stat-number">12</span>
            <span className="stat-label">Likes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails