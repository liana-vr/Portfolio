import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';


import './App.scss';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Liana van Rensburg',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'Who Is She?', path: '/about'},
        { title: 'Work', path: '/work'},
        { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: "Liana van Rensburg",
        subTitle: "Software Developer"
      },
      about: {
        title: "Who Is She?",
      },
      contact: {
        title: "Get In Touch",
      },
      work: {
        title: "Projects And Case Studies",
      },
      laurier: {
        title: "Laurier",
        about: "About",
        site: "https/laurier.live",
        code: "https://github.com/liana-vr/laurier_project"
      }
    }
  }

  render() {
    return (
      <Container fluid={true} className='p-0 background'>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
        <span className="parti"></span>
          <Router>
            <Container className="p-0" fluid={true}>
              
              <Route path="/" exact render={() => <HomePage title={this.state.home.title}/>}/>
              <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>}/>
              <Route path="/work" exact render={() => <WorkPage title={this.state.work.title}/>}/>
              <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>}/>

            </Container>
            <Footer></Footer>
          </Router>
      </Container>
        
      );
  }
}



export default App;
