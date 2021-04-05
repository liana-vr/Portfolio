import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';


function Links(props){
    return(
        <Row>
            <Col>
                <Link className="nav-link" to="/about"><h1>About</h1></Link>
                <Link className="nav-link" to="/"><h1>Connect</h1></Link>
                <Link className="nav-link" to="/"><h1>Work</h1></Link>
            </Col>
        </Row>
       
    );
}

export default Links;