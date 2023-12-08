import React,{useState} from 'react'
import "./Nav.css"
import {FaBars,FaTimes} from "react-icons/fa"
import { Link } from 'react-router-dom';

export default function Nav() {
    const[show,setShow]=useState(true);
  return (
    <>
    <nav>
    <div className="main">
        <div className="logo">Logo
        </div>
        {(show == true)?<ul className='ulist'>
          <li><Link to={"/"}>Home</Link> </li>
         <li> <Link to={"/about"}>About</Link> </li>
          <li><Link to={"/service"}>Service</Link></li> 
          {/* <li><Link to={"/contact"}>Contact</Link> </li> */}
          <li><Link to={"/portfolio"}>Portfolio</Link> </li>  
         
        </ul>: <ul className='ulist wid'>
         <li> <Link to={"/"}>Home</Link> </li>
         <li> <Link to={"/about"}>About</Link> </li>
         <li> <Link to={"/service"}>Service</Link> </li>
         {/* <li> <Link to={"/contact"}>Contact</Link> </li> */}
         <li> <Link to={"/portfolio"}>Portfolio</Link></li>   
          
         
        </ul>}
        {
            (show==true)?<button onClick={()=>setShow("false")}><FaBars/></button>:<button onClick={()=>{setShow(true)}}><FaTimes/></button>
        }
      
    </div>
    </nav>
    </>
  )
}
