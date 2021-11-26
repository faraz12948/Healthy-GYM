import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import health1 from "../../assets/images/health1.jpg"
import health2 from "../../assets/images/health2.jpg"
import health3 from "../../assets/images/health3.jpg"

const Blogs = () => {
    return (
        <div className="container my-5">
            <div >
                <h3>Health Blogs</h3>
            </div>
            <Row xs={1} md={3} className="g-2">
            <Col >
                <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={health1} />
                <Card.Body>
                  {/* <Card.Title style={{height:"100px"}}></Card.Title> */}
                  <Card.Text>
                  Most of us are well aware of the many health benefits of exercise, but finding the discipline to not only start training but to also stick with it is often the hard part.

                  Whether you’re at the beginning of your fitness journey or in desperate need of some motivation to keep going, you’ll find it on these blogs — and in their educational, inspirational, and empowering content.
                      
                  Get ready to sweat!

                  </Card.Text>
                  <Card.Text>

                  </Card.Text>

                </Card.Body>
                  </Card>
                </Col>
            <Col >
                <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={health2} />
                <Card.Body>
                  {/* <Card.Title style={{height:"100px"}}></Card.Title> */}
                  <Card.Text>
                  Most of us are well aware of the many health benefits of exercise, but finding the discipline to not only start training but to also stick with it is often the hard part.

Whether you’re at the beginning of your fitness journey or in desperate need of some motivation to keep going, you’ll find it on these blogs — and in their educational, inspirational, and empowering content.
    
Get ready to sweat!

                  </Card.Text>
                  <Card.Text>

                  </Card.Text>

                </Card.Body>
                  </Card>
                </Col>
            <Col >
                <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={health3} />
                <Card.Body>
                  {/* <Card.Title style={{height:"100px"}}></Card.Title> */}
                  <Card.Text>
                  Most of us are well aware of the many health benefits of exercise, but finding the discipline to not only start training but to also stick with it is often the hard part.

Whether you’re at the beginning of your fitness journey or in desperate need of some motivation to keep going, you’ll find it on these blogs — and in their educational, inspirational, and empowering content.
    
Get ready to sweat!

                  </Card.Text>
                  <Card.Text>

                  </Card.Text>

                </Card.Body>
                  </Card>
                </Col>
               
            </Row>
            
        </div>
    );
};

export default Blogs;