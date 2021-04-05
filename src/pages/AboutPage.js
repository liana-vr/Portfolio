import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Navbarcomp from '../components/Navbar';

function AboutPage(props){
    return(
        <Container className="p-0" fluid={true}>
            <Navbarcomp></Navbarcomp> 
            
        </Container>      
    );
}

export default AboutPage;