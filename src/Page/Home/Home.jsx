import React from "react";
import Cores from "../../Component/CorseDescription/Cores";
import Footer from "../../Component/Footer/Footer";
import NavBar from "../../Component/NavBar/NavBar";
import Information from "../../Component/PersonInformation/Information";
import WeAre from "../../Component/WeAre.jsx/WeAre";
export default function Home() {
  return (
    <div>
      <NavBar />
      <h3 className="text-center m-3 ">আমাদের কার্যক্রম সমূহ</h3>
      <WeAre />
      <div className=""style={{backgroundColor:"rgb(249 249 249)",marginTop:"50px"}}>
      <Information/>
      </div>
      <div className="" style={{backgroundColor:"#1a161f",marginTop:"50px"}}>
      <h3 className="text-center" style={{padding:"50px",color:"white"}}>আমাদের কোর্স সমূহ</h3>
      <Cores/>
      </div>
      <Footer/>
    </div>
  );
}
