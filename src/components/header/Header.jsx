import React from 'react';
import Logo from './Logo';
import './Header.css';  // Предполагается, что стили будут вынесены в отдельный файл

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav>
        {/* Добавь сюда элементы навигации */}
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
        <a href="/settings">Settings</a>
      </nav>
    </header>
  );
};

export default Header;
