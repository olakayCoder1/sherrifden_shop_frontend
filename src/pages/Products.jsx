import React, { useEffect, useState } from 'react'
import ProtectedImage from '../components/ProtectedImage'
import { supabase } from '../lib/helper/supabaseClient'
import LoadingImage from '../components/LoadingImage';

export default function Products(props) {


    const [featuredImages, setFeaturedImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        FeaturedImages();
    }, []);

    async function FeaturedImages() {
        try {
        const { data, error } = await supabase
            .from('images')
            .select('*')
            // .eq('is_featured', true); // Filter users where is_active is false

        if (error) {
            throw error;
        }


        setFeaturedImages(data || []);
        setIsLoading(false)
        } catch (error) {
            console.error('Error fetching users:', error.message);
        }
    }

      
    return (
        <>
            <div className="mx-auto max-w-5xl">
                <h2 className="text-2xl font-light tracking-tight text-gray-900 py-8 px-4">All Products</h2>
                <div>

                </div>
                {/* <div className="flex items-center justify-center py-4 flex-wrap">
                    <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-0 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200  bg-white focus:ring-0 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ">Men</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200  bg-white focus:ring-0 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ">Women</button>
                </div> */}


                <div className="px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-0">
                    {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
                    {isLoading ? (
                        <>
                        <LoadingImage />
                        </>
                    ) : (
                        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                            {featuredImages.map((image, index) => (
                                <ProtectedImage key={index} src={image?.image_url} index={index} alt={image?.title} imageTitle={image?.title} identifier={image?.id}/>
                            ))}
                        </div>
                    )}
                </div>
                
            </div>
        </>
    )
}
