import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Yebente</h1>
        <nav>
          <ul className="flex">
            <li className="mr-4"><Link to="/" className="text-white">Home</Link></li>
            <li className="mr-4"><Link to="/shop" className="text-white">Shop</Link></li>
            <li><Link to="/sell" className="text-white">Sell</Link></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
