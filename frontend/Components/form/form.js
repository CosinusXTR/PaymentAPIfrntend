"use client"
import React from 'react'
import './styles.css'
import { useState } from 'react';


const Form = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing logic here
    console.log('Payment submitted');
    // Reset form fields
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  return (
    <div className='container'>
     
      <form onSubmit={handleSubmit} className='paymentForm'>
        <h1 className='FormTitle'>Payment Form</h1>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className = 'inputField'
          placeholder="Enter card number"
          required
        />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className='inputField'
          placeholder="MM/YY"
          required
        />
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className='inputField'
          placeholder="Enter CVV"
          required
        />
        <button type="submit" className='submitButton'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
