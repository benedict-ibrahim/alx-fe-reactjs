import { Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

// Nested Components
const ProfileDetails = () => {
  const { user } = useAuth();

  return (
    <div className="profile-section">
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
          <label>Bio:</label>
          <span>{user?.bio || 'No bio yet...'}</span>
        </div>
        
        <div className="info-item">
          <label>Location:</label>
          <span>{user?.location || 'Unknown'}</span>
        </div>
        
        <div className="info-item">
          <label>Member Since:</label>
          <span>{user?.joinDate || 'Recently'}</span>
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
  );
};

const ProfileSettings = () => {
  const { user, updateUser } = useAuth();
  const [settings, setSettings] = useState({
    emailNotifications: user?.settings?.emailNotifications ?? true,
    darkMode: user?.settings?.darkMode ?? false,
    language: user?.settings?.language || 'english'
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    updateUser({ settings });
    alert('Settings saved successfully!');
  };

  return (
    <div className="profile-section">
      <h3>Profile Settings</h3>
      
      <div className="settings-form">
        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
            />
            Email Notifications
          </label>
        </div>

        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
            />
            Dark Mode
          </label>
        </div>

        <div className="setting-item">
          <label>Language:</label>
          <select
            value={settings.language}
            onChange={(e) => handleSettingChange('language', e.target.value)}
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </select>
        </div>

        <div className="setting-item">
          <label>Theme:</label>
          <select
            value={settings.theme || 'light'}
            onChange={(e) => handleSettingChange('theme', e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <div className="form-actions">
          <button 
            className="save-btn"
            onClick={handleSaveSettings}
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileEdit = () => {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    bio: user?.bio || '',
    location: user?.location || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-section">
      <h3>Edit Profile</h3>
      
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            rows="3"
            placeholder="Tell us about yourself..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="City, Country"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

// Main Profile Component with Routing
const Profile = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <div className="profile-container">
        <div className="not-logged-in">
          <h2>Please log in to view your profile</h2>
          <p>You need to be authenticated to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
        <div className="profile-avatar">
          <div className="avatar-placeholder">
            {user.username?.charAt(0).toUpperCase() || 'U'}
          </div>
          <span className="username">{user.username}</span>
        </div>
      </div>

      <nav className="profile-nav">
        <Link 
          to="/profile" 
          className={location.pathname === '/profile' ? 'active' : ''}
        >
          Profile Details
        </Link>
        <Link 
          to="/profile/edit" 
          className={location.pathname === '/profile/edit' ? 'active' : ''}
        >
          Edit Profile
        </Link>
        <Link 
          to="/profile/settings" 
          className={location.pathname === '/profile/settings' ? 'active' : ''}
        >
          Settings
        </Link>
      </nav>

      <div className="profile-content">
        <Routes>
          <Route path="/" element={<ProfileDetails />} />
          <Route path="/edit" element={<ProfileEdit />} />
          <Route path="/settings" element={<ProfileSettings />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;