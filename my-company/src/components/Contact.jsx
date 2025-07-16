import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We'll contact you soon.`);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div style={{
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <h1 style={{
        color: '#2c3e50',
        marginBottom: '30px',
        textAlign: 'center'
      }}>Contact Us</h1>
      
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#2c3e50'
          }}>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#2c3e50'
          }}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            color: '#2c3e50'
          }}>Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>

        <button type="submit" style={{
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          padding: '14px 24px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '600',
          width: '100%',
          transition: 'background-color 0.3s',
          ':hover': {
            backgroundColor: '#2980b9'
          }
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;