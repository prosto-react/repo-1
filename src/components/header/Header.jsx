import React from 'react';
import Logo from './Logo';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <Logo />
      <nav>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
        <a href="/settings">Settings</a>
      </nav>  
      </div>
    </header>
  );
};

export default Header;
