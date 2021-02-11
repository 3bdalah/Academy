import React from 'react';

export default function Hero({children,title}) {
    return (
        <section className={title}>
            <div className="overlay">
                  <div className="container">
                  {children}   
                  </div>
            </div>
         
        </section>
    )
}
