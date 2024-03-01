import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  // Access the product ID from the URL params
  const { id } = useParams();

  // Mock data for product details (replace with actual data from your backend)
  const product = {
    id: id,
    name: 'Product Name',
    price: 19.99,
    description: 'Product Description',
    image: 'product.jpg',
    // Add more product details as needed
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto">
        <img src={product.image} alt={product.name} className="mb-4" />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-2">${product.price}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        {/* Add more product details here */}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
