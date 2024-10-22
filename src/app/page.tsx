import React from 'react';
import Footer from './components/Footer/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {/* Outros componentes globais, como o header */}
      
      <main>{children}</main>
      
      <Footer />
    </div>
  );
};

export default Layout;