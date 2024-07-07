import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import ProtectedImage from '../ProtectedImage';
import { supabase } from '../../lib/helper/supabaseClient';
import LoadingImage from '../LoadingImage';

export default function LatestProducts(props) {
    let navigate = useNavigate()
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
        
        // Shuffle the data array to get random entries
        const shuffledData = shuffleArray(data || []);

        const randomFeaturedImages = shuffledData.slice(0, 4);


        setFeaturedImages(randomFeaturedImages || []);
        setIsLoading(false)
        } catch (error) {
            console.error('Error fetching users:', error.message);
        }
    }



    // Function to shuffle an array (Fisher-Yates shuffle algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


      
    return (
        <>
            <div className="container mx-auto">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl tracking-tight text-gray-900">Customers also purchased</h2>
                    {isLoading ? (
                        <>
                        <LoadingImage />
                        </>
                    ) : (
                        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                            {featuredImages.map((image, index) => (
                                <ProtectedImage 
                                    key={index} 
                                    imageData={image}
                                />
                            ))}
                        </div>
                    )}
                    <div className=' text-center py-16'>
                        <button onClick={()=> navigate('/products')} className='px-6 py-2 border bg-blue-700 text-white'>VIEW ALL</button>
                    </div>
                </div>
            </div>
        </>
    )
}
