import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileLink(props) {
    

    return (
        <>
            <li>
                {props?.isActive ? (
                    <Link to={props.toPath} className="flex text-sm font-medium hover:text-primary-700 border-b-2 border-blue-700 text-blue-700 ">
                        {props?.pathName}
                    </Link>
                ): (
                    <Link to={props.toPath} className="flex text-sm font-medium text-gray-900 hover:text-primary-700 ">
                        {props?.pathName}
                    </Link > 
                )}
            </li>
        </>
    )
}
