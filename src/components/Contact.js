import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="form-label">Name</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="form-label">Email</label>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            className="form-input"
            placeholder=" "
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label className="form-label">Message</label>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
