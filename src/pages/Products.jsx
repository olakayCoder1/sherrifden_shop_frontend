import React from 'react'
import olakay from '../assets/images/kkk.webp'
import olakay1 from '../assets/images/cart1.webp'
import olakay2 from '../assets/images/cart2.webp'
import olakay3 from '../assets/images/cart3.webp'
import ProtectedImage from '../components/ProtectedImage';

export default function Products(props) {
    

    const imageUrls = [
        olakay3,olakay1,olakay2,olakay,
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" ,
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" ,
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
    ];
      
    return (
        <>
            <div className="mx-auto max-w-5xl">
                <h2 className="text-2xl font-light tracking-tight text-gray-900 py-8 px-4">Products</h2>
                <div>

                </div>
                <div class="flex items-center justify-center py-4 flex-wrap">
                    <button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-0 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
                    <button type="button" class="text-gray-900 border border-white hover:border-gray-200  bg-white focus:ring-0 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ">Men</button>
                    <button type="button" class="text-gray-900 border border-white hover:border-gray-200  bg-white focus:ring-0 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ">Women</button>
                </div>


                <div className="px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-0">
                    {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
                    <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                    {imageUrls.map((url, index) => (
                        <ProtectedImage key={index} src={url} index={index} alt={`Image ${index + 1}`} />
                    ))}
                    </div>
                </div>
                
            </div>
        </>
    )
}
