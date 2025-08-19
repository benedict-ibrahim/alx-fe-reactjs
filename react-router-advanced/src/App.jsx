import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import ProfileLayout from './pages/profile/ProfileLayout'
import ProfileDetails from './pages/profile/ProfileDetails'
import ProfileSettings from './pages/profile/ProfileSettings'
import BlogPost from './pages/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts/:postId" element={<BlogPost />} />
            
            {/* Protected Routes */}
            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfileLayout />
              </ProtectedRoute>
            }>
              <Route index element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App