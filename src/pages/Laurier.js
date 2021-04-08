import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import TabTopRow from '../components/TabTopRow';



function Laurier(props){
    return(
        <Container style={{padding: '0'}}>
            <TabTopRow title={"Laurier"}></TabTopRow>
            <Row>
                <Col>
                    <Container style={{padding: '0'}} className="aboutProjectContainer">
                    <p>Laurier is an e-commerce B2C web application I designed and built with the Luxury Goods Consumer in mind. I created a multi-project solution using 
                        <mark>ASP.Net Core</mark> and a single-page client app using <mark>Angular</mark> and <mark>TypeScript</mark>. 
                        I used <mark>Stripe</mark> for payment processing and <mark>Redis</mark> for storing the shopping cart. Data is persistent on two separate <mark>PotgreSQL</mark> databases; 
                        one for user identity and the other for product data. Laurier was deployed using <mark>Docker, Linux</mark> and <mark>Digital Ocean</mark> and I used GitHub for version control.</p>
                    <p>This Project followed the <mark>Specification Pattern</mark> and the <mark>Repository + Unit of Work Pattern</mark>.</p>
                    <h5>Functionality: </h5>
                        <ul>
                            <li>Secure Login/Logout and Registration using <mark>ASP.NET Identity</mark></li>
                            <li>Paging, Sorting and Filtering products</li>
                            <li>Search feature</li>
                            <li>View individual product information</li>
                            <li>Add products to shopping cart and store the cart for up tp 7 days</li>
                            <li>Store and update address associated with login</li>
                            <li>Creating orders from shopping cart and pay through secure checkout</li>
                            <li>User-friendly client side error messages</li>
                        </ul>
                        <h5>Features still to come: </h5>
                        <p>At the moment Laurier is not responsive and is only functional on desktop. This is something I am currently working on.</p>

                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Laurier;