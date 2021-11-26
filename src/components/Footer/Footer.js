import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
            <div>
                <div class="footer-dark">
                    <footer>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-md-3 item">
                                    <h3>Services</h3>
                                    <ul>
                                    <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/about">Aboute</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6 col-md-3 item">
                                    <h3>About</h3>
                                    <ul>
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/about">Aboute</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                                <div class="col-md-6 item text">
                                    <h3>Healthy Gym</h3>
                                    <p>physical exercises and activities performed inside, often using equipment, especially when done as a subject at school</p>
                                </div>
                                
                            </div>
                            <p class="copyright">Healthy Gym © 2021</p>
                        </div>
                </footer>
                </div>
            
                 </div>
    );
};

export default Footer;