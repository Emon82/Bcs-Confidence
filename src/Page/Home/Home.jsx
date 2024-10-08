import React from "react";
import Cores from "../../Component/CorseDescription/Cores";
import Courseplan from "../../Component/Courseplan";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/HomeBanner";
import NavBar from "../../Component/NavBar/NavBar";
import Information from "../../Component/PersonInformation/Information";
import WeAre from "../../Component/WeAre.jsx/WeAre";
import homeimage from "../../assets/image/coverHome.jpg";
import SubjectList from "../../Component/SubjectList";



export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner
        image={homeimage}
        header={"স্বপ্ন যদি হয় BCS ক্যাডার, যথার্থ হোক সময়ের ব্যবহার"}
        text={
          "BCS কনফিডেন্স ১৯৯১ সালে প্রতিষ্ঠিত চাকুরি প্রার্থীদের একটি সহায়ক প্রতিষ্ঠান"
        }
        title={"Lead By: Lion Taslima Gias"}
      />
      <h3 className="text-center m-3 ">আমাদের কার্যক্রম সমূহ</h3>
      <WeAre weare={''} />
      <div
        className=""
        style={{ backgroundColor: "rgb(249 249 249)", marginTop: "50px" }}
      >
        <Information />
      </div>
      <div
        className=""
        style={{ backgroundColor: "#1a161f", marginTop: "50px" }}
      >
        <h3 className="text-center" style={{ padding: "50px", color: "white" }}>
          আমাদের কোর্স সমূহ
        </h3>
        <Cores />
      </div>
      <div className="">
        <Courseplan />
      </div>
<div className="">
<h3 className="text-center m-3 ">আমাদের বুক সমূহ</h3>
      <SubjectList weare={''} />
</div>
      <Footer />
    </div>
  );
}
