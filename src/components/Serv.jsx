import React from 'react'
import "./Serv.css"

export default function Serv(props) {
  return (
    <>
     <div className="box">
      <img src={props.pic} alt=''></img>
          <h1>{props.name}</h1>
         <p>{props.para}</p>
     </div>
    </>
  )
}
