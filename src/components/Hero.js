import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';


function Hero(props){
    return(
    

        <Row>
            <Col md={12} sm={12}>
                <Link to="/about"><h1 className="Liana">{props.title}</h1></Link>
                <Link to="/work"><h1 className="Software">{props.subTitle}</h1></Link>
                <Link to="/contact"><h1 className="connect">Connect</h1></Link>
                
            </Col>
        </Row>
                    
    );
}

export default Hero;