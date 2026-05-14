import React, { createContext, useState } from 'react'

export const Cartinfo = createContext();

const CartContextProvider = (props) => {
    const [cartcount, setcartcount] = useState(0)
    return (
        <>
            <Cartinfo.Provider value={{cartcount,setcartcount}}>
                {props.children}
            </Cartinfo.Provider>
        </>
    )
}

    export default CartContextProvider;