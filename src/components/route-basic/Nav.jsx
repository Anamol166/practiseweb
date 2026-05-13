import { Link } from "react-router-dom"

const Nav=()=>{
    return (
    <>
    <div className="flex flex-row bg-blue-400 justify-between p-10">
        <div className="text-4xl font-bold">
       <h1>Welcome to the page</h1> 
       </div>
       <div className="flex flex-row gap-10 justify-center text-3xl">
        <Link className=" hover:bg-blue-400" to='/'>Home</Link>
        <Link className=" hover:bg-blue-400" to='/about'>About</Link>
        <Link className=" hover:bg-blue-400" to='/contact'>Contact</Link>
        </div>
    </div>
    </>
    )
}

export default Nav