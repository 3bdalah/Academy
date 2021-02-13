import React, { useState } from 'react'
import Faq from "./Faq";
import faq from "../../context/FaqData";
export default function FaqList() {
      const [FAQ] = useState(faq);
    return (
        <section className="faq">
           <div className="container">
               <h2 className="title text-center" >FAQ.</h2>
           {FAQ.map( item => {
                return (
                    <Faq key={item.id} answr={item.answr} qeustion={item.qeustion}/>
                )
            })}
           </div>
        </section>
    )
}
