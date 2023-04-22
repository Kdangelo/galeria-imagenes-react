import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const Cards = ( { img, title, descript} ) => {
  return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />

        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text> {descript} </Card.Text>
        </Card.Body>
      </Card>
  );
}

export default Cards;