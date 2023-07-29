import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './SendEmail.css'
import { emailServicesId, publicKey, templateServicesId } from '../../data/constantWords';

const SendEmail = () => {
    const form = useRef();
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (!nombre || !email || !mensaje) {
            setError('Por favor, complete todos los campos.');
            return;
        }

        emailjs.sendForm(emailServicesId, templateServicesId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                alert("se envio el mensaje")
                setNombre('');
                setEmail('');
                setMensaje('');
                setError('');
            }, (error) => {
                console.log(error.text);
            });
        setError('');
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='field'>
            <div>
                <label>Name</label>
                <input type="text" name="user_name" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required />
            </div>
            {error && <p>{error}</p>}
            <input type="submit" value="Send" />
        </form>
    )
}

export default SendEmail