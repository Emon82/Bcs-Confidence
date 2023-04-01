import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Information3() {
  const TeacherInformation = [
    {
      title: "মু. জিয়াউল ইসলাম",
      src: "https://www.bcs-confidence.com/wp-content/uploads/2022/07/ziasir-286x300.png",
      text: "প্রিয় বিসিএস প্রত্যাশী ভাই ও বােন,আসসালামু আলাইকুম। আশা করি, সবকিছু মিলে সবকিছু ছাড়িয়ে ভালােই আছেন। প্রিয় পরীক্ষার্থীবৃন্দ, একটা বিষয় হয়তাে অনেকেই অবগত আছেন তবুও শেয়ার করতে ভালাে লাগছে। যে, বিসিএস ক্যাডার প্রত্যাশিদের জন্য সবচেয়ে বড় সুখবর হলাে ২০০৮ সাল থেকে প্রায় প্রতিবছরই বিসিএস পরীক্ষার সার্কুলার হচ্ছে। সরকার ও বাংলাদেশ সরকারি কর্মকমিশনের সমন্বিত উদ্যোগের। ফল ভােগ করছেন সদ্য গ্রাজুয়েট ছাত্র-ছাত্রীরা। সম্প্রতি ৪২তম স্পেশাল বিসিএস এ চুড়ান্ত ফলাফল প্রকাশিত হয়ে প্রাণের প্রতিষ্ঠান “বিসিএস কনফিডেন্স” থেকে ১০৫৭ জন সফলতার সাথে সিভিল সার্জন পদে নিয়ােগপ্রাপ্ত/গেজেটভুক্ত হয়েছেন। ৪০তম বিসিএস প্রার্থীদের ভাইভা চলমান এবং সম্প্রতি ৪১তম লিখিত পরীক্ষা সম্পন্ন হলাে। ৪৩তম প্রিলি. পরীক্ষা সম্পন্ন হয়ে লিখিত পরীক্ষার জন্য প্রস্তুতি গ্রহণ চলছে এরই মধ্যে ৪৪তম বিসিএস প্রিলি, সার্কুলার প্রকাশিত হয়েছে। বন্ধুরা, কাজে লাগানাের জন্য এই এক অনন্য সুযােগ!",
    },
  ];

  return (
    <div className="container">
      <h3 className="text-center" style={{padding:"50px",color:"black"}}>উপ-ব্যবস্থাপনা পরিচালকের কথা</h3>

  
    <div className="row">
      {TeacherInformation.map(({ src, text, title }) => (
        <>
          <div className="col-md-4" style={{ padding: "25px" }}>
            <Card style={{ width: "18rem", padding: "25px" }}>
              <Card.Img variant="top" src={src} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  উপ-ব্যবস্থাপনা পরিচালক
                  <br />
                  BCS কনফিডেন্স
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
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
            <Button variant="primary">আরও পড়ুন</Button>
          </div>
        </>
      ))}
    </div>
    </div>
  );
}

export default Information3;
