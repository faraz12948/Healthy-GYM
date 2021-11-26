import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const DetailedService = () => {
    const {serviceId} = useParams();
    const {service,setService}= useServices();
   
    // const [service1,setService1] = useState([]);
    // useEffect(()=>{
    //     fetch('./data.json')
    //     .then(res=>res.json())
    //     .then(data=>setService1(data))
    // },[])
    
    let serviceToShow= service.filter(s => s.id==serviceId)
    // console.log(serviceToShow)
    // console.log(serviceId)
    
    return (
        <div className="container shadow-lg p-3 mb-5 bg-body rounded-1" style={{margin:"2px solid grey"}}>
                   

                   <Card>
                    <Card.Img variant="top" src={serviceToShow[0]?.img} />
                    <Card.Body>
                      <Card.Text>
                       <div>
                       <h3>{serviceToShow[0]?.name}</h3>
                       <p>{serviceToShow[0]?.moreDetails}</p>
                       <p><b>price:{serviceToShow[0]?.price}</b></p>
                       </div>
                      </Card.Text>
                      <Link to="/home">
                        <Button variant="outline-primary" className="mt-3">Purchase</Button>
                        </Link>
                    </Card.Body>
                    </Card>
           
            
        </div>
    );
};

export default DetailedService;