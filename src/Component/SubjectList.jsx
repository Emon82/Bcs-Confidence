import React from 'react'

const SubjectList = () => {
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
    },
    {
      src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/registration.png",
      title: "প্রকৌশলী মুজিবুর রহমান কম্পিউটার বই  (একাদশ- দ্বাদশ)",
    },
    {
      src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/registration.png",
      title: "উচ্চ মাধ্যমিক পোঁরনীতি- মোজাম্মেল হক (১ম ও ২য় পত্র)",
    },
  ];
  return (
    <div style={{ backgroundColor: "black", padding: " 50px 0px" }}>
      <div className="container">
        {/* <div className="card col-md-4"> */}
        <div className="row">
          {weare2.map(({ src, title }, key) => (
            <div className="col-md-4 my-2" key={key}>
              <div className="card " style={{ borderRadius: "20px" }}>
                <div className="card-body d-flex flex-row justify-content-center p-3">
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

export default SubjectList