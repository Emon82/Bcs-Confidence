import React from 'react'
import NavBar from "../../Component/NavBar/NavBar"
import Footer from '../../Component/Footer/Footer'
import homeimage from "../../assets/image/coverHome.jpg";

import Banner from '../../Component/HomeBanner'
import Cores from '../../Component/CorseDescription/Cores';
const Course = () => {
  return (
    <div>
<NavBar/>
<Banner image={homeimage} header={"BCS Confidence"} text={"BCS কনফিডেন্স ১৯৯১ সালে প্রতিষ্ঠিত চাকুরি প্রার্থীদের একটি সহায়ক প্রতিষ্ঠান"} title={"Lead By: Lion Taslima Gias"}/>
<Cores/>

<Footer/>
    </div>
  )
}

export default Course