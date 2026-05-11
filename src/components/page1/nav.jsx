import React from "react";

function Nav() {
    return (
        <>
            <div className="p-4 flex flex-row border-b border-slate-100 justify-between items-center bg-white">
                <div className="text-3xl font-bold ml-29 text-slate-800">
                    E<span className="text-indigo-600">tech.</span>
                </div>
                <div className="flex items-center">
                    <button className="px-4 py-1 w-30 h-10 mx-3 border rounded-full border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-medium">
                        Sign up
                    </button>
                    <button className="px-4 py-1 w-30 h-10 mx-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 shadow-md shadow-indigo-100 transition-all font-medium">
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default Nav;