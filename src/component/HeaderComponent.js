import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, NavbarBrand, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.toggleNav=this.toggleNav.bind(this)
        this.state={
            isNavOpen: false
        }
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/logo.png' height="40px" width="41px" alt="Dsc-logo"/><strong> DSC BPPIMT</strong></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'>
                                        <span className="fa fa-home fa-lg"></span>Home
                                    </NavLink>                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'>
                                        <span className="fa fa-info fa-lg"></span>About Us
                                    </NavLink>                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/events'>
                                        <span className="fa fa-list fa-lg"></span>Events
                                    </NavLink>                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'>
                                        <span className="fa fa-address-card fa-lg"></span>Contact
                                    </NavLink>                                    
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron className="primary">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>What is <strong>Google Developer Students Club</strong>?</h1>
                                <p>Developer Student Clubs BPPIMT is a prominent student developer community 
                                in Eastern India, based out of BPPIMT campus in Kolkata. The club boasts over 3000+ members from all over the world.</p>
                            </div>
                            
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}
export default Header;