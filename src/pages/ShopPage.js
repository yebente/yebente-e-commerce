import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

function ShopPage() {
  // Mock data for products (replace with actual data from your backend)
  const [products, setProducts] = useState([]);

  // Fetch products from backend or API on component mount
  useEffect(() => {
    // Fetch products from backend or API and update state
    // Example:
    // fetch('api/products')
    //   .then(response => response.json())
    //   .then(data => setProducts(data))
    //   .catch(error => console.error('Error fetching products:', error));
    // For now, let's use mock data:
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
      { id: 2, name: 'Product 2', price: 24.99, image: 'product2.jpg' },
      // Add more mock products as needed
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shop</h2>
      <ProductList products={products} />
    </div>
  );
}

export default ShopPage;
