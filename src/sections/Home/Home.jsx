import React from 'react'
import "./Home.css"
import Big from '../../components/Big'

export default function Home() {
    const hdata =[{
        img:"../Images/img4.jpg",
        para:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut voluptates totam, minus earum explicabo sequi tempore harum repudiandae nobis? Id fuga ratione unde, molestias nulla facere illum enim accusantium."
    },
    {
        img:"../Images/graph.jpeg",
        para:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut voluptates totam, minus earum explicabo sequi tempore harum repudiandae nobis? Id fuga ratione unde, molestias nulla facere illum enim accusantium."
    }
];
  return (
  <>
  
  <section id='home'>
  <div className="mid">
   {
    hdata.map((x)=>{
        return(
            <Big pic={x.img} para={x.para}/>
        )
    })
   }
   
    
  </div>
  </section>
  </>
  )
}
