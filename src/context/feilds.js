import React from 'react';
import service from "./services";

import locaCart from "./localCart";
export const FeildContext = React.createContext();

// export const ProductContext = React.createContext();
export default function FeildProvider({children}) {
    const [cart,setCart] = React.useState(locaCart);
    const [serv,setServ] = React.useState(service);

  
    return (
        <FeildContext.Provider value={{cart,serv}}>
          {children}  
        </FeildContext.Provider>
    )
}
