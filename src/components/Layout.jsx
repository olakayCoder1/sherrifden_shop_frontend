import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { GiNotebook } from 'react-icons/gi';
import CustomPortraitModal from './modal/CustomPortraitModal';

const Layout = ({ children }) => {

  const [showCustomPortraitdModal, setCustomPortraitdModal] = useState(false)

  return (
    <>
      <Header />
      <div className="">
      {/* <main className="container mx-auto p-4"> */}
        {children}
      </div>
        <>
          <button onClick={() => setCustomPortraitdModal(true)}
            className='md:flex items-center p-3 py-2 text-sm font-normal gap-2 rounded-full fixed bottom-12 right-12 cursor-pointer bg-blue-700 text-white z-50'>
            <GiNotebook className='hidden md:block w-6 h-6' /> 
            <span>Get Custom portrait</span>
          </button> 
          {showCustomPortraitdModal && <CustomPortraitModal setShowModal={setCustomPortraitdModal}/>}
        </>
      <Footer />
    </>
  );
};

export default Layout;
