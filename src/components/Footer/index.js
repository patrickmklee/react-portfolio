import React,{useEffect} from 'react';

import { capitalizeFirstLetter } from "../../utils/helpers";


function Footer() {
    return (
        <footer className="container">
            <div className="flex-row space-between">
                <div className="mx-3">
                <a href="#0">Github</a>
                </div>
                <div className="mx-3">
                <a href="#0">Linkedin</a>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;