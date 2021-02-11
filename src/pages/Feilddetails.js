import React from 'react'
import {  useParams,Link } from "react-router-dom";
import {FeildContext} from "../context/feilds";
export default function Feilddetails() {
    const { id } = useParams();
    const {cart} = React.useContext(FeildContext);
    const feild  = cart.find(item => item.id===parseInt(id));
    console.log(feild); 
    const {price,description,title,image,skills} = feild;
    return (
        <section className="track-info">
            <div className="container">
               <h2 className="title">{title}</h2>
              <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                     <img src={image} alt={title} className="img"/>
                </div>
                <div className="col-lg-8 col-md- 6 col-sm-12 content">
                <strong className="price">Price : ${price} </strong>
                <p className="desc">Description {description}</p>
                
                   {/* <strong>الاماكن الفارغة {empty_place}</strong> */}
                   
                    
                   <br/>
                    {skills.map(item=>{
                        return <p className={`skill ${item}`}>{item}</p>
                    })}
                   
                   <br/>
                    <button className="registar">
                        <Link to={`${id}/contact`}>
                Enroll</Link>
                </button>
                
                </div>
              
                
              </div>
            </div>
        </section>
    )
}
