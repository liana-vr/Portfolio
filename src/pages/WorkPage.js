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
                    <Col md={12} sm={12}>
                        <Container>
                            <h1 className="anim" style={{fontSize: '6em'}}>Work</h1>
                        </Container>
                    </Col>
                    <Col md={12} sm={12}>
                    <Container className="proj laurier anim">
                        <ProjectTabs title={"Laurier"} picUrl={"/assets/laurier.mp4"} techStack={".Net Angular Stripe Redis Postgres"}
                            category={"Ecommerce"}/>
                    </Container>
                    </Col>
                    <Col md={12} sm={12}>
                    <Container className="proj event anim">
                        <ProjectTabs title={"Eventfriend"} picUrl={"/assets/event.mp4"} techStack={".Net React Stripe MobX SignalR Postgres"}
                            category={"Social Media"}/>
                    </Container>
                    </Col>
                    <Col md={12} sm={12}>
                        <Container className="proj titan anim">
                            <ProjectTabs title={"Titan"} picUrl={"/assets/titan.mp4"} techStack={"Java Spring JavaScript CSS Postgres"}
                                category={"Project Management"}/>
                        </Container>
                    </Col>
                    <Col md={12} sm={12}>
                        <Container className="proj movinest anim">
                            <ProjectTabs title={"Movinest"} picUrl={"/assets/movinest.mp4"} techStack={"Python Flask MovieDB.API Postgres"}
                                category={"Entertainment"}/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>  
        
    );
}

export default WorkPage;