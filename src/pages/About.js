import React from 'react'
import {HiOutlineArrowNarrowRight,HiOutlineArrowNarrowLeft} from "react-icons/hi";
import {FaFacebookSquare,FaTwitterSquare,FaYoutube,FaInstagramSquare} from "react-icons/fa";
export default function About() {
    return (
        <section className="about">
            <div className="container">
                
                <div className="row">
                 
                  <div className="col-lg-8 col-sm-12 m-auto">
                  <h2 className="title">About-Us</h2>
                  
                      <p><strong className="head"><HiOutlineArrowNarrowRight className="icon-about"/> Step One </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Claudii libidini, qui tum erat summo ne imperio, dederetur. Quid sequatur, quid repugnet, vident. Ut in voluptate sit, qui epuletur, in dolore, qui torqueatur. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Quasi ego id curem, quid ille aiat aut neget.</p>
                      <p><strong className="head"><HiOutlineArrowNarrowRight className="icon-about"/> Step Two </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Claudii libidini, qui tum erat summo ne imperio, dederetur. Quid sequatur, quid repugnet, vident. Ut in voluptate sit, qui epuletur, in dolore, qui torqueatur. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Quasi ego id curem, quid ille aiat aut neget.</p>
                      <p><strong className="head"><HiOutlineArrowNarrowRight className="icon-about"/> Step Three </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Claudii libidini, qui tum erat summo ne imperio, dederetur. Quid sequatur, quid repugnet, vident. Ut in voluptate sit, qui epuletur, in dolore, qui torqueatur. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Quasi ego id curem, quid ille aiat aut neget.</p>
                      <p><strong className="head"><HiOutlineArrowNarrowRight className="icon-about"/> Step Four </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Claudii libidini, qui tum erat summo ne imperio, dederetur. Quid sequatur, quid repugnet, vident. Ut in voluptate sit, qui epuletur, in dolore, qui torqueatur. Quae quo sunt excelsiores, eo dant clariora indicia naturae. Quasi ego id curem, quid ille aiat aut neget.</p>
                      <ul  className="list_social">
                      <strong><HiOutlineArrowNarrowRight className="icon-about"/> Socail Media </strong> 
                          <li><a  className="facebook" href="https://www.johnsmilga.com/videos" target="blank"> <FaFacebookSquare/></a></li>
                          <li><a className="twitter" href="https://www.johnsmilga.com/videos" target="blank"><FaTwitterSquare/></a></li>
                          <li><a className="youtube" href="https://www.johnsmilga.com/videos" target="blank"><FaYoutube/></a></li>
                          <li><a className="instagram" href="https://www.johnsmilga.com/videos" target="blank"><FaInstagramSquare/></a></li>
                      </ul>

                  
                  </div>
                </div>
            </div> 
        </section>
    )
}
