import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    return errors;
  };

  const errors = validateForm();
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValid) {
      // Mark all fields as touched to show errors
      setTouched({
        name: true,
        email: true,
        message: true
      });
      return;
    }

    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Using EmailJS for email sending (free service)
      // You need to sign up at https://www.emailjs.com and get your credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Contact Form',
        message: formData.message,
        to_name: 'Portfolio Owner',
        reply_to: formData.email
      };

      // For development, we'll simulate API call
      // For production, replace with actual EmailJS service
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      // Simulate success for demo
      setTimeout(() => {
        setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTouched({
          name: false,
          email: false,
          message: false
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, isSubmitted: false }));
        }, 5000);
      }, 1500);

    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="contact-form"
      noValidate
    >
      {/* Success Message */}
      {formStatus.isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="success-message"
        >
          <FaCheckCircle className="success-icon" />
          <div>
            <h4>Message Sent Successfully!</h4>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        </motion.div>
      )}

      {/* Error Message */}
      {formStatus.error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="error-message"
        >
          <FaExclamationCircle className="error-icon" />
          <div>
            <h4>Oops! Something went wrong</h4>
            <p>{formStatus.error}</p>
          </div>
        </motion.div>
      )}

      {/* Name Field */}
      <div className="form-group">
        <label htmlFor="name">
          Full Name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur('name')}
          className={`form-control ${touched.name && errors.name ? 'error' : ''}`}
          placeholder="Het Sakariya"
          required
        />
        {touched.name && errors.name && (
          <span className="error-text">{errors.name}</span>
        )}
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="email">
          Email Address <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
          className={`form-control ${touched.email && errors.email ? 'error' : ''}`}
          placeholder="het123@example.com"
          required
        />
        {touched.email && errors.email && (
          <span className="error-text">{errors.email}</span>
        )}
      </div>

      {/* Subject Field */}
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="form-control"
          placeholder="Project Inquiry, Collaboration, etc."
        />
      </div>

      {/* Message Field */}
      <div className="form-group">
        <label htmlFor="message">
          Message <span className="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur('message')}
          className={`form-control ${touched.message && errors.message ? 'error' : ''}`}
          placeholder="Tell me about your project, timeline, and budget..."
          rows="6"
          required
        />
        <div className="textarea-info">
          <span className="char-count">{formData.message.length}/1000</span>
          {touched.message && errors.message && (
            <span className="error-text">{errors.message}</span>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className="btn btn-primary"
        disabled={formStatus.isSubmitting || !isValid}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {formStatus.isSubmitting ? (
          <>
            <span className="spinner"></span>
            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane className="btn-icon" />
            Send Message
          </>
        )}
      </motion.button>

      {/* Form Note */}
      <p className="form-note">
        <span className="required">*</span> Required fields
      </p>
    </motion.form>
  );
};

export default ContactForm;