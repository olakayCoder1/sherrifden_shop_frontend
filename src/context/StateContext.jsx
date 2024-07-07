import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';



const StateContext = createContext({});

export const StateProvider = ({ children }) => {


    function displayNotification(type, text ){
        if(type==='success'){
            toast.success(`${text}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        else if(type==='error'){
            toast.error(`${text}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else{
            toast(`${text}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }

    const value  = { displayNotification}

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContext;