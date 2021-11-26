import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import congo from "../../assets/images/congo.jpg"

const Trainer = () => {
    return (
        
        
                           
        <Col >
        <Card className="shadow p-3 mb-5 bg-body rounded">
        <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={congo} />
        <Card.Body>
          <Card.Title style={{height:"100px"}}></Card.Title>
          <Card.Text>
          <h1>Congratulation ! Appointment booked . You will be notified soon</h1>
          
          </Card.Text>
          <Card.Text>
            
          </Card.Text>
          <Link to={"/home"}>
          <Button variant="outline-primary" className="mt-3">Back to home page</Button>
          </Link>
          
        </Card.Body>
      </Card>
    </Col>
            
    
    );
};

export default Trainer;