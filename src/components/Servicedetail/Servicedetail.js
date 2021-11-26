import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Servicedetail = (props) => {
    const{id,name,img,price,details,moreDetails} = props.result;
    
    
    return (
        <Col >
        <Card className="shadow p-3 mb-5 bg-body rounded">
        <Card.Img className='image-fluid p-2' style={{height:"300px" , borderRadius:"15px"}} variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{height:"100px"}}>{name}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Card.Text>
            <b>price:{price}</b>
          </Card.Text>
          <Link to={`/detailsservice/${id}`}>
          <Button variant="outline-primary" className="mt-3">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Servicedetail;