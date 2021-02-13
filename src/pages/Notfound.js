import React from 'react'
import {Link} from "react-router-dom";
export default function Notfound() {
    return (
        <div className="not-found">
            <Link to="/" >
                Back To Home 
            </Link>
        </div>
    )
}