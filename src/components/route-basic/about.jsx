
import React, { createContext, useContext, useState } from "react";
import { UserContext } from '../Contextapi/userscontext';

const About = (props) => {
    const { value, setvalue } = useContext(UserContext)
    const [username, setusername] = useState(value)

    const handlebutton = () => {
        setvalue(username)
    }

    return (
        <>
            <div
                className="text-5xl flex justify-center flex-col gap-10 items-center h-screen w-screen underline">
                Do you wanna change your name?
                <div className="flex flex-col items-center gap-5 ">
                    <div className="">
                        <h1>{value}</h1>
                    </div>
                    <div className="">
                        <input placeholder="Enter the name"
                            value={username}
                            className="text-3xl border-2 border-gray-400 p-3 rounded-2xl mx-10"
                            onChange={(e) => {
                                setusername(e.target.value)
                            }}></input>
                        <button onClick={handlebutton} className="text-3xl  border-2 border-gray-400 p-3 rounded-2xl cursor-pointer hover:bg-gray-500 bg-gray-700">change name</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About