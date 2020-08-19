import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component
{
    render()
    {
        return(
        <div className="footer">
            <div className="container">
            
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
                        HALDIRAM, KAIKHALI,
                        AIR-PORT,
                        KOLKATA<br/>
                        <i className="fa fa-phone"></i>: 8017406056<br />
                        <a  href="http://www.bppimt.ac.in/"><i className="fa fa-home"></i> College</a>
                    </address>
                </div>
                    <div className="col-12 col-sm-4 justify-content-center"><h5 className="justify-content-center">Follow Us</h5>
                        <div className="justify-content-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-github" href="http://github.com/"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <img src="/assets/logo.png" height="40px" width="41px" alt="Dsc-logo"/><strong> DSC BPPIMT</strong>
                        
                    </div>
                </div>
                
            </div>
        </div>
        )
    }
}

export default Footer;