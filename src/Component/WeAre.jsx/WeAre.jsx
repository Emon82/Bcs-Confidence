import React from "react";
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
export default function WeAre() {
  return (
    <div>
      <div className="container">
        {/* <div className="card col-md-4"> */}
        <div className="row">
          {weare.map(({ src, title }, key) => (
            <div className="col-md-4 my-2" key={key}>
              <div className="card " style={{borderRadius:"20px"}}>
                <div className="card-body d-flex flex-row justify-content-center p-3">
                  <img
                    //className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                    src={src}
                    alt={title}
                  />
                  <h5 className="card-title">{title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
