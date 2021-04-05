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
            <Container >
                <Row className="topRow">
                    <Col>
                    <Container className="proj laurier">
                        <ProjectTabs title={"Laurier"} picUrl={"/assets/laurier.mp4"} techStack={".Net Angular Stripe Redis Postgres"}
                            category={"Ecommerce"}/>
                    </Container>
                    </Col>
                    <Col>
                    <Container className="proj event">
                        <ProjectTabs title={"Eventfriend"} picUrl={"/assets/event.mp4"} techStack={".Net React Stripe Redis MobX SignalR Postgres"}
                            category={"Social Media"}/>
                    </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container className="proj titan">
                            <ProjectTabs title={"Titan"} picUrl={"/assets/titan.mp4"} techStack={"Java Spring JS CSS Postgres"}
                                category={"Project Management"}/>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="proj movinest">
                            <ProjectTabs title={"Movinest"} picUrl={"/assets/movinest.mp4"} techStack={"Python Flask MovieAPI Postgres"}
                                category={"Entertainment"}/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>  
        
    );
}

export default WorkPage;