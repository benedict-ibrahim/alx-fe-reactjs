import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import './index.css'

// Import components
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import ProfileLayout from './pages/profile/ProfileLayout'
import ProfileDetails from './pages/profile/ProfileDetails'
import ProfileSettings from './pages/profile/ProfileSettings'
import BlogPost from './pages/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <ProfileLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <ProfileDetails /> },
          { path: 'settings', element: <ProfileSettings /> }
        ]
      },
      { path: 'posts/:postId', element: <BlogPost /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)