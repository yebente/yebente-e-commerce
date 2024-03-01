import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Yebente</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/sell">Sell</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
