import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



function ProjectTabs(props){
    return(
        
        <Tabs defaultActiveKey="home" className='projTab' transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title={props.title}>
                <Row style={{marginTop: '13px'}}>
                    <Col>
                        <h2 className="tabTitle">{props.title}</h2>
                    </Col>
                    <Col>
                        <h5 className="category">{props.category}</h5>
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        <video className='projHome' width="400vw" height="250" autoPlay="autoplay" controls muted loop>
                            <source src={props.picUrl} type="video/mp4"></source>
                        </video>
                    </Col>
                    <Col sm={1} className="techStack">
                        <h5 className="category">Tech</h5>
                        <h6 style={{lineHeight: '1.6em'}}>{props.techStack}</h6>
                    </Col>
                    <Col>
                        <btn><h5 className="category projectButtons">Live Site</h5></btn>
                        <h5 className="category projectButtons">Code</h5>
                    </Col>
                </Row>
            </Tab>
            <Tab eventKey="about" title="About">
                
            </Tab>
            {/* <Tab eventKey="site" title="Live Site">
                
            </Tab>
            <Tab eventKey="code" title="Code">
                
            </Tab> */}
        </Tabs>
            
    );
}

export default ProjectTabs;