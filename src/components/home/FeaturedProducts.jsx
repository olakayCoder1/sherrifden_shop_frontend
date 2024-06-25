import React from 'react'
import ProtectedImage from '../ProtectedImage';
import olakay from '../../assets/images/kkk.webp'
import olakay1 from '../../assets/images/cart1.webp'
import olakay2 from '../../assets/images/cart2.webp'
import olakay3 from '../../assets/images/cart3.webp'

export default function FeaturedProducts(props) {
    
    const imageUrls = [
        olakay3,olakay1,olakay2,olakay,
    ];
      
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    {props?.subtitle ? <h2 className="text-2xl tracking-tight text-gray-900">{props?.subtitle}</h2> : <h2 className="text-2xl font-light tracking-tight text-gray-900">Featured Products</h2>
                    }
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
