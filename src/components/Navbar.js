import React, { useRef, useState,useEffect } from 'react'
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import Logo from "../img/logo.png";
import links from "../context/navbarData";
export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    }, [showLinks]);

    
    return (
        <nav>
        <div className='nav-center'>
          <div className='nav-header'>
          <Link to="/home"><img src={Logo} className='logo' alt='logo' /></Link>
              <button className='nav-toggle' onClick={toggleLinks}>
                <FaBars />
              </button>
            </div>
            <div className='links-container' ref={linksContainerRef}>
              <ul className='links' ref={linksRef}>
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <Link to={url}>{text}</Link>
                    </li>
                  );
                })}
              </ul>
          </div>
        </div>
    </nav>
    )
}
