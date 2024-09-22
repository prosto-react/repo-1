import React from 'react';
import Header from '../../header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '60px' }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
