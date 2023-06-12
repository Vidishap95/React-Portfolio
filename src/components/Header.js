import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Header.css";


//header components
function Header () {
    return (
        //header component
        <>
        <Container fluid className="bg-dark">
            <Row className="justify-conent-center text-center mb-0">
                <Col className="="pb-0>
                    <h1 className="text-white" style={{ fontSize="70px"}}>
                        <FontAwesomeIcon
                        icon={faChessKnight}
                        className="fa-knight"
                        size="xl"
                        style={{ color: "#white"}}
                        />
                        <Link
                        to="/Vidishap95/React-Portfolio"
                        className="text-white text-decoration-none"
                        style={{ margin:"0"}}
                        ></Link>
                    </h1>
                </Col>
            </Row>
            </Container>
            <Navigation />
            </>
    );
}

//export header
export default Header;