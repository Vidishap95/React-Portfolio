import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
//import avatar from "../../Assets/background.jpeg";
import "../style/About.css";

function About() {
    return (
        //About section
        <section id="about" className="py-5">
            <h1 className="about-heading">About Me</h1>
            <Container>
                <Row>
                    <Col 
                    xs={12}
                    md={4}
                    className="d-flex justify-content-center align-items-cente mb-md-0">
                       {/* <Image src={avatar} rounded fluid className="about-image" />*/}
                    </Col>
                    <Col xs={12} md={8}>
                        <Card>
                            <Card.Body>
                            <Card.Title className="text-center mb-4">
                                About Me
                            </Card.Title>
                            <Card.Text>
                                Write something about me
                            </Card.Text>
                            <Card.Text>
                                write something about me
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

//export about
export default About;