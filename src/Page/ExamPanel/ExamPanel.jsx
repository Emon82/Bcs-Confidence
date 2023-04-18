import React from 'react';
import Footer from '../../Component/Footer/Footer';
import Banner from "../../Component/HomeBanner";
import NavBar from '../../Component/NavBar/NavBar';
import homeimage from "../../assets/image/coverHome.jpg";
import ExamPanelcard from './ExamPanelcard';

export default function ExamPanel() {
  
  return (
    <div>
        <NavBar/> 
        <Banner image={homeimage} header={"BCS Confidence"} text={"BCS কনফিডেন্স ১৯৯১ সালে প্রতিষ্ঠিত চাকুরি প্রার্থীদের একটি সহায়ক প্রতিষ্ঠান"} title={"Lead By: Lion Taslima Gias"}/>
        <ExamPanelcard/>
        <Footer/>
    </div>
  )
}
