import React from 'react';
import './footercss.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Частным лицам</h3>
        <ul>
          <li><a href="https://www.centrinvest.ru/business">Кредитование</a></li>
          <li><a href="#">Ипотека</a></li>
          <li><a href="#">Рефинансирование</a></li>
          <li><a href="#">Вклады</a></li>
          <li><a href="#">Карты</a></li>
          <li><a href="#">VIP-обслуживание</a></li>
          <li><a href="#">Сервис Интернет-Банк</a></li>
          <li><a href="#">Мобильный банк</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Бизнесу</h3>
        <ul>
          <li><a href="#">Открытие и ведение счета</a></li>
          <li><a href="#">Кредитование</a></li>
          <li><a href="#">Эквайринг</a></li>
          <li><a href="#">Прием платежей</a></li>
          <li><a href="#">Зарплатные проекты</a></li>
          <li><a href="#">Депозиты</a></li>
          <li><a href="#">Самозанятым</a></li>
          <li><a href="#">Банковские гарантии</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>О банке</h3>
        <ul>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Акционерам и инвесторам</a></li>
          <li><a href="#">Офисы и банкоматы</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Социальные проекты</h3>
        <ul>
          <li><a href="#">Медицинским работникам</a></li>
          <li><a href="#">Студентам</a></li>
          <li><a href="#">Пенсионерам</a></li>
          <li><a href="#">Финансовая грамотность</a></li>
          <li><a href="#">Карьера</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>ECO</h3>
        <ul>
          <li><a href="#">Зелёный вклад</a></li>
          <li><a href="#">Зелёная ипотека</a></li>
          <li><a href="#">Зелёный вектор</a></li>
          <li><a href="#">Социальный вклад банка</a></li>
          <li><a href="#">ESG-библиотека</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Следить за нами</h3>
        <ul>
          <li><a href="#">vk</a></li>
          <li><a href="#">classmates</a></li>
          <li><a href="#">youtube</a></li>
          <li><a href="#">telegram Для частных лиц</a></li>
          <li><a href="#">telegram-business Центр-инвест. Бизнес</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Связаться с нами</h3>
        <ul>
          <li><a href="#">feedback</a></li>
          <li><a href="#">telegram</a></li>
          <li><a href="#">whatsapp</a></li>
          <li><a href="#">vk</a></li>
          <li><a href="#">classmates</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Онлайн-сервисы</h3>
        <ul>
          <li><a href="#">App Store</a></li>
          <li><a href="#">Play Market</a></li>
          <li><a href="#">Nashstore</a></li>
          <li><a href="#">rustore</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
