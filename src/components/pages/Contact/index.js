import React, { useState } from 'react';

import {validateEmail} from "../../../utils/helpers"

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');


    const { name, email, message } = formState;
    function handleChange(e) {
        e.stopPropagation();
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
                
            }
        }
        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }       
        
    }
    function handleSubmit(e) {
        e.preventDefault();
        // if (errorMessage !== '')
        console.log(formState);
      }
return (
    <section className="mb-4">
        <form id="contact-form" className="form" onSubmit={handleSubmit}>
            <legend>Send a Message</legend>
            <div className="form-group">
                <label className="form-label" htmlFor="name">Name:</label>
                <input className="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} required />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="email">Email address:</label>
                <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} required />
            </div>
            <div className="form-group">
            <label className="form-label" htmlFor="message">Message:</label>
            <textarea className="form-control"  required name="message" defaultValue={message} onBlur={handleChange} rows="5" required />
            </div>
            {errorMessage && (
                <div classname="col-12">
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}

            <div classname="col-12">
            <button className="form-button" type="submit" role="button">Send</button>
            </div>
        </form>
    </section>
  );
}

  export default Contact;