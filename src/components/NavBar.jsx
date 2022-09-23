import React, { useState } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { data } from "../data";

const NavBar = ({ films, setFilms }) => {
 
  return (
    <div>
      <Navbar bg="black" expand="lg"  sticky="top" >
        <Container fluid>
          <Navbar.Brand className="logo">
            <img src="/images/Netflix_logo.svg.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="text-white bg-danger me-3"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto  my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 p-2 fs-4 ps-4 pe-4 search rounded-4"
                aria-label="Search"
               onChange={(e)=>{
                const filterArray =data.items.filter(i=>i.title.toLowerCase().includes(e.target.value.toLowerCase()))
                e.target.value!==""?setFilms(filterArray):setFilms(data.items)

               }}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
