import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import TabTopRow from '../components/TabTopRow';

function Titan(props){
    return(
        <Container style={{padding: '0'}}>
            <TabTopRow title={"Titan"}></TabTopRow>
            <Row>
                <Col>
                    <Container style={{padding: '0'}} className="aboutProjectContainer">
                    <p>Titan is a project management tool designed to track and manage projects and team members. 
                        This web application allows users to view lists of all current projects and employees
                        as well as the status of the project and the amount of projects assigned to each employee. 
                        <mark>Admin authentication</mark> is required in order to create, update or delete new projects and employees.
                        Admin users are also able to assign employees to a project when it is created. Titan was built using <mark>Java, Spring,
                        Tymeleaf, JavaScript, Html and CSS</mark>. Data for this project is persistent on a <mark>PostgreSQL</mark> database which is hosted on <mark>AWS</mark>.
                    </p>
                        <h5>Functionality: </h5>
                        <ul>
                            <li>Secure Login/Logout and Registration using <mark>Spring Security</mark></li>
                            <li>View dashboard containing lists of all Projects and employees</li>
                            <li>View employee detais</li>
                            <li>View project details</li>
                            <li>Create new project</li>
                            <li>Assign employees to new project</li>
                            <li>Update project status</li>
                            <li>Delete Project</li>
                            <li>Create new employee</li>
                            <li>Update employee details</li>
                            <li>Delete employee</li>
                        </ul>
                        <h5>Features still to come: </h5>
                        <ul>
                            <li>Making the application responsive</li>
                            <li>Adding more options project updates and progress</li>
                            <li>Add specific tasks assigned to employee</li>
                        </ul>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Titan;