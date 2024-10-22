import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      
      <main>{children}</main>
      
      <Footer />
    </div>
  );
};

export default Layout;