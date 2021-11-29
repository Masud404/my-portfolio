import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css'

const Menubar = () => {
    return (
        <>
            <Navbar className="nav-bar" collapseOnSelect expand="lg" sticky="top">

                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end nav-items">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#project">Project</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#pricing">
                            <a href="https://drive.google.com/file/d/1xBNo2ReaLkvRvwoPa2dvJSRgUPz2Ct1N/view?usp=sharing" target="_blank">
                                <button className="resume-btn">Download Resume</button>
                            </a>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;