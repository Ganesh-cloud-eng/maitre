import React, { useState } from 'react';
import './Cart.css';

const sampleItems = [
  { id: 1, name: 'HumBurger', price: 99 },
  { id: 2, name: 'Fries', price: 149 },
  { id: 3, name: 'Coke', price: 129 },
  { id: 4, name: 'Pepsi', price: 200 },
];

const Cart = () => {
  const [cart, setCart] = useState({
    1: 2,
    2: 1,
  });

  const increase = (id) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrease = (id) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const removeItem = (id) => {
    const updated = { ...cart };
    delete updated[id];
    setCart(updated);
  };

  const totalAmount = Object.keys(cart).reduce((total, itemId) => {
    const item = sampleItems.find(i => i.id === parseInt(itemId));
    return total + (item.price * cart[itemId]);
  }, 0);

  return (
    <div className="cart">
      <h2>🛒 Order Summary</h2>

      {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-box">
          {Object.entries(cart).map(([id, qty]) => {
            const item = sampleItems.find(i => i.id === parseInt(id));
            return (
              <div key={id} className="cart-item-line">
                <span><strong>{item.name}</strong></span>
                {/* <span>Price: ₹{item.price}</span> */}
                <span>Qty: {qty}</span>
                <button className="btn plus" onClick={() => increase(id)}>+</button>
                <button className="btn minus" onClick={() => decrease(id)}>-</button>
                {/* <button className="btn remove" onClick={() => removeItem(id)}>❌</button> */}
                {/* <span>Total: ₹{item.price * qty}</span> */}
              </div>
            );
          })}

          <h3 className="total-amount">Total (INR): ₹{totalAmount}</h3>

          <div className="cart-actions">
            <button className="btn save"> Save&Checkout</button>
            {/* <button className="btn checkout">✅ Checkout</button> */}
            <button className="btn cancel"> Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
