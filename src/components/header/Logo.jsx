import React from 'react';
import logoImage from '../../assets/img/icon/logo1.png';
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
    <img src={logoImage} alt="Logo" />
   
  </div>
  );
};

export default Logo;
