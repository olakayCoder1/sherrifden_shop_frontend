import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import { useLocation } from 'react-router-dom';
import MobileLink from './MobileLink';


export default function Header(props) {
    
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [showDropDown, setShowDropDown] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <>
            <nav className=" bg-white antialiased border-b-1">
                <div className=" max-w-5xl mx-auto px-4  2xl:px-0 p-4">
                {/* <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 p-4"> */}
                    <div className="flex items-center justify-between">

                    <div className="flex items-center space-x-8">
                        <div className="shrink-0">
                        <a href="/" title="" className="">
                            <img className="block w-auto h-8 dark:hidden" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJKyF1sBkjXKk75_vloLXaqQ3ZbQ22kP32PKvirSgTmPvdEn1K2ajf4voBuSLJNGpG_A&usqp=CAU" alt="" />
                            <img className="hidden w-auto h-8 dark:block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJKyF1sBkjXKk75_vloLXaqQ3ZbQ22kP32PKvirSgTmPvdEn1K2ajf4voBuSLJNGpG_A&usqp=CAU" alt="" />
                        </a>
                        </div>

                        <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                        <li>
                            <NavLink toPath="/" pathName="Home" isActive={activeLink === '/'}/>
                        </li>
                        <li className="shrink-0">
                            <NavLink toPath="/products" pathName="Products" isActive={activeLink === '/products'}/>
                        </li>
                        <li className="shrink-0">
                            <NavLink toPath="#" pathName="Contact" isActive={activeLink === '#'}/>
                        </li>
                        </ul>
                    </div>

                    <div className="flex items-center lg:space-x-2">

                        <div id="userDropdown1" className="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
                        </div>

                        <button onClick={()=> setShowDropDown(!showDropDown)} type="button" className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white">
                        <span className="sr-only">
                            Open Menu
                        </span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                        </svg>                
                        </button>
                    </div>
                    </div>
                    
                    {showDropDown && (
                        <div id="ecommerce-navbar-menu-1" className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 px-4 mt-4">
                            <ul className="text-gray-900  text-sm font-medium dark:text-white space-y-3">
                                <MobileLink toPath="/" pathName="Home" isActive={activeLink === '/'} />
                                <MobileLink toPath="/products" pathName="Products" isActive={activeLink === '/products'} />
                                <MobileLink toPath="/#" pathName="Contact" isActive={activeLink === '#'} />
                            </ul>
                        </div>
                    )
                    }
                    
                </div>
            </nav>
        </>
    )
}
