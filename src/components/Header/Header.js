import React from 'react';

import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import './Header.css';

const Header = (props) => {


    const review = () => {
        
        window.location.reload();
    } 
    
    return (            
            
        <div>
        <Navbar sticky="top"  className="header" bg="" expand="lg">
            <Navbar.Brand href="#home" style={{color:'white'}}>HOME</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-color" style = {{padding:'10px'}} >
                    <Nav.Link href="#Courses" style={{color:'white', fontSize:'20px'}}>COURSES</Nav.Link>
                    <Nav.Link href="#Contact" style={{color:'white',fontSize:'20px'}}>CONTACT US</Nav.Link>
                </Nav>
                
                <Form inline>
                    
                    <div>
                       
                            <Button onClick={review} className="btn bg-primary">Select Again </Button>
                        </div>
                </Form>
                
            </Navbar.Collapse>
        </Navbar>
     
    </div>
    
    );
};

export default Header;