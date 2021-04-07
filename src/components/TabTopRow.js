import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

function TabTopRow(props){
    return(
        <Row style={{marginTop: '13px'}}>
            <Col>
                <h2 className="tabTitle">{props.title}</h2>
            </Col>
            <Col>
            </Col>
            <Col>
                <h6 className="category projectButtons liveSite">Live Site</h6>
                <h6 className="category projectButtons code" style={{marginRight: '1em'}}>Code</h6>
            </Col>
        </Row>
    )
}

export default TabTopRow;