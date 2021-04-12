import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Laurier from '../pages/Laurier';
import Eventfriend from '../pages/Eventfriend';
import Titan from '../pages/Titan';
import Movinest from '../pages/Movinest';
import 'font-awesome/css/font-awesome.min.css';
import TabTopRow from './TabTopRow';

function ProjectTabs(props){

    const laurier = props.laurier;
    const eventfriend = props.eventfriend;
    const titan = props.titan;
    const movie = props.movie;

    return(
        
        <Tabs defaultActiveKey="home" className='projTab' transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Glance">
                <TabTopRow title={props.title} responsive={props.responsive}></TabTopRow>
                <Row>
                    <Col sm={6}>
                        <video className='projHome' width="400vw" height="250" autoPlay="autoplay" controls muted loop>
                            <source src={props.picUrl} type="video/mp4"></source>
                        </video>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <div className="techStack">
                            <p className="category" style={{lineHeight: '1.6em', padding: '1em'}}>{props.techStack}</p>
                        </div>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="about" title="Details">
                {props.title === "Laurier" 
                    ? <Laurier/>
                    : (props.title === "Eventfriend"
                        ? <Eventfriend/>
                        : (props.title === "Titan"
                            ? <Titan/> 
                            : <Movinest/>))
                }
                <div style={{marginLeft: 'auto', marginRight:'auto', paddingTop: '0px', textAlign: 'center'}} >
                    <i class="fa fa-chevron-down"></i>
                </div>
            </Tab>
            <Tab eventKey="media" title="Media">

            </Tab>
        </Tabs>
            
    );
}

export default ProjectTabs;