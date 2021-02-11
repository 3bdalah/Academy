import React from 'react'
import CardList from "../components/Card/CardList";
import {FeildContext} from "../context/feilds";
export default function Products() {
    const {cart} =React.useContext(FeildContext);
    return (
           <section className="track">
            <CardList data={cart}/>
         </section>
    )
}
