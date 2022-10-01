import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';

import '../../styles/footer.css';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" md="4" sm="6">
                        <div className="footer__logo text-start">
                            <img src={logo} alt="logo" />
                            <h5>Tasty Treat</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus</p>
                        </div>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Delivery Time</h5>
                        <ListGroup className="delivery__time-list">
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Monday - Friday</span>
                                <p>8:00am - 11:00pm</p>
                            </ListGroupItem>

                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Saturday - Sunday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Contact</h5>
                        <ListGroup className="delivery__time-list">
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <p>Location: Lai Vung, Dong Thap</p>
                            </ListGroupItem>

                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Phone: 0795831654</span>
                            </ListGroupItem>

                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Email: nguyenhau65466@gmail.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Newsletter</h5>
                        <p>Subscribe our newsletter</p>
                        <div className="newsletter">
                            <input type="email" placeholder="Enter your email" />
                            <span>
                                <i class="ri-send-plane-fill"></i>
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col lg="6" md="6">
                        <p className="copyright__text">
                            Copyright - 2022, website made by Nguyen Hau. All Rights Reserved.
                        </p>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="social__links d-flex align-items-center justify-content-end gap-4">
                            <p className="m-0">Follow: </p>
                            <span>
                                {' '}
                                <Link to="https://www.facebook.com/NHau66z/">
                                    <i class="ri-facebook-line"></i>
                                </Link>{' '}
                            </span>

                            <span>
                                <Link to="https://github.com/NHau66">
                                    <i class="ri-github-line"></i>
                                </Link>
                            </span>

                            <span>
                                {' '}
                                <Link to="https://www.youtube.com">
                                    <i class="ri-youtube-line"></i>
                                </Link>{' '}
                            </span>

                            <span>
                                {' '}
                                <Link to="https://www.linkedin.com">
                                    <i class="ri-linkedin-line"></i>
                                </Link>{' '}
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
