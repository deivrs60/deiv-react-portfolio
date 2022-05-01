import React, { useState } from 'react';
import { validateEmail } from "../../utils/helpers";

function Contact() {

    const [
        formState,
        setFormState
    ] = useState({ name: '', email: '', message: '',});
    
    const { name, email, message } = formState;
    const [
        errorMessage,
        setErrorMessage
    ] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValidEmail = validateEmail(e.target.value);
            if(!isValidEmail) {
                setErrorMessage('Please enter a valid email!');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required! Please input a valid response.`)
            } else { 
                setErrorMessage('');
            }
        } if (!errorMessage) {
            setFormState({ 
                ...formState, 
                [e.target.name]: e.target.value 
            });
        }
    };


    function handleSubmit(e) {
        e.preventDefault();
        alert( `I'm currently still working on the back-end for this application. Please feel free to reach out to me by using the links / icons below!`);
    }

    return (
        <form id="contact-form" onSubmit= { handleSubmit }>
            <div className="form-container">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label px-2">Name</label>
                    <input type="text" className="form-control" name="Your Name" placeholder="Your Name" defaultValue={name} onBlur ={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label px-2">Email</label>
                    <input type="email" className="form-control" name="Your Email" placeholder="Your Email" defaultValue={email} onBlur ={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label px-2">Message</label>
                    <textarea className="form-control" name="A Message" placeholder="Please enter your message" defaultValue={message} onBlur ={handleChange} rows="5"></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="btn btn-primary" id="main-btn" type="submit">Submit</button>
            </div>
        </form>
        
    );
}


export default Contact;