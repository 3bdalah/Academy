import React from 'react';
import { Link } from 'react-router-dom';
import {FaSearch} from "react-icons/fa";
export default function Card({title,image,price,id}) {
    // const {id} = useParams();
    // const url = image.url;
    return (
        <article className="cover-card">
              <div className="card-child">
                   <div className="box-img">
                    
                    <img src={image} alt={title}/>
                    <button className="details">
                        <Link className="link" to={`/tracks/${id}`}><span><FaSearch/></span></Link>
                    </button>
                   </div>
                
                <div className="content-box">
                <h4 className="title">{title}</h4>
                </div>

                
               </div>
        </article>
    )
}
