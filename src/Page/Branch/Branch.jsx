import React from 'react'
import BranchComponent from '../../Component/BranchComponent'
import Footer from '../../Component/Footer/Footer'
import NavBar from '../../Component/NavBar/NavBar'
import homeimage from "../../assets/image/coverHome.jpg";
import Banner from "../../Component/HomeBanner";
export default function Branch() {
  return (
    <div>
      <NavBar/>
      <Banner image={homeimage} header={"BCS Confidence"} text={"BCS কনফিডেন্স ১৯৯১ সালে প্রতিষ্ঠিত চাকুরি প্রার্থীদের একটি সহায়ক প্রতিষ্ঠান"} title={"Lead By: Lion Taslima Gias"}/>
      <h1 style={{textAlign:"center",padding:"15px",margin:"10px"}}>ঢাকার শাখাসমূহ</h1>
      <BranchComponent/>
      <Footer/>
    </div>
  )
}
