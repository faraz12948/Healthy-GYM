import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import about from "../../assets/images/about.jpg"

const About = () => {
    return (
        <div className='container' style={{height:'300px'}}>
            <h1 style={{margin:'30px'}}> <span style={{color:'blue'}}>HealthyGym</span></h1>
            <p>Body Building, the original LES MILLS barbell class, will sculpt, tone and strengthen your entire body, fast! Focusing on low weight loads and high repetition movements, you'll burn fat, gain strength and quickly produce lean body muscle conditioning. All the benefits of working with weighs in one action packed, highly physical class. The world’s fastest way to get in shape. Find your Lessmills Bodypump class here.
            </p>

            <NavLink to='/home'>
              <Button variant="outline-danger">Back to Home</Button>
            </NavLink>
           </div>
    )
        
            
            
        
    
};

export default About;