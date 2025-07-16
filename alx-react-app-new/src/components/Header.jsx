function Header() {
  return (
    <header style={{
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      textAlign: 'center',
      padding: '20px 0',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    }}>
      <h1 style={{
        margin: '0',
        fontSize: '2.5rem',
        letterSpacing: '1px'
      }}>My Favorite Cities</h1>
    </header>
  );
}

export default Header;