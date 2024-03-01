import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div className="border border-gray-300 rounded p-4 mb-4">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full mb-2" />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700">${product.price}</p>
      </Link>
    </div>
  );
}

export default Product;
