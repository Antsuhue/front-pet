import React from 'react';
import "../css/Menu.css"

const Menu = ({ items }) => {
  return (
    <ul className="menu">
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;