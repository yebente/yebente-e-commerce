import React, { useState } from 'react';

function CartPage() {
  // Dummy cart data for demonstration
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 24.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 14.99, quantity: 3 }
  ]);

  // Function to calculate total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
            <div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-xl font-bold">Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
}

export default CartPage;
