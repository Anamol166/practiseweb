import { createContext, useState } from "react";

export const UserContext = createContext()

const Data = (props) => {
    const [value, setvalue] = useState("Default")
    return (
        <>
            <UserContext.Provider value={{value,setvalue}}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export default Data;