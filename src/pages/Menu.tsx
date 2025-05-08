import React, { useEffect } from 'react';
import { useMenuStore } from '../shared/store/menuStore';
import './Menu.css';

export const Menu = () => {
  const { categories, isLoading, error, fetchMenu } = useMenuStore();

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  if (isLoading) {
    return <div>Loading menu...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(categories)) {
    return <div>No menu data available</div>;
  }

  if (categories.length === 0) {
    return <div>No menu items found</div>;
  }

  return (
    <div className="menu-container">
      {categories.map((category) => (
        <div key={category.id} className="category">
          <h2>{category.name}</h2>
          <p>{category.description}</p>
          <div className="items-grid">
            {category.items.map((item) => (
              <div key={item.id} className="menu-item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">${item.price.toFixed(2)}</p>
                <span className="temperature">
                  {item.isColdCoffee ? 'Cold' : 'Hot'}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}; 