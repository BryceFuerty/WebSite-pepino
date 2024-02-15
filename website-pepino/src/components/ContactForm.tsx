import React, { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'
import { Alert, Typography } from '@mui/material';

export const ContactUs = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_firstname: "",
    user_email: "",
    message: "",
    user_phone: ""
  });
  const [showAlertError, setShowAlertError] = useState(false);
  const [showAlertSucces, setShowAlertSucces] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();



    
    if(!formData.user_name || !formData.user_firstname || !formData.user_email || !formData.message){
      setShowAlertError(true);
      
    }else {
      if (formRef.current) {
        emailjs
          .sendForm('service_imlqukt', 'template_352pmuc', formRef.current, {
            publicKey: 'GRiWdiKqTRQqbLs6S',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );   
          emailjs
          .sendForm('service_imlqukt', 'template_ur7qw62', formRef.current, {
            publicKey: 'GRiWdiKqTRQqbLs6S',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );   
      }
      setShowAlertSucces(true);
    }
  };

  return (
    <div className='formDiv'>
    
    <form ref={formRef} onSubmit={sendEmail}>
      <label>Nom *</label>
      <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
        <label>Prenom *</label>
        <input type="text" name="user_firstname" value={formData.user_firstname} onChange={handleChange} />
        <label>Email *</label>
        <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} />
        <label>Telephone</label>
        <input type="text" name="user_phone" value={formData.user_phone} onChange={handleChange} />
        <label>Message *</label>
        <textarea name="message" value={formData.message} onChange={handleChange} />
      <input type="submit" value="Send" />
      {showAlertSucces && (
        <Alert severity="success" sx={{display:'flex'}}>This is a success Alert.</Alert>
        )}
      {showAlertError && (
        <Alert severity="error" sx={{display:'flex'}}>Des informations sont manquantes</Alert>
      )}
      
    </form>
    
    </div>
  );
};
