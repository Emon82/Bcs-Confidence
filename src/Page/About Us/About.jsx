import React from 'react'
import Cores from '../../Component/CorseDescription/Cores'
import Footer from '../../Component/Footer/Footer'
import NavBar from '../../Component/NavBar/NavBar'
import Information from '../../Component/PersonInformation/Information'

export default function About() {
  return (
    <div>
        <NavBar/>
        <Information/>
        <div className="" style={{backgroundColor:"#1a161f",marginTop:"50px"}}>
      <h3 className="text-center" style={{padding:"50px",color:"white"}}>আমাদের কোর্স সমূহ</h3>
      <Cores/>
      </div>
        <Footer/>
        </div>
  )
}
