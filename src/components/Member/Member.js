import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import thanks from "../../assets/images/Thankyou.png"

const Member = () => {
    return (
        <Col >
        <Card className="shadow p-3 mb-5 bg-body rounded">
        <Card.Img className='container p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={thanks} />
        <Card.Body>
          <Card.Title style={{height:"100px"}}></Card.Title>
          <Card.Text>
          <h1>Congratulation ! You are now a member . You will be notified soon</h1>
          
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

export default Member;