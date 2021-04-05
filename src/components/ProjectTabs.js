import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



function ProjectTabs(props){
    return(
        
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title={props.title}>
                <Row>
                    <Col>
                        <video className='projHome' width="400" height="250" autoplay="autoplay" controls muted loop>
                            <source src={props.picUrl} type="video/mp4"></source>
                        </video>
                    </Col>
                    <Col className="techStack">
                        <h6>{props.techStack}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>{props.title}</h3>
                    </Col>
                    <Col>
                        <h5 style={{marginTop: '10px', marginLeft: '-30px'}}>{props.category}</h5>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="about" title="About">
                
            </Tab>
            <Tab eventKey="site" title="Live Site">
                
            </Tab>
            <Tab eventKey="code" title="Code">
                
            </Tab>
        </Tabs>
            
    );
}

export default ProjectTabs;