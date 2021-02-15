import React from 'react';
import service from "./services";

import locaCart from "./localCart";
export const FeildContext = React.createContext();

// export const ProductContext = React.createContext();
export default function FeildProvider({children}) {
    const [cart] = React.useState(locaCart);
    const [serv] = React.useState(service);

  
    return (
        <FeildContext.Provider value={{cart,serv}}>
          {children}  
        </FeildContext.Provider>
    )
}
