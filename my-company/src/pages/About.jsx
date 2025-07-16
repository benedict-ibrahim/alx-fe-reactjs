function About() {
  return (
    <div style={{ 
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>About Us</h1>
      <div style={{ 
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px'
      }}>
        <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
          Founded in 1990, our company has been at the forefront of industry innovation.
          We specialize in delivering cutting-edge solutions to businesses of all sizes.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          Our team consists of experienced professionals dedicated to excellence and customer
          satisfaction. We believe in building long-term relationships with our clients.
        </p>
      </div>
    </div>
  )
}

export default About