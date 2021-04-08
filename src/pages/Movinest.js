import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import TabTopRow from '../components/TabTopRow';

function Movinest(props){
    return(
        <Container style={{padding: '0'}}>
            <TabTopRow title={"Movinest"}></TabTopRow>
            <Row>
                <Col>
                    <Container style={{padding: '0'}} className="aboutProjectContainer">
                    <p>Movinest is a <mark>fully responsive</mark> web application that helps you find new, interesting movies and TV shows, through connecting with
                        people in your community rather than relying on an algorithm. As a user, you are able to <mark>search the extensive databse</mark> thanks to <mark>themoviedb.org API</mark> 
                        and add your favourite shows and movies to your profile. You can also follow friends or people you think have good taste in content and add things 
                        from their profile to your watchlist for a time in the future when you need something to watch.</p>
                        <p>There are no notifications of any kind and you don't know who follows you or who added something from your profile to their watchlist. 
                        These were deliberate decisions to create a space that functions more as a resource, rather than a social network. 
                        I built this project using <mark>Python, Flask, HTML, CSS</mark> and data is persstent on a <mark>ralational PostgrSQL database</mark>. Movinest was deployed on Heroku and 
                        I used GitHub for version control. </p>
                        <h5>Functionality: </h5>
                        <ul>
                            <li>Secure Login/Logout and Registration using <mark>Flask-Login</mark></li>
                            <li>Search feature</li>
                            <li>Follow/Unfollow other users</li>
                            <li>Select new profile image</li>
                            <li>Add/Remove content from another user to watchlist</li>
                            <li>Use MovieDb API to search for movies and TV Shows</li>
                            <li>Add review and rating for show or movie</li>
                            <li>Add/Remove Content from profile</li>
                            <li>Update account details</li>
                            <li>Delete account</li>
                            <li>User-friendly client side error messages</li>
                        </ul>
                        <h5>What's next: </h5>
                        <p>I am not happy with the performance of this application. The overall load time is quite long and it is not efficient. 
                            I am currently rebuiding it with .Net and React.</p>
                    </Container>
                </Col>
            </Row>
        </Container>
        
    );
}

export default Movinest;