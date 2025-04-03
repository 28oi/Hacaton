import React, { useState } from "react";
import "./FloatingMenu.css";
import vk from "../photo/vk.png"
import tg from "../photo/telegram.png"
import sms from "../photo/sms.png"
import wt from "../photo/whatsapp.png"


const FloatingMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-menu">
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="menu-item">
          <img src={tg} alt="Telegram" />
        </a>
        <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="menu-item">
          <img src={vk} alt="VK" />
        </a>
        <a href="https://ok.ru/" target="_blank" rel="noopener noreferrer" className="menu-item">
          <img src={wt} alt="OK" />
        </a>
      </div>

      <button className="main-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={sms} alt="Menu" />
      </button>
    </div>
  );
};

export default FloatingMenu;
