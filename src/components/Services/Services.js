import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Servicedetail from '../Servicedetail/Servicedetail';
import useAuth from '../../hooks/useAuth';

const Services = () => {
    const {service,setService}= useServices();
    const {isLoading}=useAuth();

   
    
    
    return (
        <div style={{hight:"500 px"}} >
            <h3 className="mt-5" >Our Services</h3>

            <div className='container mt-3 mb-5'>
            <Row xs={1} md={3} className="g-2">
                {
                    service?.map(result=><Servicedetail result={result} key={result.id} ></Servicedetail>)
                }
            </Row>
            </div>
            
        </div>
    );
};

export default Services;