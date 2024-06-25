import React from 'react'
import ProductInfo from '../components/products/ProductInfo'
import FeaturedProducts from '../components/home/FeaturedProducts'
import DownloadConfirm from '../components/DownloadConfirm'

export default function ProductDetails(props) {
    

    return (
        <div className='mx-auto max-w-5xl'>
            <ProductInfo />
            <DownloadConfirm />
            <FeaturedProducts subtitle="You may also like"/>
        </div>
    )
}
