<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Helio Pet Device | Professional Cold Laser Therapy</title>
  <meta name="description" content="The Helio Pet Device offers professional-grade cold laser therapy for pets to reduce pain, inflammation and improve mobility. 5-minute treatments with proven results.">
  <link rel="stylesheet" href="styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
/* Global styles */
:root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --red: #e11d48;
    --green: #16a34a;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --text-muted: #9ca3af;
    --border-color: #e5e7eb;
    --bg-light: #f9fafb;
    --white: #ffffff;
    --navy-900: #0f172a;
    --teal-400: #2dd4bf;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text-dark);
    line-height: 1.5;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  /* Header and Navigation */
  .header {
    border-bottom: 1px solid var(--border-color);
    padding: 1rem 0;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
  }
  
  .nav-link {
    color: var(--text-dark);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
  }
  
  .nav-link:hover {
    color: var(--primary);
  }
  
  .nav-options {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .language-selector select,
  .currency-selector select {
    border: none;
    background: transparent;
    font-size: 0.875rem;
    color: var(--text-dark);
    cursor: pointer;
  }
  
  .cart-icon {
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: var(--red);
    color: var(--white);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
  }
  
  /* Product Section */
  .product-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 2rem 0;
  }
  
  @media (min-width: 768px) {
    .product-section {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  /* Product Gallery */
  .main-image {
    border: 2px solid var(--red);
    border-radius: 0.375rem;
    overflow: hidden;
    margin-bottom: 0.75rem;
  }
  
  .main-image img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .thumbnail-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }
  
  .thumbnail {
    border: 1px solid var(--border-color);
    border-radius: 0.375rem;
    overflow: hidden;
    cursor: pointer;
  }
  
  .thumbnail.active {
    border-color: var(--primary);
  }
  
  .thumbnail img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Product Details */
  .product-details {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  
  .product-tags {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .bestseller-tag {
    display: inline-block;
    background-color: var(--red);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  
  .rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .stars {
    display: flex;
    gap: 0.125rem;
  }
  
  .rating-count {
    font-size: 0.875rem;
    color: var(--text-light);
  }
  
  .product-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--navy-900);
  }
  
  .testimonial {
    background-color: var(--bg-light);
    padding: 1rem;
    border-radius: 0.375rem;
  }
  
  .testimonial p {
    font-style: italic;
    font-size: 0.875rem;
    color: var(--text-light);
  }
  
  .product-features {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .product-price {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .compare-price {
    font-size: 1.125rem;
    color: var(--text-light);
    text-decoration: line-through;
  }
  
  .selling-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--red);
  }
  
  .add-to-cart-section {
    display: flex;
    gap: 1rem;
  }
  
  .quantity-selector {
    display: flex;
    align-items: center;
    border: 1px solid var(--border-color);
    border-radius: 0.375rem;
    overflow: hidden;
  }
  
  .quantity-btn {
    border: none;
    background: none;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .quantity-btn:first-child {
    border-right: 1px solid var(--border-color);
  }
  
  .quantity-btn:last-child {
    border-left: 1px solid var(--border-color);
  }
  
  .quantity-selector span {
    width: 2.5rem;
    text-align: center;
  }
  
  .add-to-cart-btn {
    flex: 1;
    background-color: var(--green);
    color: var(--white);
    font-weight: 600;
    padding: 0 2rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .add-to-cart-btn:hover {
    background-color: #15803d;
  }
  
  .payment-methods {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding-top: 0.5rem;
  }
  
  .payment-methods img {
    height: 1.5rem;
    width: auto;
  }
  
  .shipping-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: var(--text-light);
  }
  
  .info-item {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  /* Technical Specs Section */
  .specs-section {
    background-color: var(--navy-900);
    color: var(--white);
    padding: 4rem 0;
  }
  
  .specs-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  @media (min-width: 768px) {
    .specs-content {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
  
  .specs-text h2 {
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .specs-text p {
    color: #94a3b8;
    margin-bottom: 1.5rem;
  }
  
  .specs-features {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .specs-feature {
    display: flex;
    gap: 0.75rem;
  }
  
  .feature-number {
    background-color: var(--teal-400);
    color: var(--white);
    font-weight: 700;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .highlight {
    color: var(--teal-400);
    font-weight: 500;
  }
  
  .specs-image {
    position: relative;
    text-align: center;
  }
  
  .specs-image img {
    max-width: 100%;
    height: auto;
  }
  
  .spec-badge {
    position: absolute;
    background-color: var(--green);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
  }
  
  .spec-badge-1 {
    top: 33%;
    right: 33%;
  }
  
  .spec-badge-2 {
    bottom: 33%;
    right: 33%;
  }
  
  /* Cart Drawer */
  .cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .cart-drawer {
    position: fixed;
    top: 0;
    right: -400px;
    width: 100%;
    max-width: 400px;
    height: 100%;
    background-color: var(--white);
    z-index: 1000;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .cart-drawer.active {
    right: 0;
  }
  
  .cart-overlay.active {
    opacity: 1;
    visibility: visible;
  }
  
  .cart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
  }
  
  .cart-header h3 {
    font-weight: 600;
  }
  
  .cart-header button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .cart-items {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .cart-item {
    display: grid;
    grid-template-columns: 80px 1fr auto;
    gap: 1rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }
  
  .cart-item-image {
    border: 1px solid var(--border-color);
    border-radius: 0.375rem;
    overflow: hidden;
  }
  
  .cart-item-image img {
    display: block;
    width: 100%;
    height: auto;
  }
  
  .cart-item-info h4 {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .cart-item-price {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .cart-item-actions {
    display: flex;
    align-items: center;
  }
  
  .cart-quantity-selector {
    display: flex;
    align-items: center;
    border: 1px solid var(--border-color);
    border-radius: 0.375rem;
    overflow: hidden;
    margin-right: 0.5rem;
  }
  
  .cart-quantity-btn {
    border: none;
    background: none;
    width: 1.75rem;
    height: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .cart-quantity-btn:first-child {
    border-right: 1px solid var(--border-color);
  }
  
  .cart-quantity-btn:last-child {
    border-left: 1px solid var(--border-color);
  }
  
  .cart-quantity-selector span {
    width: 1.75rem;
    text-align: center;
    font-size: 0.875rem;
  }
  
  .cart-item-remove {
    border: none;
    background: none;
    color: var(--text-muted);
    cursor: pointer;
  }
  
  .cart-footer {
    border-top: 1px solid var(--border-color);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .cart-subtotal {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }
  
  .checkout-btn {
    background-color: var(--primary);
    color: var(--white);
    font-weight: 600;
    padding: 0.75rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .checkout-btn:hover {
    background-color: var(--primary-dark);
  }
  
  .continue-shopping {
    text-align: center;
    color: var(--text-dark);
    text-decoration: none;
    font-size: 0.875rem;
  }
  
  .empty-cart-message {
    text-align: center;
    padding: 2rem 0;
    color: var(--text-light);
  }
  
  @media (max-width: 767px) {
    .nav-links {
      gap: 1rem;
    }
    
    .product-title {
      font-size: 1.5rem;
    }
    
    .specs-section {
      padding: 2rem 0;
    }
    
    .cart-drawer {
      max-width: 320px;
    }
  }
  

  </style>
</head>
<body>
  <header class="header">
    <nav class="navbar container">
      <div class="nav-links">
        <a href="#" class="nav-link">Shop</a>
        <a href="#" class="nav-link">Our Story</a>
        <a href="#" class="nav-link">Science</a>
        <a href="#" class="nav-link">Results</a>
      </div>
      <div class="nav-options">
        <div class="language-selector">
          <select>
            <option selected>ENG</option>
            <option>FRA</option>
            <option>ESP</option>
          </select>
        </div>
        <div class="currency-selector">
          <select>
            <option selected>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
        </div>
        <button class="cart-icon" id="cart-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="cart-count" id="cart-count">0</span>
        </button>
      </div>
    </nav>
  </header>

  <main>
    <section class="product-section container">
      <div class="product-gallery">
        <div class="main-image">
          <img src="images.jpg" alt="Helio Pet Device" id="main-product-image">
        </div>
        <div class="thumbnail-gallery">
          <div class="thumbnail active">
            <img src="images.jpg" alt="Helio Pet Device Thumbnail 1">
          </div>
          <div class="thumbnail">
            <img src="images.jpg" alt="Helio Pet Device Thumbnail 2">
          </div>
          <div class="thumbnail">
            <img src="images.jpg" alt="Helio Pet Device Thumbnail 3">
          </div>
          <div class="thumbnail">
            <img src="images.jpg" alt="Helio Pet Device Thumbnail 4">
          </div>
        </div>
      </div>

      <div class="product-details">
        <div class="product-tags">
          <span class="bestseller-tag">BEST SELLER</span>
          <div class="rating">
            <div class="stars">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#f7c848" stroke="#f7c848" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#f7c848" stroke="#f7c848" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#f7c848" stroke="#f7c848" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#f7c848" stroke="#f7c848" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#f7c848" stroke="#f7c848" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="rating-count">4.9 (128 reviews)</span>
          </div>
        </div>
        
        <h1 class="product-title">Helio Pet Device™</h1>
        
        <div class="testimonial">
          <p>"We are BOTH so THANKFUL! I purchased this for my 12 year old retriever as he's got mobility issues with his joints. After just a week of treatment, he's moving so much better."</p>
        </div>
        
        <div class="product-features">
          <div class="feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Reduce aches & pains with 5-minute sessions</span>
          </div>
          <div class="feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Cold Laser Therapy helps with Pain, Inflammation & more</span>
          </div>
          <div class="feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Professional-Grade LLLT with 3 Laser Diodes</span>
          </div>
        </div>
        
        <div class="product-price">
          <span class="compare-price" id="compare-price">$369.00</span>
          <span class="selling-price" id="selling-price">$249.00</span>
        </div>
        
        <div class="add-to-cart-section">
          <div class="quantity-selector">
            <button id="decrease-quantity" class="quantity-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <span id="quantity">1</span>
            <button id="increase-quantity" class="quantity-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <button id="add-to-cart" class="add-to-cart-btn">Add to Cart</button>
        </div>
        
        <div class="payment-methods">
          <img src="https://cdn.shopify.com/s/files/1/0266/2124/9283/files/visa.svg" alt="Visa">
          <img src="https://cdn.shopify.com/s/files/1/0266/2124/9283/files/mastercard.svg" alt="Mastercard">
          <img src="https://cdn.shopify.com/s/files/1/0266/2124/9283/files/amex.svg" alt="American Express">
          <img src="https://cdn.shopify.com/s/files/1/0266/2124/9283/files/paypal.svg" alt="PayPal">
          <img src="https://cdn.shopify.com/s/files/1/0266/2124/9283/files/apple.svg" alt="Apple Pay">
        </div>
        
        <div class="shipping-info">
          <div class="info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>30 day money back guarantee</span>
          </div>
          <div class="info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Expected delivery in 2-4 business days</span>
          </div>
        </div>
      </div>
    </section>

    <section class="specs-section">
      <div class="container">
        <div class="specs-content">
          <div class="specs-text">
            <h2>Professional Grade,<br>Patented Design.</h2>
            <p>It's important to have a <strong>strong enough output power of 1-10 Joules per cm²</strong> with correct wavelengths (660nm + 850nm).</p>
            
            <div class="specs-features">
              <div class="specs-feature">
                <div class="feature-number">1</div>
                <p>The treatment head is 340% bigger so it can finish a treatment in <span class="highlight">3 minutes</span>, vs 10-20 minutes.</p>
              </div>
              <div class="specs-feature">
                <div class="feature-number">2</div>
                <p>Has <span class="highlight">3 Modes of Power</span> to accommodate to any area. It also uses wavelengths 660nm and 850nm.</p>
              </div>
            </div>
          </div>
          
          <div class="specs-image">
            <img src="images.jpg" alt="Helio Pet Device Technical Specifications">
            <div class="spec-badge spec-badge-1">800% More Power</div>
            <div class="spec-badge spec-badge-2">3 Minutes</div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Cart Drawer -->
  <div class="cart-drawer" id="cart-drawer">
    <div class="cart-header">
      <h3>Your Cart</h3>
      <button id="close-cart">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    
    <div class="cart-items" id="cart-items">
      <!-- Cart items will be dynamically inserted here -->
    </div>
    
    <div class="cart-footer">
      <div class="cart-subtotal">
        <span>Subtotal:</span>
        <span id="cart-subtotal">$0.00</span>
      </div>
      <button class="checkout-btn">Proceed to Checkout</button>
      <a href="#" class="continue-shopping" id="continue-shopping">Continue Shopping</a>
    </div>
  </div>
  <div class="cart-overlay" id="cart-overlay"></div>

  <script src="script.js"></script>
</body>
</html>
