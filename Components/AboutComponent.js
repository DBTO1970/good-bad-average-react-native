import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container} from "react-bootstrap";


class About extends Component {
    render () {
        return (
            <Container className="center hero-subtitle">
                <div>
                    <h1 className="hero-title text-dark mt-5 mb-5">About this project</h1>
                </div>
                <div className="col-md-5 mt-5">
                    <h2>The Project</h2>
                    <p className="hero-subtitle mt-3 text-dark "> Type in your zip code and the site will show you the best, worst, and most average-rated restaurant near you.</p>
                </div>  
                <div className="col-md-5 mt-5">
                        <h2>Technicals</h2>
                    <p className="hero-subtitle mt-3 text-dark ">React, Bootstrap, and instert APIs What other details are relevant?</p>
                    <Link href="#" className="mb-4">Here's the Github</Link>  
                </div>
                <div className="col-md-5 mt-5 mb-5">
                    <h2>The Team</h2>
                    <p className="hero-subtitle mt-3 mb-5 text-dark ">Don Barto and Esteban Porras</p>
                </div> 
            </Container>
        )
    };
};

export default About;