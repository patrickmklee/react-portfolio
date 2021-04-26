import React, { useState } from 'react';
// import PhotoList from "../PhotoList";
import {validateEmail} from "../../../utils/helpers"
function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    
    const { name, email, message } = formState;
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
return (
    <section>
        <h1>Send a Message</h1>
        <form id="contact-form" className="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
            </div>
            <button className="button" type="submit" onClick={ () => {validateEmail()}}>Send</button>
        </form>
    </section>
  );
}

  export default Contact;