import React from 'react'
import "./Big.css"

export default function Big(props) {
  return (
   <>
   <div className='half'>
      {/* <img src={props.img} alt=''></img> */}
      <h2>{props.hd}</h2>
      <img src={props.pic} alt='error'/>
      <p>{props.para}</p>
   </div>
   </>
  )
}
