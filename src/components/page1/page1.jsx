import React from "react";
import Nav from "./nav";
import Content from "./content";

function Page() {
    return (
        <div className="min-h-screen w-full flex flex-col bg-white">
            <Nav />
            <Content/>
        </div>
    )
}

export default Page;