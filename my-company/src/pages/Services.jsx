function Services() {
  const services = [
    "Technology Consulting",
    "Market Analysis",
    "Product Development",
    "Digital Marketing",
    "Cloud Solutions",
    "Data Analytics"
  ]

  return (
    <div style={{ 
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Our Services</h1>
      <ul style={{ 
        listStyleType: 'none',
        padding: 0
      }}>
        {services.map((service, index) => (
          <li key={index} style={{
            backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#e9ecef',
            padding: '15px',
            marginBottom: '10px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ 
              backgroundColor: '#3498db',
              color: 'white',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px'
            }}>{index + 1}</span>
            {service}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services