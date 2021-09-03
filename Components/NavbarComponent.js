import React, { Component } from 'react';
import {Nav, Navbar, Container, Image} from "react-bootstrap"; 

class Header extends Component {
    render () {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <Image src="logo_1_20.png"/>
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    };
};

export default Header; 