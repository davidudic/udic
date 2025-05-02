'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { fadeIn } from '@/utils/animation';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FormData, FormStatus } from '@/types';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '', // přidáno telefonní číslo
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({
    isSubmitting: false,
    message: '',
    isError: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ isSubmitting: true, message: '', isError: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Status: ${response.status}`);
      }

      // Úspěšné odeslání - vyčištění formuláře
      setFormData({ name: '', email: '', phone: '', message: '' });
      setStatus({
        isSubmitting: false,
        message: 'Zpráva byla úspěšně odeslána! Děkujeme za kontaktování.',
        isError: false
      });
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        isSubmitting: false,
        message: 'Při odesílání došlo k chybě. Zkuste to prosím znovu.',
        isError: true
      });
    }
  };

  return (
    <div className="container">
      <motion.div 
        className={styles.contact}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={fadeIn('right', 0.2)}>Kontakt</motion.h2>

        <div className={styles.contactContent}>
          <motion.div 
            className={styles.contactInfo}
            variants={fadeIn('right', 0.3)}
          >
            <h3>Pojďme se spojit</h3>
            <p>Máte otázku nebo nabídku spolupráce? Neváhejte mě kontaktovat prostřednictvím formuláře nebo přímo přes uvedené kontaktní údaje.</p>
            
            <div className={styles.contactLinks}>
              <a href="mailto:davidudic06fx@gmail.com">
                <FaEnvelope /> davidudic06fx@gmail.com
              </a>
              <a href="tel:+420727828136">
                <FaPhone /> +420 727 828 136
              </a>
            </div>
          </motion.div>

          <motion.form 
            className={styles.contactForm}
            onSubmit={handleSubmit}
            variants={fadeIn('left', 0.3)}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Jméno</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+420 XXX XXX XXX"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Zpráva</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button 
              type="submit" 
              disabled={status.isSubmitting}
              className={styles.submitBtn}
            >
              {status.isSubmitting ? 'Odesílám...' : 'Odeslat'}
            </button>
            
            {status.message && (
              <div className={`${styles.formMessage} ${status.isError ? styles.error : styles.success}`}>
                {status.message}
              </div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;