import React from 'react'
import {FeildContext} from "../context/feilds";
export default function Services() {
    const {serv} =React.useContext(FeildContext);

    return (
        <section className="services py-5">
              <div className="container">
                        <h2 className="text-center title">services</h2>
                  <div className="row">
                   {serv.map(item => {
                       return(
                        <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 serv">
                           <div className="content-serv">
                                <h2>{item.icon}</h2>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                           </div>
                        </div>
                       )
                   })}
                  </div>

              </div>
        </section>
    )
}
