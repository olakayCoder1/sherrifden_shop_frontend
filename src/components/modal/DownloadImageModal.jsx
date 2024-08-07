import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'



const backDrop = {
    visible : {opacity : 1 },
    hidden : {opacity : 0 }
}

const modal = {
    hidden : {
        y: "-100vh",
        opacity: 0
    },
    visible : {
        y: "100px",
        opacity: 1,
        transition: { delay : 0.5 }
    }
}
export default function DownloadImageModal({setShowModal,imageName,price}) {
    

    return (
        <AnimatePresence > 
            <motion.div onClick={() => setShowModal(false)}
                className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 z-50 h-full w-full md:inset-0'
                    variants={backDrop} initial="hidden" animate="visible" >
                    <motion.div onClick={(e) =>  e.stopPropagation()}
                        className=' w-full md:w-[400px] lg:w-[500px]  mx-auto text-center'
                        variants={modal} >
                            <motion.div
                                className="relative p-4 w-full max-w-md max-h-full"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                >
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Download Portrait
                                    </h3>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        type="button"
                                        className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-hide="authentication-modal"
                                    >
                                        <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                        >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    </div>

                                    <div className="p-4 md:p-5">
                                    <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                                        {imageName}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                                        Downloading this portrait will cost you.{' '}
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                        ${price}
                                        </span>
                                    </p>
                                    <form className="space-y-4" action="#">
                                        <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Enter your email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="name@company.com"
                                            required
                                        />
                                        </div>
                                        <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                        >
                                        Proceed to payment
                                        </button>
                                    </form>
                                    </div>
                                </div>
                            </motion.div>
                    </motion.div>
                </motion.div>
            
        </AnimatePresence>
    )
}
