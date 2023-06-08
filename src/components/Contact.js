import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../style/Contact.css";

function Contact () {
    //set initial state for name, emai, message, and form error
    const [name, setName] = useState("");
    const [email, setEmail] = useState ("");
    const [message, setMessage] = useState ("");
    const [nameError, setNameError] = useState (false);
    const [emailError, setEmailError] = useState (false);
    const [messageError, setMessageError] = useState (false);
    const [messageSent, setMessageSent] = useState (false);

    // handle name input changes
    const handleNameChange = (error) => {
        setName(error.target.value);
        setNameError(false);
    };

    //handle email input changes
    const handleEmailChange = (error) => {
        setEmail(error.target.value);
        setEmailError(false);
    };

    //handle message input changes
    const handleMsgChange = (error) => {
        setMessage(error.target.value);
        setMessageError(false);
    };

    //validate email format
    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    //handle form submission
    const handleSubmit = (error) => {
        error.preventDefault ();
        let valid = true;
    

    //validate input fields and set error if necessary
    if (name.length <= 5) {
        setNameError(true);
        valid = false;
    }
    if (!validateEmail(email)) {
        setEmailError(true);
        valid = false;
    }
    if (message.length < 20) {
        setEmailError(true);
        valid = false;
    }

    // if all fields are valid, log form data and reset inputs
    if (valid) {
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        setName("");
        setEmail("");
        setMessage("");
        setMessageSent("");
    }
};

// Render the contact form
return (
    <section id="contact">
        <Container>
            <Row>
                <Col lg={8} className="mx-auto">
                    <h2 className="contact-header">Contact Info</h2>
                    {messageSent && (
                    <div className="alert alert-success" role="alert"> 
                    Your message has been sent successfully!
                    </div>
                    )}
                    <Form onSubmit={handleSubmit} noValidate>
                        <Form.Group>
                            <Form.Label htmlFor="name">Name:</Form.Label>
                            <Form.Control
                            type="text"
                            className={nameError ? "is-invalid" : ""}
                            id="name"
                            name="name"
                            onChange={handleNameChange}
                            required
                            />
                            {nameError && (
                                <div className="invalid-feedback">
                                    Name must be more than 5 characters
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email:</Form.Label>
                            <Form.Control
                            type="email"
                            className={emailError ? "is-invalid" : ""}
                            id="email"
                            name="email"
                            onChange={handleEmailChange}
                            required
                            />
                            {emailError && (
                                <div className="invaild-feedback">
                                    A valid email is required
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="message">Message:</Form.Label>
                            <Form.Control 
                            as="textarea"
                            className={messageError ? "is-invalid" : "" }
                            id="message"
                            name="message"
                            rows="5"
                            value={message}
                            onChange={handleMsgChange}
                            />
                            {messageError && (
                                <div className="invalid-feedback">
                                    Message must be 20 characters
                                </div>
                            )}
                        </Form.Group>
                        <Button type="submit" className="custom-send-message-button">
                            Send Message
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    </section>
   );
}


//export contact
export default Contact;