import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import './Header.css';

const Header = (props) => {
    const count = props.data.length;
    let sum=0;
    props.data.map( each => sum+= each.price);

    const review = () => {
        
        window.location.reload();
    } 
    
    return (            
            
        <div>
        <Navbar sticky="top"  className="header" bg="" expand="lg">
            <Navbar.Brand href="#home" style={{color:'white'}}>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-color" style = {{padding:'10px'}} >
                    <Nav.Link href="#Courses" style={{color:'white', fontSize:'20px'}}>Courses</Nav.Link>
                    <Nav.Link href="#Blog" style={{color:'white',fontSize:'20px'}}>Blog</Nav.Link>
                </Nav>
                
                <Form inline>
                    <div>
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>{count}</span><b> ${sum}</b>
                    </div>
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