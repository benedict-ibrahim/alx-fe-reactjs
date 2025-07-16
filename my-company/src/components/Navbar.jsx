import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '15px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ 
        color: 'white', 
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.2rem'
      }}>Company Name</Link>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar