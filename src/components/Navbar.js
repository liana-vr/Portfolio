import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';

import '../App.scss';


function Navbarcomp (props){
    return(
        <Container className="p-0" fluid={true}>
            <Navbar expand="lg">
            <Navbar className="liana bigText">Liana van Rensburg</Navbar>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/work">Work</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

        </Container>
    );

}

export default Navbarcomp;