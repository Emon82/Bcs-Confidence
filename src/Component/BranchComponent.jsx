import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Card from "react-bootstrap/Card";
import "./index.css"
import Button from 'react-bootstrap/Button';

function BranchComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAozcCRyYw_1mmNWjUMMiNxBObXAjoEnPs",
  });
  // const center = useMemo(() => ({ lat: 23.8103, lng: 90.4125 }), []);
  // const centre = { lat: 23.8103, lng: 90.4125 };

  const BranchInformation = [
    {
      title: "কর্পোরেট শাখা",
      text: "২৬, ইন্দিরা রোড, মা মেডিসিন ও UCB Bank বুথের ২য় তলা, ফার্মগেইট, ঢাকা",
      center: { lat: 23.8103, lng: 90.4125 },
    },
    {
      title: "নীলক্ষেত শাখা",
      text: "5th Floor, Rafin Plaza, 3/B Mirpur Rd Dhaka 1205",
      center: { lat: 23.8103, lng: 90.4125 },
    },
    {
      title: "মালিবাগ শাখা",
      text: "4th Floor, Dhaka Science College Bulding, Hosaf Tower Ln, Dhaka 1215",
      center: { lat: 23.8103, lng: 90.4125 },
    },
    {
      title: "জবি ক্যাম্পাস",
      text: "N/A",
      center: { lat: 23.8103, lng: 90.4125 },
    },
    {
      title: "মিরপুর-১ শাখা",
      text: "Mukto Bangla, BCS Confidence (5th Floor, 33&34 Space)Dhaka, 1216",
      center: { lat: 23.8103, lng: 90.4125 },
    },
    {
      title: "মিরপুর-১০ শাখা",
      text: "3rd(floor), Nawab Mansion, Folpotti Masjid Goli, Mirpur 10 Roundabout, Dhaka 1216",
      center: { lat: 23.8103, lng: 90.4125 },
    },
  ];
  return (
    <>
    <div className="container">
      <div className="row">
      
        {BranchInformation.map((item) => (
          <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{height: "580px", width: "350px",margin:"25px",borderRadius:"20px"}}>
          <div style={{height:"350px",padding:"20px"}}>
            {!isLoaded ? (
              <h1>Loading...</h1>
            ) : (
              <GoogleMap 
              mapContainerClassName="map-container " 
                center={item.center}
                zoom={10}
              />  
            )}
             <Card.Title>
              <h2 style={{textAlign:"center",padding:"15px"}}>{item.title}</h2>
            </Card.Title>
            <Card.Text>
              <p style={{textAlign:"center"}}>{item.text}</p>
            </Card.Text>
            <div className="d-flex">
          <Button style={{margin:"0 auto"}} variant="primary">ফোন করুন</Button>
          </div>
          </div>
          </Card>
        ))}
        

      
      </div>
      </div>
    </>
  );
}

export default BranchComponent;
