import React from 'react'
import Slider from "react-slick";
import InformationCard from "../InformationCard"

export default function information() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
      };
  return (
    <div className='container'>
    <Slider {...settings}>
      <div>
        <InformationCard/>
      </div>
      <div>
        <InformationCard/>
      </div>
      <div>
      <InformationCard/>
      </div>
      <div>
      <InformationCard/>
      </div>
    </Slider>
  </div>
  )
}
