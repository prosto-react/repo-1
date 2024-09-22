import React from 'react';
import Header from '../header/Header';
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
 