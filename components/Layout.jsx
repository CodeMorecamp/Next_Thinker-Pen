import React from 'react';
import Footer from './Footer';
import Header from './Header';
import AboutMe from './AboutMe';
const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <AboutMe />
    <Footer />
  </>
);

export default Layout;
