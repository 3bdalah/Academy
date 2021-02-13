import React from 'react';
import {Link} from "react-router-dom";
import Services from "../components/Services";
import CardList from "../components/Card/CardList";
import {FeildContext} from "../context/feilds";
import Hero from "../components/Hero";
import Subscribe from"../components/Subscribe";
import FaqList from "../components/Faq/FaqList";
export default function Home() {
    const {cart} =React.useContext(FeildContext);
    return (
        <>
            <Hero title="home"> 
            <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 m-auto text-center">
                        <div className="content">
                            <div className="info-title">
                                <h1 className="title">Academy Megira </h1>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quod est munus, quod opus sapientiae?</p>
                                <br/>
                            </div>
                            <div className="group-btn">
                                <button className="btn-track"><Link to="/tracks/">Tracks</Link></button>
                            </div>
                        </div>
                        </div>
            </div>
            </Hero>
            <Services/>
            <CardList data={cart}/>
            <Subscribe/>
            <FaqList/>
        </>
    )
}