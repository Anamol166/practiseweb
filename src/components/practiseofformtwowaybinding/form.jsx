import React, { useState } from "react";

const Form = () => {
    const [name, setname] = useState("")
    const [showdisplay, setshowdisplay] = useState("")

    const handlesubmit = (e) => {
        e.preventDefault();
        setname('')
        setshowdisplay(name);
    };
    return (
        <>
        <div className="flex flex-col justify-center items-center h-screen">
            <form onSubmit={handlesubmit}>
                <input
                    className="text-3xl px-1 border border-white mx-1"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setname(e.target.value);
                    }}
                />
                <button className="border border-white rounded-3xl px-1 text-3xl mx-1"
                    onClick={() => {
                        console.log(name)
                    }}
                >
                    Submit
                </button>
            </form>
            <h1 className="text-4xl my-40">{showdisplay}</h1>
        </div>
        </>
    );
};

export default Form;