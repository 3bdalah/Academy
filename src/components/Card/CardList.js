import React from 'react'
import Card from "../Card/Card";
export default function CardList({data}) {
    return (
        <section className="parent-tracks section">
            <h2 className="text-center title">Tracks</h2>
               <div className="parent-card">
                    {data.map( item => {
                        return  <Card key={item.id} {...item}/>
                    })}
               </div>
        </section>
    )
}
