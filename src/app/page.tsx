import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import BodyUpperPart from './components/Body/BodyUpperPart';
import BodySecondUpperPart from './components/Body/BodySecondUpperPart';
import BodyMiddlePart from './components/Body/BodyMiddlePart';
import BodyBottomPart from './components/Body/BodyBottomPart';

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <BodyUpperPart />
      <BodySecondUpperPart />
      <BodyMiddlePart />
      
      <BodyBottomPart />
      <Footer />
    </div>
  );
};

export default Layout;