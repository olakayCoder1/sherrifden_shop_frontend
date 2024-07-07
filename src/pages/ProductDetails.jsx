import React from 'react'
import ProductInfo from '../components/products/ProductInfo'
import FeaturedProducts from '../components/home/FeaturedProducts'
import {useParams } from 'react-router-dom';

export default function ProductDetails(props) {


    const { id } = useParams();
    

    return (
        <div className='mx-auto max-w-5xl'>
            <ProductInfo productId={id} />
            <FeaturedProducts subtitle="You may also like"/>
        </div>
    )
}
