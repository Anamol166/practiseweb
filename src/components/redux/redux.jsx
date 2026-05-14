import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decremenet, increment, byvalue} from './features/counterslice'
const Redux = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [num, setnum] = useState(5)
    console.log(count);

    return (
        <div className='cal'>
            <h1>{count}</h1>
            <button className='text-3xl border-gray-500 border' 
                onClick={() =>
                    dispatch(increment())
                }>Increment</button>
            <button className='text-3xl border-gray-500 border' onClick={() => {
                dispatch(decremenet())
            }}>Decrement</button>
            <input type="number"
            value={num}
             placeholder='increase number by value'
             className='text-3xl border-gray-500 border' 
             onChange={(e)=>{
                setnum(e.target.value)
             }}></input>
             <button  
             className='text-3xl border-gray-500 border' onClick={()=>{
                dispatch(byvalue(Number(num)))
             }}> Increase by value</button>
    </div >
  )
}

export default Redux
