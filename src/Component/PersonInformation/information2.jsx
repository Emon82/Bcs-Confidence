import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Information2() {
  const TeacherInformation=[{ 
    title:"লায়ন তাসলিমা গিয়াস",
    src:"https://www.bcs-confidence.com/wp-content/uploads/2022/07/240388107_1728556267332581_4427892206668185670_n-1.jpg",
    text:"প্রিয় শিক্ষার্থীবৃন্দ, আসসালামু আলাইকুম। আশা করি, আপনারা সকলেই ভালাে আছেন ও থাকবেন। বিসিএস কনফিডেন্স ১৯৯১ সালে আমার মরহুম স্বামী লায়ন মু. গিয়াস উদ্দিন নিজ হাতে হাত করেছিলেন, প্রতিষ্ঠার পর থেকেই লায়ন ম, গিয়াস উদ্দিন ও বিসিএস কনফিডেন্স এ দেশের শিক্ষিত বেকারদের কর্মসংস্থানে নিরলসভাবে জীবনের শেষ দিন পর্যন্ত কাজ করে গেছেন। যার ফলে। প্রাতষ্ঠালগ্ন থেকে শুরু করে আজ পর্যন্ত এটি শিক্ষিত বেকার যুবকদের চাকরি পাওয়ার ক্ষেত্রে। গুরুত্বপূর্ণ সামাজিক প্রতিষ্ঠানে পরিণত হয়েছে। ১৭তম বিসিএস থেকে ৩৯তম বিসিএস পর্যন্ত ২৫০০০ এর অধিক বিসিএস ক্যাডার প্রার্থী। কনফিডেলের সেবা গ্রহন করে সফল হয়েছেন। ৪১তম বিসিএস পরীক্ষায় প্রায় ২০০০ জন। ছাত্র-ছাত্রী এই প্রতিষ্ঠান থেকে সেবা নিয়ে লিখিত পরীক্ষায় অংশগ্রহণ করেছেন। স্যারের লায়ন মু. গিয়াস উদ্দিন স্বপ্ন ছিল ৬৪টি জেলায় বিসিএস কনফিডেন্স এর শাখা থাকবে এবং অসংখ্য বিসিএস প্রার্থী কনফিডেন্সের। সেবা পাবে। ৬৪ জেলায় কনফিডেন্সের সেবা নিয়ে ৬৪ জন ডিসি হবে, আমি তাঁর স্বপ্নকে বাস্তবায়ন কতে সর্বাত্মক চেষ্টা করে যাচ্ছি। ইতােমধ্যেই আমরা ৪৪তম ও ৪৫তম বিসিএস এর অভিযাত্রা শুরু করেছি।"
    
    },
  ]

  return (
    <div className="container">
      <h3 className="text-center" style={{padding:"50px",color:"black"}}>চেয়ারম্যান ও ব্যবস্থাপনা পরিচালকের কথা</h3>

    
    <div className="row">
      
      {TeacherInformation.map(({src,text,title})=>(
        <>
        <div className="col-md-4" style={{padding:"25px"}}>
    <Card style={{ width: '18rem',padding:"25px" }}>
      <Card.Img  variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        চেয়ারম্যান ও ব্যবস্থাপনা পরিচালক<br />
BCS কনফিডেন্স
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      
    </Card>
    </div>
    <div className="col-md-8">
    <Card.Title style={{padding:"25px",textAlign:"justify",fontSize:"large"}}>{text}</Card.Title>
        <Button variant="primary">আরও পড়ুন</Button>
        
    </div>
    </>
      ))}
      
    </div>
    </div>
    
  );
}

export default Information2;