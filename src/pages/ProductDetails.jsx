import React from 'react'
import ProductInfo from '../components/products/ProductInfo'
import FeaturedProducts from '../components/home/FeaturedProducts'

export default function ProductDetails(props) {
    

    return (
        <div className='mx-auto max-w-5xl'>
            <ProductInfo />
            <FeaturedProducts subtitle="You may also like"/>
        </div>
    )
}
