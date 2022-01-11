import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FormControl, InputGroup,Button } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="icon">
            <h4><FontAwesomeIcon icon={faFacebook} /></h4>
            <h4><FontAwesomeIcon icon={faLinkedin} /></h4>
            <h4><FontAwesomeIcon icon={faTwitter} /></h4>
            <h4><FontAwesomeIcon icon={faYoutube} /></h4>
            <h4><FontAwesomeIcon icon={faGithub} /></h4>
            </div>
            <div>
            
            <div className="mt-3">
            <InputGroup className="mt-3 mb-3 mx-auto" id="width">
            <FormControl
                placeholder="Enter Your Email Number"
                 aria-label="Recipient's username"
                 aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary"id="button">
            NewsLetter
            </Button>
            </InputGroup>
            </div>
            </div>
            <p>Copyright © 2021 Jobayers Depelopment | operated by Development Agency | New Airport Road, Bananai, Dhaka-1212
</p>
        </div>
    );
};

export default Footer;