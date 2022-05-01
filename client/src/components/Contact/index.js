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
        } else 
    }




    return (
        <section className="my-5">
            This is the Contact Page
        </section>
        
    );
}


export default Contact;