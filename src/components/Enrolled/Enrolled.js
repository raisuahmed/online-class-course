import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faShoppingCart   } from '@fortawesome/free-solid-svg-icons';
import './shop.css'
const Shop = (props) => {
    const items = props.data;
    
    
    return (
        <div className="shop-container">
            <Container fluid>
                {/* selected item list  */}
                {
                    items.map( each => 
                        <Row className="enrol-item">
                            <Col sm={3} >
                                <div>
                                    <Image src={each.image} height={70} width={70}></Image>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div>
                                <b>{each.name}</b> <br/>
                               
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div>
                                    <h5>${each.price}</h5>
                                </div>
                            </Col>
                        </Row>
                    )
                }
                
            </Container>
        </div>
    );
};

export default Shop;