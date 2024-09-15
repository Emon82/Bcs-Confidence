import React from 'react';
import Slider from "react-slick";
import InformationCard from "../InformationCard";
import Information3 from './Information3';
import Information2 from './information2';

export default function Information() {
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
    <div className="container">
      <Slider {...settings}>
        <div>
          <InformationCard />
        </div>
        <div>
          {/* <Information2/> */}
          <InformationCard />
        </div>
        <div>
          {/* <Information3/> */}
          <InformationCard />
        </div>
      </Slider>
    </div>
  );
}
