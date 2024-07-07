import React, { useContext, useState } from 'react';
import { supabase } from '../../lib/helper/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid'; // Import uuid v4 generator
import StateContext from '../../context/StateContext';

const backDrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "100px",
        opacity: 1,
        transition: { delay: 0.5 }
    }
};

export default function CustomPortraitModal({ setShowModal }) {
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [imageUrl, setImageUrl] = useState('');
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const {displayNotification} = useContext(StateContext)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            const previewUrl = URL.createObjectURL(selectedFile);
            setPreviewUrl(previewUrl);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file || !email) return;

        setLoading(true); // Start loading indicator

        try {
            // Generate a unique filename using UUID
            const fileId = uuidv4();
            const filename = `${fileId}-${file.name}`;

            // Upload the image to Supabase Storage
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('carve_storage') // Replace with your bucket name
                .upload(`main/${filename}`, file);

            if (uploadError) {
                console.error('Error uploading file:', uploadError.message);
                displayNotification('error', "An error occured uploading file, try again later")
                return;
            }

            const uploadedImageUrl = `${supabaseUrl}/storage/v1/object/public/${uploadData.fullPath}`;
            setImageUrl(uploadedImageUrl);
            console.log(imageUrl)

            // Insert data into the "portrait" table
            const { data: insertData, error: insertError } = await supabase
                .from('portrait')
                .insert([{ email, image_url: uploadedImageUrl }]);

            if (insertError) {
                displayNotification('error', "An error occured submitting data")
                console.error('Error inserting data:', insertError.message);
            } else {
                displayNotification('success', "Record successfully uploaded")
                setShowModal(false)
            }

            // Reset form state after submission
            setEmail('');
            setFile(null);
            setPreviewUrl(null);
        } catch (error) {
            console.error('Error handling form submission:', error);
        } finally {
            setLoading(false); // Stop loading indicator
        }
    };

    const handleClearFile = () => {
        setFile(null);
        setPreviewUrl(null);
    };

    return (
        <AnimatePresence >
            <motion.div onClick={() => setShowModal(false)}
                className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 z-50 h-full w-full md:inset-0'
                variants={backDrop} initial="hidden" animate="visible" >
                <motion.div onClick={(e) => e.stopPropagation()} className=' w-full md:w-[400px] lg:w-[500px]  mx-auto text-center' variants={modal} >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Get A custom portrait
                            </h3>
                            <button
                                onClick={() => setShowModal(false)}
                                type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="relative col-span-2 flex items-center justify-center w-full">
                                    {previewUrl ? (
                                        <>
                                            <img src={previewUrl} alt="Preview" className="max-h-80 max-w-full mb-4" />

                                            <div className="absolute top-0 left-0 flex items-center text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                                                <div className="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
                                                    <a onClick={handleClearFile} className="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" href="#">Undo</a>
                                                    <button onClick={handleClearFile} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
                                                        <span className="sr-only">Close</span>
                                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                                        </label>
                                    )}
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                            </svg>
                                        </div>
                                        <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="name@flowbite.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" disabled={loading} className={`text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                {loading ? 'Processing...' : 'Proceed to payment'}
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
