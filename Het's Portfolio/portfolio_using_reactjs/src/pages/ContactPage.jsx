import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Have a project in mind? Let's discuss and bring your ideas to life.
          </p>
        </div>
      </div>

      <section className="section contact">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm currently available for freelance work and full-time opportunities. 
                Feel free to reach out if you're looking for a developer, have a question, 
                or just want to connect.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+91 9662019277</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>hm.sakariya13@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
