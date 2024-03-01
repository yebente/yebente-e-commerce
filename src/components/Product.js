import React from 'react';
import { Link } from 'react-router-dom';

function Product({ id, name, price, image }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link to={`/product/${id}`}>
        <img className="w-full" src={image} alt={name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Product;
