import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ExamPanelcard() {
  const exampanelInformation = [
    {
      title: "ক্লাস টেস্ট",
      text: "Lorem Ipsum dollar sit amet",
      src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/exam.png",
    },
    {
      title: "মাসিক টেস্ট",
      text: "Lorem Ipsum dollar sit amet",
      src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/exam1122.png",
    },
    {
      title: "স্পেশাল টেস্ট",
      text: "Lorem Ipsum dollar sit amet",
      src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/quiz.png",
    },
    {
        title: "টেস্ট",
        text: "Lorem Ipsum dollar sit amet",
        src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/choose.png",
      },
      {
        title: " টেস্ট",
        text: "Lorem Ipsum dollar sit amet",
        src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/light-bulb.png",
      },
      {
        title: "ক্লাস টেস্ট",
        text: "Lorem Ipsum dollar sit amet",
        src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/exam.png",
      },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "15px", margin: "10px" }}>
        এক্সাম সমূহ
      </h1>
      <p className="text-center">
        আপনার যোগ্যতা যাচাই করুন আমাদের এক্সাম এর মাধ্যমে
      </p>
      <div className="container">
        <div className="row">
      {exampanelInformation.map((item) => (
        <div className="col-md-4">
       
          <Card
            className="shadow-lg p-3 mb-5 bg-white rounded"
            style={{
              height: "auto",
              width: "350px",
              margin: "25px",
              borderRadius: "20px",
            }}
          >
            <div style={{ height: "", padding: "20px" }}>
              <div className="d-flex">
                <img style={{ margin: "0 auto" }} src={item.src} alt="" />
              </div>
              <Card.Title>
                <h2 style={{ textAlign: "center", padding: "15px" }}>
                  {item.title}
                </h2>
              </Card.Title>
              <Card.Text>
                <p style={{ textAlign: "center" }}>{item.text}</p>
              </Card.Text>
              <div className="d-flex">
                <Button style={{ margin: "0 auto" }} variant="primary">
                  টেস্ট দিন
                </Button>
              </div>
            </div>
          </Card>
          </div>
      ))}
      </div>
      </div>
    </div>
  );
}
