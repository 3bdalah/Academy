import React from 'react'
import faq from "../../context/FaqData";
// import {FeildContext} from "../../context/feilds";

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
export default function Faq({qeustion,answr}) {
    console.log(faq);
    // const {toggle ,show} = useContext(FeildContext);
    // console.log(show);

    const [show,setShow] = React.useState(false);
    console.log(qeustion);
    return (
       <>
            <p className="child-faq" >
                <strong ><span className="Q">{qeustion}</span>
                <button className="btn-show" onClick={()=> setShow(!show)}>
                 {show?<AiOutlineMinus/>:<AiOutlinePlus/>}
                </button>
                </strong>
                <br/>
                {show && <span className="answr">{answr}</span>}
            </p>     
       </>
    )
}
