import React from 'react'
import "./Service.css"
import data from './data'
import Serv from '../../components/Serv'

export default function Service() {
  return (
   <>
   <section id='service'>
      <h1 className='hh'>Services</h1>
      <div className="smain">
         {data.map((x)=>{
          return(<>
            <Serv name={x.name} para={x.para}/>
           
          </>)
         })}
      </div>
   </section>
   </>
  )
}
