import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import TabTopRow from '../components/TabTopRow';

function Eventfriend(props){
    return(
        
        <Container style={{padding: '0'}}>
            <TabTopRow title={"Eventfriend"}></TabTopRow>
            <Row>
                <Col>
                    <Container style={{padding: '0'}} className="aboutProjectContainer">
                    <p>Eventfrined is a social media application designed to make event organising easier and more fun. 
                        I built this application with a multi-project solution using <mark>ASP.Net Core</mark> and a <mark>React</mark> client app with <mark>Typescript</mark>. 
                        For state management I used <mark>MobX</mark>. I used <mark>SignalR</mark> to enable real time web communication on a 
                        <mark>live chat</mark> feature and <mark>Cloudinary</mark> to create a <mark>photo upload</mark> widget 
                        including a Dropzone and a Cropper for resizing. </p>
                    <p>This project was based on <mark>Clean Architecture and the CQRS + Mediator Pattern</mark>.</p>
                    <h5>Functionality: </h5>
                        <ul>
                            <li>Secure Login/Logout and Registration using <mark>ASP.NET Identity</mark></li>
                            <li>Paging, Sorting and filtering events</li>
                            <li>Follow/Unfollow other users</li>
                            <li>Upload, resize/crop images</li>
                            <li>Select an image as profile image</li>
                            <li>Join/Cancel event as an attendee</li>
                            <li>Create/Cancel event as a host</li>
                            <li>View guest list for event</li>
                            <li>Comment/Livechat on event page</li>
                            <li>View a user's events</li>
                            <li>View a user's friend list</li>
                            <li>View a user's uploaded images</li>
                        </ul>
                    <h5>Features still to come: </h5>
                        <ul>
                            <li>Search feature</li>
                            <li>Invite feature</li>
                            <li>Private event feature</li>
                            <li>Link to other social media apps to share event</li>
                        </ul>
                    </Container>
                </Col>
            </Row>
        </Container>

    );
}

export default Eventfriend;