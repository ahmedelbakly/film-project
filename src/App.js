import { useState, useEffect } from "react";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import NavBar from "./components/NavBar.jsx";
import FilmList from "./components/FilmList";
import axios from "axios";
import Loading from "./components/loading";
import { data } from "./data";

function App() {
  const [films, setFilms] = useState(data.items);
  const [loading, setLoading] = useState(false);
  console.log(films);
  // const options = {
  //   method: "GET",
  //   url: "https://movies-app1.p.rapidapi.com/api/movies",
  //   headers: {
  //     "X-RapidAPI-Key": "0b4230c6cfmsh9711580c28626f1p10fcbejsn0193c16c40b5",
  //     "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  //   },
  // };

  //  useEffect(() => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setFilms(response.data.results);

  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  //  }, []);
  console.log(films);

  return (
    <div className="">
      <NavBar films={films} setFilms={setFilms} />

      <Container fluid className="pt-3 pb-5 ps-4 pe-4">
    {    loading===true? <Loading />: <FilmList films={films} />}
      </Container>
    </div>
  );
}

export default App;
