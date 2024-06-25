import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NewPortrait from './NewPortrait';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="">
      {/* <main className="container mx-auto p-4"> */}
        {children}
      </div>
      <NewPortrait />
      
      <Footer />
    </>
  );
};

export default Layout;
