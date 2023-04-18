import React from 'react'
import Cores from '../../Component/CorseDescription/Cores'
import Footer from '../../Component/Footer/Footer'
import NavBar from '../../Component/NavBar/NavBar'
import Information from '../../Component/PersonInformation/Information'
import homeimage from "../../assets/image/coverHome.jpg";
import Banner from "../../Component/HomeBanner";


export default function About() {
  return (
    <div>
        <NavBar/>
        <Banner image={homeimage} header={"BCS Confidence"} text={"BCS কনফিডেন্স ১৯৯১ সালে প্রতিষ্ঠিত চাকুরি প্রার্থীদের একটি সহায়ক প্রতিষ্ঠান"} title={"Lead By: Lion Taslima Gias"}/>
        <Information/>
        <div className="" style={{backgroundColor:"#1a161f",marginTop:"50px"}}>
      <h3 className="text-center" style={{padding:"50px",color:"white"}}>আমাদের কোর্স সমূহ</h3>
      <Cores/>
      </div>
        <Footer/>
        </div>
  )
}
