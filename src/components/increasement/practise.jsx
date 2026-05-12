import React, { useState } from "react";

const Display = () => {
    const [num, setNum] = useState(0)
    function increase() {
        setNum(num + 1)
    }
    const decrease = () => {
        setNum(num - 1)
    }
    const reset = () => {
        setNum(0)
    }
    return (
        <>
            <div className="text-3xl flex justify-center flex-col gap-2 items-center">
                {num}
                <div className="">
                    <button onClick={increase} className="border border-white rounded-2xl p-3 mx-1 cursor-pointer hover:bg-gray-100">Increase</button>
                    <button onClick={decrease} className="border border-white rounded-2xl p-3 mx-1 cursor-pointer hover:bg-gray-100">Decrease</button>
                    <button onClick={reset} className="border border-white rounded-2xl p-3 mx-1 cursor-pointer hover:bg-gray-100">Reset</button>
                </div>
            </div>
        </>
    )
}

export default Display;