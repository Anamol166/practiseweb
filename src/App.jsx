import Home from './components/route-basic/home'
import About  from './components/route-basic/about';
import Contact from './components/route-basic/contact';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/route-basic/Nav';
import Notfound from './components/route-basic/notfound'
function App(){
  return(
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
    </Routes>
    </>
  )
}

export default App;