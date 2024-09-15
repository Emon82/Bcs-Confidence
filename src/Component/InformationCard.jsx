import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  const navigate = useNavigate(); // Use the useNavigate hook

  const TeacherInformation = [
    {
      title: "লায়ন মু. গিয়াস উদ্দিন",
      src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-03-at-12.44.34-PM-286x300.jpeg",
      text: "প্রিয় বিসিএস প্রত্যাশী ভাই ও বােন,আসসালামু আলাইকুম। আশা করি, সবকিছু মিলে সবকিছু ছাড়িয়ে ভালােই আছেন। প্রিয় পরীক্ষার্থীবৃন্দ, একটা বিষয় হয়তাে অনেকেই অবগত আছেন তবুও শেয়ার করতে ভালাে লাগছে। যে, বিসিএস ক্যাডার প্রত্যাশিদের জন্য সবচেয়ে বড় সুখবর হলাে ২০০৮ সাল থেকে প্রায় প্রতিবছরই বিসিএস পরীক্ষার সার্কুলার হচ্ছে। সরকার ও বাংলাদেশ সরকারি কর্মকমিশনের সমন্বিত উদ্যোগের। ফল ভােগ করছেন ...",
    },
  ];

  // Navigate to the new page on button click
  const handleReadMore = () => {
    navigate("/teacher-details");
  };

  return (
    <div className="container">
      <h3 className="text-center" style={{ padding: "50px", color: "black" }}>
        প্রতিষ্ঠাতার কথা
      </h3>

      <div className="row">
        {TeacherInformation.map(({ src, text, title }) => (
          <>
            <div className="col-md-4" style={{ padding: "25px" }}>
              <Card style={{ width: "18rem", padding: "25px" }}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    প্রতিষ্ঠাতা <br />
                    BCS কনফিডেন্স
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-8">
              <Card.Title
                style={{
                  padding: "25px",
                  textAlign: "justify",
                  fontSize: "large",
                }}
              >
                {text}
              </Card.Title>
              <div className="" style={{textAlign:"center"}}>
                <Button variant="primary" onClick={handleReadMore}>
                  আরও পড়ুন
                </Button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;
