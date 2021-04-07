import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import Axios from 'axios';
import Navbarcomp from '../components/Navbar';


class ContactPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            formErrors: {email: ''},
            emailValid: false,
            messageValid: false,
            disabled: false,
            messageSent: null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true,
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success){
                    this.setState({
                        disabled: true,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    })
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                })
            })
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.messageValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    render(){
        return(
            <Container className="p-0" fluid={true}>
                <Navbarcomp></Navbarcomp> 
                <Container style={{marginTop: '6vh'}}>
                    <h1 className="anim bigText" style={{fontSize: '6em'}}>Connect</h1>
                </Container>
                <Container className="contactMe anim">
                    <Form onSubmit={this.handleSubmit} style={{width: '50vw', marginLeft: 'auto', marginRight: 'auto'}}>
                        <Form.Group className={this.errorClass(this.state.formErrors.email)}>
                            <Form.Label htmlFor="full-name" style={{marginTop: '2em', fontSize: '1.5em'}}>Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email" style={{fontSize: '1.5em'}}>Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="message" style={{fontSize: '1.5em'}}>Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="6"value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>
                        
                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled || !this.state.email || !this.state.message} 
                            style={{fontSize: '1.2em'}}>SEND</Button>
                        {this.state.emailSent === true && <p className="d-inline success" style={{fontSize: '1.2em', marginTop: '1em'}}>Thank you for reaching out! I will get back to you soon.</p>}
                        {this.state.emailSent === false && <p className="d-inline notSent" style={{fontSize: '1.2em'}}>Message not sent.</p>}
                    </Form>
                </Container>
            </Container>  
        
                
        );
    }
}

export default ContactPage;