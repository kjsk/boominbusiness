import React, { useState } from 'react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Intel Core i9-13900K',
      category: 'processors',
      image: '/images/intel-i9.svg',
      description: 'Latest 13th generation Intel processor with 24 cores and 32 threads for ultimate performance.',
      features: ['24 Cores, 32 Threads', '5.8 GHz Max Turbo', 'LGA1700 Socket', 'Unlocked for Overclocking']
    },
    {
      id: 2,
      name: 'AMD Ryzen 9 7950X',
      category: 'processors',
      image: '/images/amd-ryzen.svg',
      description: 'High-performance AMD processor with Zen 4 architecture for demanding applications.',
      features: ['16 Cores, 32 Threads', '5.7 GHz Max Boost', 'AM5 Socket', '5nm Process Technology']
    },
    {
      id: 3,
      name: 'NVIDIA RTX 4090',
      category: 'graphics',
      image: '/images/nvidia-rtx.svg',
      description: 'Flagship graphics card with Ada Lovelace architecture for 4K gaming and content creation.',
      features: ['24GB GDDR6X', 'Ray Tracing 3rd Gen', 'DLSS 3', '4K Gaming Ready']
    },
    {
      id: 4,
      name: 'AMD Radeon RX 7900 XTX',
      category: 'graphics',
      image: '/images/nvidia-rtx.svg',
      description: 'Powerful graphics solution with RDNA 3 architecture for high-end gaming.',
      features: ['24GB GDDR6', 'Ray Tracing', 'FSR 3', 'High Refresh Rate Gaming']
    },
    {
      id: 5,
      name: 'ASUS ROG Maximus Z790',
      category: 'motherboards',
      image: '/images/motherboard.svg',
      description: 'Premium motherboard with advanced features for enthusiast builds.',
      features: ['LGA1700 Socket', 'DDR5 Support', 'PCIe 5.0', 'WiFi 6E']
    },
    {
      id: 6,
      name: 'MSI MPG B650 Carbon',
      category: 'motherboards',
      image: '/images/motherboard.svg',
      description: 'Feature-rich motherboard for AMD Ryzen 7000 series processors.',
      features: ['AM5 Socket', 'DDR5 Ready', 'PCIe 4.0', 'RGB Lighting']
    },
    {
      id: 7,
      name: 'Corsair Dominator DDR5-5600',
      category: 'memory',
      image: '/images/ram-memory.svg',
      description: 'High-performance DDR5 memory kit for extreme computing performance.',
      features: ['32GB Kit (2x16GB)', '5600 MHz', 'Low Latency', 'RGB Lighting']
    },
    {
      id: 8,
      name: 'Samsung 980 PRO 2TB',
      category: 'storage',
      image: '/images/ssd-storage.svg',
      description: 'Ultra-fast NVMe SSD with PCIe 4.0 interface for lightning-fast data access.',
      features: ['2TB Capacity', 'PCIe 4.0 x4', '7,000 MB/s Read', '5-Year Warranty']
    },
    {
      id: 9,
      name: 'Logitech MX Master 3S',
      category: 'peripherals',
      image: '/images/computer-case.svg',
      description: 'Professional wireless mouse with advanced features for productivity.',
      features: ['8K DPI Sensor', 'USB-C Charging', 'Multi-Device', 'Quiet Clicks']
    },
    {
      id: 10,
      name: 'Corsair K95 RGB Platinum',
      category: 'peripherals',
      image: '/images/power-supply.svg',
      description: 'Premium mechanical gaming keyboard with Cherry MX switches.',
      features: ['Cherry MX Switches', 'RGB Backlighting', 'Macro Keys', 'USB Passthrough']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '📦' },
    { id: 'processors', name: 'Processors', icon: '🖥️' },
    { id: 'graphics', name: 'Graphics Cards', icon: '🎮' },
    { id: 'motherboards', name: 'Motherboards', icon: '🔧' },
    { id: 'memory', name: 'Memory', icon: '💾' },
    { id: 'storage', name: 'Storage', icon: '💾' },
    { id: 'peripherals', name: 'Peripherals', icon: '🖱️' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div>
      {/* Products Hero Section */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-content">
          <h1>Our Products</h1>
          <p className="hero-subtitle">
            Premium Computer Hardware for Global Markets
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <div className="container">
          <h2 className="section-title">Product Categories</h2>
          
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <ul className="product-features">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <button className="product-btn">Request Quote</button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Why Choose Our Products?</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">✅</div>
              <h3>Authentic Products</h3>
              <p>All products are sourced directly from authorized manufacturers and distributors.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Warranty Coverage</h3>
              <p>Comprehensive warranty coverage and after-sales support for all products.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3>Global Shipping</h3>
              <p>Secure packaging and reliable shipping to destinations worldwide.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>Best market prices with volume discounts for bulk orders.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality checks and testing before shipment.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎧</div>
              <h3>Expert Support</h3>
              <p>Technical consultation and product recommendations from our experts.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;