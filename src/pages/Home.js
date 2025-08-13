import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach(el => {
      if (el.id) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const TypeWriter = ({ text, speed = 100 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, speed]);

    return <span>{displayText}</span>;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <TypeWriter text="Welcome to BoominBusiness" speed={80} />
          </h1>
          <p className="hero-subtitle">
            Your Premier Destination for Computer Hardware Import & Export
          </p>
          <Link to="/contact" className="cta-button">
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className={`service-card fade-in ${visibleElements.has('service-1') ? 'visible' : ''}`} id="service-1">
              <div className="service-icon">🌍</div>
              <h3>Global Import/Export</h3>
              <p>Seamless international trade solutions for computer hardware and technology products worldwide.</p>
            </div>
            <div className={`service-card fade-in ${visibleElements.has('service-2') ? 'visible' : ''}`} id="service-2">
              <div className="service-icon">📦</div>
              <h3>Bulk Supply</h3>
              <p>Large-scale procurement and distribution of computer components for businesses and retailers.</p>
            </div>
            <div className={`service-card fade-in ${visibleElements.has('service-3') ? 'visible' : ''}`} id="service-3">
              <div className="service-icon">🔧</div>
              <h3>Technical Support</h3>
              <p>Expert guidance and technical assistance for all your hardware needs and specifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className={`about-text slide-in-left ${visibleElements.has('about-text') ? 'visible' : ''}`} id="about-text">
              <h2>About TechParts Global</h2>
              <p>
                With years of experience in the technology industry, TechParts Global has established itself as a trusted partner for computer hardware import and export services. We specialize in connecting businesses worldwide with high-quality technology products.
              </p>
              <p>
                Our commitment to excellence, competitive pricing, and reliable service has made us a preferred choice for businesses looking to expand their technology offerings globally.
              </p>
              <Link to="/about" className="cta-button">
                Learn More About Us
              </Link>
            </div>
            <div className={`stats-grid slide-in-right ${visibleElements.has('stats') ? 'visible' : ''}`} id="stats">
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
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="products-preview">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            <div className={`product-card fade-in ${visibleElements.has('product-1') ? 'visible' : ''}`} id="product-1">
              <div className="product-image">🖥️</div>
              <div className="product-info">
                <h3>Processors & CPUs</h3>
                <p>Latest generation processors from leading manufacturers for optimal performance.</p>
              </div>
            </div>
            <div className={`product-card fade-in ${visibleElements.has('product-2') ? 'visible' : ''}`} id="product-2">
              <div className="product-image">🎮</div>
              <div className="product-info">
                <h3>Graphics Cards</h3>
                <p>High-performance graphics solutions for gaming, design, and professional applications.</p>
              </div>
            </div>
            <div className={`product-card fade-in ${visibleElements.has('product-3') ? 'visible' : ''}`} id="product-3">
              <div className="product-image">💾</div>
              <div className="product-info">
                <h3>Memory & Storage</h3>
                <p>Reliable RAM modules and storage solutions for all computing needs.</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/products" className="cta-button">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="contact-preview">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className={`contact-item fade-in ${visibleElements.has('contact-1') ? 'visible' : ''}`} id="contact-1">
              <div className="contact-icon">📧</div>
              <h3>Email Us</h3>
              <p>kjcsaravanak@gmail.com</p>
            </div>
            <div className={`contact-item fade-in ${visibleElements.has('contact-2') ? 'visible' : ''}`} id="contact-2">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>+91 8885351814</p>
            </div>
            <div className={`contact-item fade-in ${visibleElements.has('contact-3') ? 'visible' : ''}`} id="contact-3">
              <div className="contact-icon">📍</div>
              <h3>Visit Us</h3>
              <p>Venkatagiri, Andhra Pradesh, India</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/contact" className="cta-button">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;