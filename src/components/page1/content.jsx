import React from "react";
import Left from "./leftside";
import Right from "./rightside";

function Content() {
    return (
        <div className="flex flex-row w-full px-29 items-center justify-between">
            <Left />
            <Right />
        </div>
    )
}

export default Content;