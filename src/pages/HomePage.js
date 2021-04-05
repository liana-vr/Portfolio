import React from 'react';
import Hero from '../components/Hero';

function HomePage(props){
    return(
        <Hero title={props.title} subTitle={"Software Developer"}></Hero>
    );
}

export default HomePage;