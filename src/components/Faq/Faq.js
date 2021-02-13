import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
export default function Faq({qeustion,answr}) {
    const [show,setShow] = React.useState(false);
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
