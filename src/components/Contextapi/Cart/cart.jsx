import React, { useContext, useState } from 'react'
import { Cartinfo } from './cartcontext';


const cart = (props) => {

    const {cartcount, setcartcount} = useContext(Cartinfo)
    const add=()=>{
        setcartcount(cartcount+1)
        console.log(cartcount);
        
    }
  return (
    <div className='flex h-screen text-4xl font-bold flex-col gap-15 justify-center items-center'>
        <h1>
            {cartcount}
        </h1>
     <button onClick={add}> Add</button>
    </div>
  )
}

export default cart
