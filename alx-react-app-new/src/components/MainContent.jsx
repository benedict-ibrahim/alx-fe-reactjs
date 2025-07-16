function MainContent() {
  return (
    <main style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#2c3e50',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px'
      }}>Featured Cities</h2>
      <ul style={{
        listStyleType: 'none',
        padding: '0'
      }}>
        <li style={{
          padding: '10px',
          margin: '5px 0',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px'
        }}>New York</li>
        <li style={{
          padding: '10px',
          margin: '5px 0',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px'
        }}>Paris</li>
        <li style={{
          padding: '10px',
          margin: '5px 0',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px'
        }}>Tokyo</li>
      </ul>
    </main>
  );
}

export default MainContent;