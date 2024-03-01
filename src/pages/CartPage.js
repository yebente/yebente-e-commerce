import React, { useState } from 'react';

function CartPage() {
  // Mock data for cart items (replace with actual data from your backend)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 24.99, quantity: 1 },
    // Add more cart items as needed
  ]);

  // Function to calculate total price of items in cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Function to remove item from cart
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b border-gray-300 py-2">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-bold">Total: ${calculateTotalPrice()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
