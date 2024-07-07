import React from 'react'

export default function LoadingImage(props) {
    

    return (
        <>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <div className="animate-pulse h-full w-full bg-gray-300"></div>
            </div>
        </>
    )
}
