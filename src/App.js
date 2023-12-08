import React from 'react';
import Nav from './sections/Nav/Nav';
import Home from './sections/Home/Home';
import Service from './sections/Service/Service';
import Port from './sections/Portfolio/Port';
import About from './sections/About/About';
import {Routes, Route} from 'react-router-dom';
import Contact from './sections/Contact/Contact';


export default function App() {
  return (
    <>
     <Nav/>
       
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service'element={<Service/>}/>
      <Route path='/portfolio'  element={<Port/>}/>
      {/* <Route path='/contact'  element={<Contact/>}/> */}
    </Routes>

    </>
  )
}
