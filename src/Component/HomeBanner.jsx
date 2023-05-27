import React, { useEffect, useRef } from "react";
import "./HomeBanner.css";
export default function Banner({ header, image,text,title }) {
  const sectionRef = useRef(null);




  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // do nothing
      } else {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          // block: "start",
          // inline: "start",
        });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="responsive-img">
      <div
        style={{ backgroundImage: `url(${image})`, fontFamily: "auto" }}
        className="header"
      >
        <div className="p-on-desktop" ref={sectionRef}>
          <h1 style={{color:"gold"}}> &ldquo;{header}&rdquo; </h1>
          <h6>{text}</h6>
          <h3>{title}</h3>
        </div>

        <div className="p-on-desktop" ref={sectionRef}>
          <h1 style={{color:"green", fontWeight: "bold"}}> &ldquo;৩৪ বছরের অভিজ্ঞতা সমৃদ্ধ ঐতিহ্যবাহী একমাত্র প্রতিষ্ঠান&rdquo; </h1>
          <h4>BCS Confidence</h4>
          <h3>আমরা সফল হয়েছি, আপনারাও আসুন সফলতার পথে ...</h3>
        </div>

      </div>
    </div>
  );
}
