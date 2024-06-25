import React from 'react'
import { useNavigate} from 'react-router-dom';
import ProtectedImage from '../ProtectedImage';

export default function LatestProducts(props) {
    let navigate = useNavigate()
    const imageUrls = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" ,
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    ];
      
    return (
        <>
            <div className="container mx-auto">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
                    <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                    {imageUrls.map((url, index) => (
                        <ProtectedImage key={index} src={url} index={index} alt={`Image ${index + 1}`} />
                    ))}
                    </div>
                    <div className=' text-center py-16'>
                        <button onClick={()=> navigate('/products')} className='px-6 py-2 border bg-blue-700 text-white'>VIEW ALL</button>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}
