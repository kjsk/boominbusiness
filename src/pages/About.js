import React from 'react';

const About = () => {
  return (
    <div>
      {/* About Hero Section */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-content">
          <h1>About BoominBusiness</h1>
          <p className="hero-subtitle">
            Leading the Future of Computer Hardware Trade
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                BoominBusiness was founded with a vision to bridge the gap between technology manufacturers and businesses worldwide. What started as a small venture has grown into a trusted global partner for computer hardware import and export services.
              </p>
              <p>
                Our journey began with a simple belief: that quality technology should be accessible to businesses everywhere, regardless of geographical boundaries. Today, we serve over 500 partners across 50+ countries, delivering excellence in every transaction.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                To provide seamless, reliable, and cost-effective computer hardware import and export solutions that empower businesses to thrive in the digital age. We are committed to building lasting partnerships through trust, quality, and exceptional service.
              </p>
              
              <h2>Our Vision</h2>
              <p>
                To become the world's most trusted platform for computer hardware trade, connecting technology ecosystems across continents and fostering global digital transformation.
              </p>
            </div>
            
            <div className="stats-grid">
              <div className="stat">
                <h3>500+</h3>
                <p>Global Partners</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Countries Served</p>
              </div>
              <div className="stat">
                <h3>10K+</h3>
                <p>Products Delivered</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Customer Support</p>
              </div>
              <div className="stat">
                <h3>99.9%</h3>
                <p>Delivery Success Rate</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Quality First</h3>
              <p>We source only the highest quality products from certified manufacturers and trusted suppliers worldwide.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Trust & Reliability</h3>
              <p>Building long-term partnerships through transparent communication and consistent delivery excellence.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌍</div>
              <h3>Global Reach</h3>
              <p>Connecting businesses across continents with comprehensive logistics and supply chain solutions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Innovation</h3>
              <p>Staying ahead of technology trends to provide cutting-edge solutions for our partners' evolving needs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Speed & Efficiency</h3>
              <p>Streamlined processes and advanced logistics ensure fast, efficient delivery of your orders.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>Leveraging our global network to offer the most competitive prices without compromising on quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Why Choose BoominBusiness?</h2>
          <div className="about-content">
            <div className="about-text">
              <div className="feature-list">
                <div className="feature-item">
                  <h3>🏆 Industry Expertise</h3>
                  <p>Deep understanding of computer hardware markets and technology trends worldwide.</p>
                </div>
                <div className="feature-item">
                  <h3>🔒 Secure Transactions</h3>
                  <p>Advanced security protocols and trusted payment systems for safe, reliable transactions.</p>
                </div>
                <div className="feature-item">
                  <h3>📋 Compliance & Certification</h3>
                  <p>Full compliance with international trade regulations and quality certifications.</p>
                </div>
                <div className="feature-item">
                  <h3>🚚 Logistics Excellence</h3>
                  <p>Comprehensive shipping and logistics solutions with real-time tracking and insurance.</p>
                </div>
                <div className="feature-item">
                  <h3>🎧 Dedicated Support</h3>
                  <p>24/7 customer support team ready to assist with any questions or concerns.</p>
                </div>
                <div className="feature-item">
                  <h3>📈 Scalable Solutions</h3>
                  <p>Flexible services that grow with your business, from small orders to large-scale procurement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;