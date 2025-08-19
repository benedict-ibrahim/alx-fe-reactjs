import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import './Profile.css'

const ProfileSettings = () => {
  const { user } = useAuth()
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: false,
    language: 'english'
  })

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <div className="profile-settings">
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

        <button 
          className="save-settings-btn"
          onClick={() => alert('Settings saved! (This is a demo)')}
        >
          Save Settings
        </button>
      </div>
    </div>
  )
}

export default ProfileSettings