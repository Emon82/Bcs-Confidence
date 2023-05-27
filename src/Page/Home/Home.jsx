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


const weare = [
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/priliicon.png",
    title: "BCS প্রিলিমিনারি",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/office-material.png",
    title: "BCS লিখিত",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/job-interview.png",
    title: "BCS ভাইভা",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/teacher.png",
    title: "প্রাথমিক শিক্ষক নিয়গ",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/bank.png",
    title: "ব্যাংক জব",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/judge.png",
    title: "সহকারী জজ নিয়োগ",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/policeman.png",
    title: "এসআই নিয়োগ",
  },{
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/registration.png",
    title: "শিক্ষক নিবন্ধন",
  },
];
const weare2 = [
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/priliicon.png",
    title: "বাংলাদেশের ইতিহাস ও বিশ্ব সভ্যতা ৯ম ও ১০ম (মূল বই )",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/office-material.png",
    title: "গণপ্রজাতন্তী বাংলাদেশের সংবিধান (মূল বই ) ",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/job-interview.png",
    title: "বিশ্ব রাজনীতির ১০০ বছর (১ম ও ২য় খণ্ড )",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/teacher.png",
    title: "রাজনীতি কোষ",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/bank.png",
    title: "ভূগোল বই নবম ও দশম  ",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/judge.png",
    title: "সাধারন বিজ্ঞান (নবম ও দশম)- পদার্থ, রসায়ন, জিব-বিজ্ঞান বই",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/policeman.png",
    title: "সাধারন বিজ্ঞান (অষ্টম)",
  },{
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/registration.png",
    title: "প্রকৌশলী মুজিবুর রহমান কম্পিউটার বই  (একাদশ- দ্বাদশ)",
  },
  {
    src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/registration.png",
    title: "উচ্চ মাধ্যমিক পোঁরনীতি- মোজাম্মেল হক (১ম ও ২য় পত্র)",
  },
];
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
      <WeAre weare={weare} />
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
      <SubjectList weare={weare2} />
</div>
      <Footer />
    </div>
  );
}
