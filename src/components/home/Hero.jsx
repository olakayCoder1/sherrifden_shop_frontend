import React from 'react'
import { useNavigate } from 'react-router-dom';
import olakay from '../../assets/images/kkk.webp'

export default function Hero(props) {
    
    let navigate = useNavigate()

    return (
        <>
            <div className='relative flex items-center justify-center h-screen bg-center bg-cover w-full' style={{ backgroundImage: `url(${olakay})`}}>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black/70 to-[rgba(45, 44, 44, 0.7)]" />
               
                <div className=' max-w-3xl p-5 text-white z-[2] mt-[-10rem] text-center'>
                    <h2 className='text-5xl text-white font-extrabold font-main tracking-tight leading-none pb-5'>Capturing Your Memories, Crafting Your Story</h2>
                    <button onClick={()=> navigate('/products')} className='px-6 py-2 border'>VIEW ALL PRODUCTS</button>
                </div>
            </div>
            
        </>
    )
}
