import React from 'react';
import './footercss.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Частным лицам</h3>
        <ul>
          <li><a href="https://www.centrinvest.ru/for-individuals/crediting">Кредитование</a></li>
          <li><a href="https://www.centrinvest.ru/for-individuals/mortgage">Ипотека</a></li>
          <li><a href="https://www.centrinvest.ru/for-individuals/refinancing">Рефинансирование</a></li>
          <li><a href="https://www.centrinvest.ru/for-individuals/deposits">Вклады</a></li>
          <li><a href="https://www.centrinvest.ru/for-individuals/cards/debet-cards">Карты</a></li>
          <li><a href="https://www.centrinvest.ru/for-individuals/vip-service">VIP-обслуживание</a></li>
          <li><a href="https://www.centrinvest.ru/for-individuals/internet-bank-service">Сервис Интернет-Банк</a></li>
          <li><a href="https://www.centrinvest.ru/for-individuals/mobile-bank">Мобильный банк</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Бизнесу</h3>
        <ul>
          <li><a href="https://www.centrinvest.ru/about/contacts">Открытие и ведение счета</a></li>
          <li><a href="https://www.centrinvest.ru/business/business-crediting">Кредитование</a></li>
          <li><a href="https://www.centrinvest.ru/business/acquiring">Эквайринг</a></li>
          <li><a href="https://www.centrinvest.ru/business/acquiring">Прием платежей</a></li>
          <li><a href="https://www.centrinvest.ru/business/salary-projects">Зарплатные проекты</a></li>
          <li><a href="https://www.centrinvest.ru/business/placement-of-funds-and-securities">Депозиты</a></li>
          <li><a href="https://www.centrinvest.ru/business/self-employed">Самозанятым</a></li>
          <li><a href="https://www.centrinvest.ru/business/bank-guarantees">Банковские гарантии</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>О банке</h3>
        <ul>
          <li><a href="https://www.centrinvest.ru/about/contacts">Контакты</a></li>
          <li><a href="https://www.centrinvest.ru/about/investors">Акционерам и инвесторам</a></li>
          <li><a href="https://www.centrinvest.ru/about/offices-and-atms">Офисы и банкоматы</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Социальные проекты</h3>
        <ul>
          <li><a href="https://www.centrinvest.ru/social-projects/medical-professionals">Медицинским работникам</a></li>
          <li><a href="https://www.centrinvest.ru/for-individuals/cards/student-cards">Студентам</a></li>
          <li><a href="https://www.centrinvest.ru/for-individuals/cards/debet-cards/pens?form-type=FormNewCard&step-type=MainStep">Пенсионерам</a></li>
          <li><a href="https://знания-сила.рф/">Финансовая грамотность</a></li>
          <li><a href="https://www.centrinvest.ru/social-projects/career">Карьера</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>ECO</h3>
        <ul>
          <li><a href="https://www.centrinvest.ru/for-individuals/deposits/green">Зелёный вклад</a></li>
          <li><a href="https://www.centrinvest.ru/for-individuals/mortgage/green-mortgage">Зелёная ипотека</a></li>
          <li><a href="https://greenvector.media/">Зелёный вектор</a></li>
          <li><a href="https://www.centrinvest.ru/about#about-bank-social">Социальный вклад банка</a></li>
          <li><a href="https://www.centrinvest.ru/esg/esg-library">ESG-библиотека</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Следить за нами</h3>
        <ul>
          <li><a href="https://vk.com/centrinvest">vk</a></li>
          <li><a href="https://ok.ru/centrinvest.bank">ok</a></li>
          <li><a href="#">youtube</a></li>
          <li><a href="https://ok.ru/centrinvest.bank">telegram Для частных лиц</a></li>
          <li><a href="https://ok.ru/centrinvest.bank">telegram-business Центр-инвест. Бизнес</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Связаться с нами</h3>
        <ul>
          <li><a href="#">feedback</a></li>
          <li><a href="https://ok.ru/centrinvest.bank">telegram</a></li>
          <li><a href="#">whatsapp</a></li>
          <li><a href="https://vk.com/centrinvest">vk</a></li>
          <li><a href="https://ok.ru/centrinvest.bank">classmates</a></li>
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
