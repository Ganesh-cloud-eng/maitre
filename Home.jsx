import './Home.css';
import { useState } from 'react';

const Home = () => {
  const items = [
    { id: 1, name: 'HumBurger', price: 99, image: 'https://github.com/punitdiwan/codeing-challenge/blob/main/assets/burger.jpeg?raw=true' },
    { id: 2, name: 'Fries', price: 149, image: 'https://github.com/punitdiwan/codeing-challenge/blob/main/assets/fries.jpeg?raw=true' },
    { id: 3, name: 'Coke', price: 129, image: 'https://github.com/punitdiwan/codeing-challenge/blob/main/assets/coke.jpeg?raw=true' },
    { id: 4, name: 'Pepsi', price: 79, image: 'https://github.com/punitdiwan/codeing-challenge/blob/main/assets/pepsi.jpeg?raw=true' },
  ];

  const [cart, setCart] = useState({});

  const increase = (id) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrease = (id) => {
    setCart(prev => {
      const updated = { ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) };
      return updated;
    });
  };

  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome to Food's Kitchen</h1>
        <button className="menu-button">Go to Menu</button>
      </div>

      <div className="card-container">
        {items.map(item => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="card-img" />
            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>
            <div className="qty-controls">
              <button className="btn minus" onClick={() => decrease(item.id)}>-</button>
              <span>{cart[item.id] || 0}</span>
              <button className="btn plus" onClick={() => increase(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
