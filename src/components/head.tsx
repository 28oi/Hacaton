import React from 'react';
import '../components/headcss.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Банк Центр Инвест</div>
      <nav className="nav">
        <ul>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
      <button className="custom-button">Подать заявку</button>
    </header>
  );
};

export default Header;
