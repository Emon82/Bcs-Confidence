import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const BranchInformation = [{
title:"jadbcvb",
text:"jdbjdb"
}]

function BranchComponent() {
  return (
    <div className="container">
        {BranchInformation.map(({title,text})=>(
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        ))}
    
    </div>
  );

}

export default BranchComponent;