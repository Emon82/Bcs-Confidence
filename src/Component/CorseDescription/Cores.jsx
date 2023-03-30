import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function Cores() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container " style={{ padding:"70px" }}>
      <Slider {...settings}>
        <div>
          <img
            style={{ borderRadius: "15px" }}
            src="https://www.bcs-confidence.com/wp-content/uploads/2022/07/6-211x300.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ borderRadius: "15px" }}
            src="https://www.bcs-confidence.com/wp-content/uploads/2022/07/1-211x300.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ borderRadius: "15px" }}
            src="https://www.bcs-confidence.com/wp-content/uploads/2022/07/2-211x300.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ borderRadius: "15px" }}
            src="https://www.bcs-confidence.com/wp-content/uploads/2022/07/3-211x300.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ borderRadius: "15px" }}
            src="https://www.bcs-confidence.com/wp-content/uploads/2022/07/4-211x300.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ borderRadius: "15px" }}
            src="https://www.bcs-confidence.com/wp-content/uploads/2022/07/5-211x300.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ borderRadius: "15px" }}
            src="https://www.bcs-confidence.com/wp-content/uploads/2022/07/1-211x300.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ borderRadius: "15px" }}
            src="https://www.bcs-confidence.com/wp-content/uploads/2022/07/3-211x300.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
