import React, { useEffect, useState } from 'react'
import { IoCloudDownloadOutline } from "react-icons/io5";
import ProtectedImageDetail from '../ProtectedImageDetail';
import DownloadImageModal from '../modal/DownloadImageModal';
import { supabase } from '../../lib/helper/supabaseClient';
import LoadingImage from '../LoadingImage';

export default function ProductInfo(props) {


    const [showDownLoadModal, setShowDownloadModal] = useState(false)

    const [product, setProduct] = useState(null);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const { data, error } = await supabase
                    .from('images')
                    .select('*')
                    .eq('id', props?.productId)
                    .single();

                if (error) {
                    throw error;
                }

                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error.message);
            }
        }

        if (props?.productId) {
            fetchProduct();
        }
    }, [props?.productId]);
    

    return (
        <>
            <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    {!product ? (
                        <LoadingImage />
                    ): (
                        <ProtectedImageDetail src={product?.image_url} alt={product?.title} />
                    )}
                    
                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        {!product ? (
                            <div role="status" class="max-w-sm animate-pulse">
                                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                <span class="sr-only">Loading...</span>
                            </div>
                        ): (
                            <>
                                <h1
                                    className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                                >
                                    {product?.title}
                                </h1>
                                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                    <p
                                    className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                                    >
                                    $1,249.99
                                    </p>

                                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                    <div className="flex items-center gap-1">
                                        <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        >
                                        <path
                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                        />
                                        </svg>
                                        <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        >
                                        <path
                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                        />
                                        </svg>
                                        <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        >
                                        <path
                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                        />
                                        </svg>
                                        <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        >
                                        <path
                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                        />
                                        </svg>
                                        <svg
                                        className="w-4 h-4 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        >
                                        <path
                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                        />
                                        </svg>
                                    </div>
                                        <p
                                            className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                                        >
                                            (5.0)
                                        </p>
                                        <a
                                            href="#"
                                            className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                                        >
                                            345 Reviews
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                    {/* <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                                        <IoCloudDownloadOutline className=' h-4 w-4'/>
                                        <span className='px-2'>
                                            Download Portrait
                                        </span>
                                    </button> */}
                                    <button  
                                        onClick={()=> setShowDownloadModal(true)}
                                    // className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button"
                                        href="#"
                                        title=""
                                        // data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                                        className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                    role="button"
                                    >

                                        <IoCloudDownloadOutline className=' h-4 w-4'/>
                                        <span className='px-2'>
                                            Download Portrait
                                        </span>
                                        
                                    </button>
                                    <a
                                        href="#"
                                        title=""
                                        className="flex items-center justify-center mt-4 sm:mt-0 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                                    role="button"
                                    >
                                        <IoCloudDownloadOutline className=' h-4 w-4'/>
                                        <span className='px-2'>
                                            Purchase Frame
                                        </span>
                                        
                                    </a>
                                </div>

                                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                                <p className="mb-6 text-gray-500 dark:text-gray-400">
                                    {product?.description}
                                </p>
                                    
                            </>
                        )}

                        



                        

                        {/* <p className="text-gray-500 dark:text-gray-400">
                            Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
                            Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
                            Magic Keyboard or Magic Keyboard with Touch ID.
                        </p> */}
                    </div>
                </div>
                </div>
            </section>

            {showDownLoadModal && <DownloadImageModal setShowModal={setShowDownloadModal}/> }
            
        </>
    )
}
