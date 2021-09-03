import React from 'react';
import {InputGroup, Button } from "react-bootstrap"; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import LocationSearchInput from './AutoCompleteComponent';


function ZipcodeField (props) {
    return (
        <InputGroup style={{ width: '30rem' }}>
            <LocationSearchInput />
            <Button 
            variant="outline-warning" 
            id="button-addon2">
                {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
            </Button>
            <Button 
                onClick={()=> props.changeShow(false)}
                variant="outline-warning" 
                id="button-addon2">
                Search
            </Button>
        </InputGroup>
    )
};


export default ZipcodeField; 

// // A different version of fontawesome will need to be installed for react native



