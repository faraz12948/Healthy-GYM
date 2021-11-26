import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='container' style={{width:'60%' , backgroundColor:'#f1dfd1' , padding:'30px' , marginTop:'20px' , marginBottom:'20px',borderRadius:'8px'}}>
             <h3>Contact Us</h3>
            <Form >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Type here</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                
            </Form>
            
                <Button variant="outline-danger">Send</Button>
                
            
        </div>
    );
};

export default Contact;