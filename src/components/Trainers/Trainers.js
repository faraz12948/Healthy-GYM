import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import trainer1 from '../../assets/images/trainer1.jpg'
import trainer2 from '../../assets/images/trainer2.jpg'
import trainer3 from '../../assets/images/trainer3.jpg'

const Trainers = () => {
    return (
        <div style={{hight:"500 px"}} >
            <h3 className="mt-5" >Our top trainer</h3>

            <div className='container mt-3 mb-5'>
            <Row xs={1} md={3} className="g-2">
                        
                        <Col>
                            <Card >
                            <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={trainer1} />
                            <Card.Body>
                            <Card.Title >Jhon Doe</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            
                            <Link to="/trainer">
                            <Button variant="outline-primary" className="mt-3">Book appointment</Button>
                            </Link>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                            <Card >
                            <Card.Img className='image-fluid p-2 ' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={trainer2} />
                            <Card.Body>
                            <Card.Title >Jhon Wick</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            
                            <Link to="/trainer">
                            <Button variant="outline-primary" className="mt-3">Book appointment</Button>
                            </Link>
                            </Card.Body>
                        </Card>
                           </Col>
                           <Col>
                            <Card >
                            <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={trainer3} />
                            <Card.Body>
                            <Card.Title >Jhon Cena</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            
                            <Link to="/trainer">
                            <Button variant="outline-primary" className="mt-3">Book appointment</Button>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
            
            
            </div>
            
        </div>
    );
};

export default Trainers;