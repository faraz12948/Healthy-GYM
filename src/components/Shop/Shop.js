import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dumble from "../../assets/images/dumble.jpg"
import bag from "../../assets/images/bag.jpg"
import mat from "../../assets/images/mat.jpg"
import prop from "../../assets/images/props.jpg"
import supliments from "../../assets/images/suplements.jpg"
import supliment2 from "../../assets/images/suplements2.jpg"
import shoe from "../../assets/images/shoe.jpg"


const Shop = () => {
    return (
        <div className='container mt-3 mb-5'>
            <Row xs={1} md={3} className="g-2">
            <Col >
                <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={dumble} />
                <Card.Body>
                  <Card.Title>Dumble</Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                  <Card.Text>
                    <b>price:30$</b>
                  </Card.Text>
                  
                  <Button variant="outline-primary" className="mt-3">Buy</Button>
                  
        </Card.Body>
      </Card>
    </Col>
            <Col >
                <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={supliments} />
                <Card.Body>
                  <Card.Title >Supliments</Card.Title>
                  <Card.Text>

                  </Card.Text>
                  <Card.Text>
                    <b>price:300$</b>
                  </Card.Text>
                  <Button variant="outline-primary" className="mt-3">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
            <Col >
                <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={mat} />
                <Card.Body>
                  <Card.Title >Gym mat</Card.Title>
                  <Card.Text>

                  </Card.Text>
                  <Card.Text>
                    <b>price:10$</b>
                  </Card.Text>
                  <Button variant="outline-primary" className="mt-3">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
            <Col >
                <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={supliment2} />
                <Card.Body>
                  <Card.Title >Supliments-2</Card.Title>
                  <Card.Text>

                  </Card.Text>
                  <Card.Text>
                    <b>price:400$</b>
                  </Card.Text>
                  <Button variant="outline-primary" className="mt-3">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
            <Col >
                <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={shoe} />
                <Card.Body>
                  <Card.Title >Gym shoe</Card.Title>
                  <Card.Text>

                  </Card.Text>
                  <Card.Text>
                    <b>price:100$</b>
                  </Card.Text>
                  <Button variant="outline-primary" className="mt-3">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
            <Col >
                <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={bag} />
                <Card.Body>
                  <Card.Title >Gym bag</Card.Title>
                  <Card.Text>

                  </Card.Text>
                  <Card.Text>
                    <b>price:50$</b>
                  </Card.Text>
                  <Button variant="outline-primary" className="mt-3">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
               
            </Row>
            </div>
    );
};

export default Shop;