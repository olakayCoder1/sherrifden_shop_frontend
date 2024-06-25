import React from 'react'
import Hero from '../components/home/Hero'
import LatestProducts from '../components/home/LatestProducts'
import FeaturedProducts from '../components/home/FeaturedProducts'

export default function Home(props) {
    

    return (
        <>
            <Hero />
            <FeaturedProducts />
            <LatestProducts />
        </>
    )
}
