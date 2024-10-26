import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import BodyUpperPart from './components/Body/BodyUpperPart';
import BodyMiddlePart from './components/Body/BodyMiddlePart';

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <BodyUpperPart />
      <BodyMiddlePart />
      <Footer />
    </div>
  );
};

export default Layout;