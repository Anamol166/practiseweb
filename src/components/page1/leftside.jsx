import React from "react";

function nav(){
    return(
        <>
        <div className=" p-4 flex flex-row border-b border-slate-200 justify-between">
            <div className="text-3xl font-medium ml-29">Etech.</div>
            <div className="">
                <button className="px-4 py-1 w-30 h-8 mx-5 border rounded-3xl border-slate-300 hover:bg-white hover:text-red-100 transition-all">Sign up</button>
                <button className="px-4 py-1 w-30 h-8 mx-5 bg-pink-500  rounded-3xl hover:bg-pink-600 hover:text-pink-500">Login</button>
            </div>
        </div>
        </>
    )
}

export default nav;