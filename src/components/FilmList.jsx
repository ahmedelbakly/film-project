import React from "react";
import { Row } from "react-bootstrap";
import Film from "./Film";

const FilmList = ({ films }) => {
  return (
    <Row className="mt-3">
  {  films.length>0 ?(films.map(f =><Film film={f} />)):(<h1>no films now</h1>)}
    </Row>
  );
};

export default FilmList;
