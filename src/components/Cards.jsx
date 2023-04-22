import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = ( { img, title, descript} ) => {
  return (
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={img} />

        <Card.Body>
          <Card.Title className="colorFont"> {title} </Card.Title>
          <Card.Text className="colorFont"> {descript} </Card.Text>
          <Button variant="secondary">Mas características</Button>{' '}
        </Card.Body>
      </Card>
  );
}

export default Cards;