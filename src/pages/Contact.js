import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  return (
    <div>
      {/* Contact Hero Section */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p className="hero-subtitle">
            Get in Touch for Your Hardware Needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Ready to start your next project or have questions about our services? 
                We're here to help you find the perfect hardware solutions for your business needs.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h3>Email Us</h3>
                    <p>kjcsaravanak@gmail.com</p>
                    <p>Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h3>Call Us</h3>
                    <p>+91 8885351814</p>
                    <p>Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h3>Visit Us</h3>
                    <p>No. 02, Ammavaripeta</p>
                    <p>Venkatagiri Town, Venkatagiri</p>
                    <p>Sri Potti Sriramulu Nellore</p>
                    <p>Andhra Pradesh, 524132</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🌍</div>
                  <div>
                    <h3>Global Reach</h3>
                    <p>Serving 50+ Countries</p>
                    <p>24/7 International Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="quote">Request Quote</option>
                    <option value="bulk">Bulk Order</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Please describe your requirements, including specific products, quantities, and any other relevant details..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="success-message">
                    ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">❓</div>
              <h3>What products do you offer?</h3>
              <p>We specialize in computer hardware including processors, graphics cards, motherboards, memory, storage, and peripherals from leading manufacturers.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌍</div>
              <h3>Do you ship internationally?</h3>
              <p>Yes, we provide global shipping services to over 50 countries with secure packaging and tracking.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>What are your payment terms?</h3>
              <p>We accept various payment methods including wire transfers, letters of credit, and secure online payments.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📦</div>
              <h3>What's your minimum order quantity?</h3>
              <p>MOQ varies by product. We accommodate both small orders and large bulk purchases based on your needs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Do you provide warranties?</h3>
              <p>All products come with manufacturer warranties, and we provide additional support for warranty claims.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⏱️</div>
              <h3>What's your typical delivery time?</h3>
              <p>Delivery times vary by location and product availability, typically ranging from 5-15 business days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;