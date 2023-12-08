import React from 'react'
import "./Port.css"
import "./pdata"
import pdata from './pdata'
import Serv from '../../components/Serv'


export default function Port() {
  return (
    <>
    <section id='portfolio'>
      <h1>Portfolio</h1>
      <div className="pmain">
       {
        pdata.map((i)=>{
         return(
          <>
          <Serv pic={i.pic} name={i.name} para={i.para}/>
          </>
         )
        })
       }
      </div>
    </section>
    </>
  )
}
