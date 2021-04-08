import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Navbarcomp from '../components/Navbar';

function AboutPage(props){
    return(
        <Container className="p-0" fluid={true}>
            <Navbarcomp></Navbarcomp> 
            <Container style={{marginTop: '6vh'}}>
                <h1 className="anim bigText" style={{fontSize: '6em'}}>Tēnā koe</h1>
            </Container>
            <Container className="aboutMe anim">
                <p style={{padding: '2em', fontSize: '1.25em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Congue eu consequat ac felis. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. 
                Scelerisque varius morbi enim nunc faucibus. Fames ac turpis egestas sed tempus. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. 
                Diam quis enim lobortis scelerisque fermentum dui faucibus in. Neque convallis a cras semper auctor neque vitae tempus quam. 
                Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Diam phasellus vestibulum lorem sed risus ultricies tristique. 
                Morbi tristique senectus et netus et malesuada. Elit at imperdiet dui accumsan. Auctor eu augue ut lectus arcu bibendum at varius. 
                Volutpat est velit egestas dui id ornare. Est sit amet facilisis magna. Ac tortor dignissim convallis aenean et tortor at risus viverra. 
                Lectus magna fringilla urna porttitor rhoncus dolor purus. Eleifend donec pretium vulputate sapien nec sagittis.</p>
                <p style={{padding: '2em', paddingTop:'0em', fontSize: '1.25em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Congue eu consequat ac felis. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. 
                Scelerisque varius morbi enim nunc faucibus. Fames ac turpis egestas sed tempus. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. 
                Diam quis enim lobortis scelerisque fermentum dui faucibus in. Neque convallis a cras semper auctor neque vitae tempus quam. 
                Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Diam phasellus vestibulum lorem sed risus ultricies tristique. 
                Morbi tristique senectus et netus et malesuada. Elit at imperdiet dui accumsan. Auctor eu augue ut lectus arcu bibendum at varius. 
                Volutpat est velit egestas dui id ornare. Est sit amet facilisis magna. Ac tortor dignissim convallis aenean et tortor at risus viverra. 
                Lectus magna fringilla urna porttitor rhoncus dolor purus. Eleifend donec pretium vulputate sapien nec sagittis.</p>
            </Container>
        </Container>      
    );
}

export default AboutPage;