import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './shop.css'
const Shop = (props) => {
    const items = props.data;
    console.log("enrol", typeof(items));
    
    return (
        <div className="shop-container">
            <Container fluid>
                {/* selected item list  */}
                {
                    items.map( every => 
                        <Row className="enrol-item">
                            <Col sm={3} >
                                <div>
                                    <Image src={every.image} height={50} width={50}></Image>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div>
                                <b>{every.name}</b> <br/>
                               
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div>
                                    <h5>${every.price}</h5>
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