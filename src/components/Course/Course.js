import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,  faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    
    return (
        <div>
            <Container>
                <div className="course-list">
                    <Row>
                        {/* course  items */}
                        {
                            props.data.map(every =>
                                <div className="item">
                                    <Col md={2}>
                                        <div>
                                            <Image src={every.image} height={70} width={70}></Image>
                                        </div>
                                    </Col>
                                    <Col md={12} >
                                        <div>
                                            <h5>{every.name}</h5>
                                            
                                            <FontAwesomeIcon className  = 'style' icon={ faStar} />
                                             <FontAwesomeIcon className  = 'style' icon={faStar} />
                                            <FontAwesomeIcon className  = 'style' icon={faStar} />
                                            
                                            <FontAwesomeIcon className  = 'style' icon={faStarHalfAlt}/>
                                            <span> {every.rating} </span> 
                                            <br/>
                                            
                                            <b>By : {every.by}</b>
                                            <h3> <span style ={{color:'blue'}}>${every.price}</span></h3>
                                             <span>{every.students}k students</span>
                                            <br></br>
                                            <Button className="button" onClick={() => props.clickHandle({ every })} > Enrol Now </Button>
                                        </div>
                                    </Col>
                                </div>
                            )
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Course;