  import React from 'react';
  import {  useParams } from "react-router-dom";
  import {FeildContext} from "../context/feilds";
  export default function Contact() {
    const { id } = useParams();
    const {cart} = React.useContext(FeildContext);
    const feild  = cart.find(item => item.id===parseInt(id));
    const {title} = feild;
    
      //  return(
      //    <section>
      //      <div className="container">
      //         <div className="row">
      //            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
      //                <h2>chose Your Track</h2>
      //                <ul>
      //                  <li>1 : front end</li>
      //                  <li>2 : back end</li>
      //                  <li>3 : full stack</li>
      //                  <li>4 : android</li>
      //                </ul>
      //            </div>
      //         </div>
      //      </div>
      //    </section>
      //  )
      
  
      return (
        <section className=" contact" >
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-4-3">
                  <h2 className="title"><strong> {title}</strong> </h2>
              <form className="mt-5">
              
              <div className="form-group">
                <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    required
                />
              </div>
              <div className="form-group">
                <input
                    type="mail"
                    name="mail"
                    className="form-control"
                    placeholder="Mail "
                    required
                />
              </div>
              <div className="form-group">
                <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile"
                    required
                />
              </div>
              <div className="form">
                <textarea
                    name="message"
                    className="form-control"
                    rows="10"
                    placeholder=" Message "
                    required
                />
              </div>
              <div className="form-group mt-3">
                    <input
                        type="submit"
                        value="Send"
                        className="form-control bg-primary text-white"
                    
                    />
              </div>
              </form>
              </div>

            </div>
        </section>
    )
    
  }
