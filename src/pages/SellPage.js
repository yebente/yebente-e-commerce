import React, { useState } from 'react';

function SellPage() {
  // State variables to store form data
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data (e.g., send to backend)
    console.log('Form submitted:', {
      productName,
      productPrice,
      productDescription,
      productImage
    });
    // Reset form fields
    setProductName('');
    setProductPrice('');
    setProductDescription('');
    setProductImage('');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Sell</h2>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
          <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">Price</label>
          <input type="number" id="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="productDescription" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" rows="4" required></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input type="text" id="productImage" value={productImage} onChange={(e) => setProductImage(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">List Product</button>
      </form>
    </div>
  );
}

export default SellPage;
