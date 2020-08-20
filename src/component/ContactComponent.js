import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, Label, FormGroup, Input, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component{
    constructor(props){
        super(props);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
        this.state={
            fullname: '',
            year: '',
            college: '',
            phone: '',
            email: '',
            message: '',
            projects: ''
        };
    }
    handleInputChange(event){
        const target = event.target;
        const value =  event.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event){
        alert("Current state : " + JSON.stringify(this.state))
        event.preventDefault();
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            <div className="row row-content">
            <div className="col-12">
               <h3>Send us your Feedback</h3>
            </div>
             <div className="col-12 col-md-9">
                 <Form onSubmit={this.handleSubmit}>
                     <FormGroup row>
                         <Label htmlFor="fullname" md={2}>Full-Name</Label>
                         <Col md={10}>
                             <Input type="text" id="fullname" name="fullname"
                                 placeholder="Full-Name"
                                 value={this.state.fullname}
                                 onChange={this.handleInputChange} />
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                     <Label htmlFor="phone" md={2}>Phone</Label>
                         <Col md={10}>
                             <Input type="phone" id="phone" name="phone"
                                 placeholder="Phone"
                                 value={this.state.phone}
                                 onChange={this.handleInputChange} />
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="email" md={2}>Email</Label>
                         <Col md={10}>
                             <Input type="email" id="email" name="email"
                                 placeholder="Email"
                                 value={this.state.email}
                                 onChange={this.handleInputChange} />
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                     
                         <Col md={{size: 2, offset: 2}}>
                             <Input type="select" name="year"
                                     value={this.state.year}
                                     onChange={this.handleInputChange}>
                                 <option>1st.</option>
                                 <option>2nd</option>
                                 <option>3rd</option>
                                 <option>4th</option>
                             </Input>
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="message" md={2}>Why want to join?</Label>
                         <Col md={10}>
                             <Input type="textarea" id="message" name="message" rows="6"
                                 value={this.state.message}
                                 onChange={this.handleInputChange}></Input>
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="projects" md={2}>Mention your projects</Label>
                         <Col md={10}>
                             <Input type="textarea" id="projects" name="projects"
                                 rows="6"
                                 value={this.state.projects}
                                 onChange={this.handleInputChange}></Input>
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Col md={{size: 10, offset: 2}}>
                             <Button type="submit" color="success">
                                 Submit
                             </Button>
                         </Col>
                     </FormGroup>
                 </Form>
             </div>
        </div>
        </div>

        )
    }
}
export default Contact;