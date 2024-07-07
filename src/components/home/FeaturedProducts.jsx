import React, { useEffect, useState } from 'react';
import ProtectedImage from '../ProtectedImage';
import { supabase } from '../../lib/helper/supabaseClient';
import LoadingImage from '../LoadingImage';

export default function FeaturedProducts(props) {
    


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
            .eq('is_featured', true); // Filter users where is_active is false

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
            <div className="bg-white container mx-auto">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {props?.subtitle ? <h2 className="text-2xl tracking-tight text-gray-900">{props?.subtitle}</h2> : <h2 className="text-2xl font-light tracking-tight text-gray-900">Featured Products</h2>}

                    {isLoading ? (
                        <>
                        <LoadingImage />
                        </>
                    ) : (
                        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                            {featuredImages.map((image, index) => (
                                <ProtectedImage key={index} imageData={image}/>
                            ))}
                        </div>
                    )}
                    
                    
                </div>
            </div>
        </>
    )
}
