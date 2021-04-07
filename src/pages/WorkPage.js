import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Navbarcomp from '../components/Navbar';
import ProjectTabs from '../components/ProjectTabs';

function WorkPage(props){
    return(
    
        <Container className="p-0" fluid={true}>
            <Navbarcomp></Navbarcomp> 
            <Container className="Portfolio" fluid={true}>
                <Row className="topRow" style={{marginBottom: '13px'}}>
                    <Col sm={12}>
                            <h1 className="anim bigText" style={{fontSize: '6em'}}>Personal Projects</h1>
                    </Col>
                    <Col sm={6}>
                    <Container className="proj laurier anim">
                    {/* <h6 className="category projectButtons">Case Study</h6> */}
                        <ProjectTabs title={"Laurier"} picUrl={"/assets/laurier.mp4"} techStack={".Net, Angular, Stripe, Redis, PostgreSQL"}
                            category={"Ecommerce"}/>
                    </Container>
                    </Col>
                    <Col sm={6}>
                    <Container className="proj event anim">
                    {/* <h6 className="category projectButtons">Case Study</h6> */}
                        <ProjectTabs title={"Eventfriend"} picUrl={"/assets/event.mp4"} techStack={".Net, React, ReactRouter, MobX, SignalR, Cloudinary, PostgreSQL"}
                            category={"Social Media"}/>
                    </Container>
                    </Col>
                    <Col sm={6}>
                        <Container className="proj movinest anim">
                        {/* <h6 className="category projectButtons">Case Study</h6> */}
                            <ProjectTabs title={"Movinest"} picUrl={"/assets/movinest.mp4"} techStack={"Python, Flask, MovieDbAPI, CSS, HTML, PostgreSQL"}
                                category={"Entertainment"}/>
                        </Container>
                    </Col>
                    <Col sm={6}>
                        <Container className="proj titan anim">
                        {/* <h6 className="category projectButtons">Case Study</h6> */}
                            <ProjectTabs title={"Titan"} picUrl={"/assets/titan.mp4"} techStack={"Java, Spring, JavaScript, CSS, HTML, PostgreSQL"}
                                category={"Project Management"}/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>  
        
    );
}

export default WorkPage;