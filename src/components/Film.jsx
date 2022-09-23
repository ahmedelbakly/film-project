import React from "react";
import { Col, Card } from "react-bootstrap";

const film = ({ film }) => {
  return (
    <Col sm={6} md={4} lg={3} className="mb-5">
      <Card className="bg-dark text-white card">
        <Card.Img fluid className="card-img" src={film.image} alt="" />
        <Card.ImgOverlay className=" fs-4 card-info text-center ">
          <Card.Title>{film.title}</Card.Title>
          <Card.Text>
            <Card.Text>pro:{film.year}</Card.Text>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default film;
