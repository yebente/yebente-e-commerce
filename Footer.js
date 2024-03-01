import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <div className="container mx-auto">
        <p className="mb-2">&copy; 2024 Yebente. All rights reserved.</p>
        <nav>
          <ul className="flex justify-center">
            <li className="mx-4"><Link to="/" className="text-white">Home</Link></li>
            <li className="mx-4"><Link to="/shop" className="text-white">Shop</Link></li>
            <li className="mx-4"><Link to="/sell" className="text-white">Sell</Link></li>
            <li className="mx-4"><Link to="/login" className="text-white">Login</Link></li>
            <li className="mx-4"><Link to="/signup" className="text-white">Signup</Link></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
