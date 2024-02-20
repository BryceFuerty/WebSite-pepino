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
 
    <form ref={formRef} onSubmit={sendEmail} style={{ maxWidth: '400px', margin: 'auto', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
    <Typography className='TitleAbout' sx={{ fontSize: "35px", fontFamily: 'Roboto-Bold' }}>
      Contactez moi !
    </Typography>
      <div style={{ marginBottom: '5px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Nom *</label>
        <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} placeholder="Entrez votre nom" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </div>
      <div style={{ marginBottom: '5px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Prénom *</label>
        <input type="text" name="user_firstname" value={formData.user_firstname} onChange={handleChange} placeholder="Entrez votre prénom" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </div>
      <div style={{ marginBottom: '5px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Email *</label>
        <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} placeholder="Entrez votre adresse e-mail" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </div>
      <div style={{ marginBottom: '5px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Téléphone</label>
        <input type="text" name="user_phone" value={formData.user_phone} onChange={handleChange} placeholder="Entrez votre numéro de téléphone" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </div>
      <div style={{ marginBottom: '5px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Message *</label>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Entrez votre message" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </div>
      <div>
        <input type="submit" value="Envoyer" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
      </div>
      {showAlertSucces && (
        <Alert severity="success" sx={{ display: 'flex', marginTop: '15px' }}>Votre message a été envoyé avec succès.</Alert>
      )}
      {showAlertError && (
        <Alert severity="error" sx={{ display: 'flex', marginTop: '15px' }}>Des informations sont manquantes.</Alert>
      )}
    </form>
    </div>
  );
};
