import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
class About extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>About Us</h3>
                        <hr/>
                    </div>
                </div>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 md-6 m-1"><img src="/assets/google.gif" height="300px" width="300px" className="float-right" alt="google"/>
                                <p>
                                    <strong>A Developer Students Club is a Google recognized student body at a <br/>
                                    college which directly reports to Google for their activities and is supported by the tech giant.<br/>
                                     A DSC conducts workshops, seminars and other fun <br/>
                                     activities which help the students connect with Google.</strong></p>
                                <Button type="submit" color="tertiary"><span className="fa fa-pencil fa-lg"></span> <Link to="/contactus">Become a Member</Link></Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron><br/>
                <h2><strong>CODE OF CONDUCT</strong><hr/></h2>
                <div className="container">
                    <div className="col-12 md-4 m-3">
                    <strong>Why do we have an official Anti-Harassment policy for Developer Student Clubs NSEC events?</strong><br/>
                        <p>    It sets expectations for behavior at the event. Simply having an anti-harassment policy can prevent harassment.<br/>
                            It encourages people to attend who have had bad experiences at other events<br/>
                            It gives event staff/volunteers instructions on how to handle harassment quickly, with minimum amount of disruption for the event.<br/>
                        </p>
                        <strong>Developer Student Clubs NSEC is dedicated to providing a harassment-free event experience for everyone, regardless of:</strong><br/>
                            Gender<br/>
                            Sexual Orientation<br/>
                            Disability<br/>
                            Gender Identity<br/>
                            Age<br/>
                            Race<br/>
                            Religion<br/>
                            Nationality<br/>
                        The above is not an exhaustive list -- we do not tolerate harassment of event spanarticipants in any form.    <br/>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;