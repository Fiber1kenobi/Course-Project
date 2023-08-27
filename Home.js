import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <img src="logo.webp" alt="Hunting Store Logo" className="logo" height="100px" width="200px" align="middle"/> 
        <h1>Welcome to the JC's Outdoors Store</h1>
        <p>Find the best hunting gear and accessories.</p>
      </div>
      <div className="products">
        <div className="product-card">
          <img src="hunting 1.png" alt="Product 1" />
          <h3>Sitka Core Hoody</h3>
          <p>ON SALE NOW!!</p>
          <span className="price">$99.99</span>
        </div>

        <h1>New Products</h1>
        
        <div className="image-container">
          <img src="picture2.png" alt="Image 1" />
          <img src="picture3.png" alt="Image 2" />
          <img src="picture4.png" alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
  


  

