import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Card from "react-bootstrap/Card";

function BranchComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAozcCRyYw_1mmNWjUMMiNxBObXAjoEnPs",
  });
  // const center = useMemo(() => ({ lat: 23.8103, lng: 90.4125 }), []);
  const centre = { lat: 23.8103, lng: 90.4125 };

  const BranchInformation = [
    {
      title: "jadbcvb",
      text: "jdbjdb",
      center: { lat: 23.8103, lng: 90.4125 },
    },
  ];
  return (
    <>
      {BranchInformation.map((item) => (
        <div style={{ height: "400px", width: "200px" }}>
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={item.center}
              zoom={10}
            />
          )}
          <Card style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
            <Card.Title>
              <h2>{item.title}</h2>
            </Card.Title>
            <Card.Text>
              <p>{item.description}</p>
            </Card.Text>
          </Card>
        </div>
      ))}
    </>
    // <div className="container">
    //     {BranchInformation.map(({title,text})=>(
    //         <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>
    //       {text}
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    //     ))}

    // </div>
  );
}

export default BranchComponent;
