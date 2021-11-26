import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Membership = () => {
    return (
        <div className="container">
            <div className="my-5">
                <h3 style={{color:"goldenrod"}} >Membership packeges</h3>
            </div>
            <div >
            
            

            
        
                        
                    
                        <div class=" card text-white bg-secondary mb-3 mt-3" style={{maxwidth:"18rem"}}>
                         <div class="card-header">Begainner</div>
                         <div class="card-body">
                           <h5 class="card-title">15$</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <Link to="/member">
                            <Button variant="outline-light" className="mt-3">Purchase</Button>
                            </Link>
                         </div>
                        </div>
                        <div class="col card text-dark bg-info mb-3" style={{maxwidth:"18rem"}}>
                         <div class="card-header">Pro</div>
                         <div class="card-body">
                           <h5 class="card-title">70$</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <Link to="/member">
                            <Button variant="outline-dark" className="mt-3">Purchase</Button>
                            </Link>
                         </div>
                        </div>
                        <div class="col card text-white bg-success mb-3" style={{maxwidth:"18rem"}}>
                         <div class="card-header">VIP</div>
                         <div class="card-body">
                           <h5 class="card-title">100$</h5>
                           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           <Link to="/member">
                            <Button variant="outline-dark" className="mt-3">Purchase</Button>
                            </Link>
                         </div>
                        </div>
                        
                        
            
            
            
            </div>
            
        </div>
        
            
        
    );
};

export default Membership;