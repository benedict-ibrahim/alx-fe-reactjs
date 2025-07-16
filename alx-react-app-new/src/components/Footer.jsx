function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      boxShadow: '0 -2px 5px rgba(0,0,0,0.1)'
    }}>
      <p style={{
        margin: '0',
        fontSize: '14px',
        fontWeight: '300'
      }}>
        © 2023 My Favorite Cities App
      </p>
      <div style={{
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <a href="#" style={{
          color: '#3498db',
          textDecoration: 'none'
        }}>About</a>
        <a href="#" style={{
          color: '#3498db',
          textDecoration: 'none'
        }}>Contact</a>
        <a href="#" style={{
          color: '#3498db',
          textDecoration: 'none'
        }}>Privacy</a>
      </div>
    </footer>
  );
}

export default Footer;