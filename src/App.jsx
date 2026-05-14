import Home from './components/route-basic/home'
import About  from './components/route-basic/about';
import Contact from './components/route-basic/contact';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/route-basic/Nav';
import Notfound from './components/route-basic/notfound'
import Cart from './components/Contextapi/Cart/cart';
import Redux from './components/redux/redux'
function App(){
  return(
    <>
    {/* <Nav></Nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
    </Routes> */}
    <Redux/>
    </>
  )
}

export default App;