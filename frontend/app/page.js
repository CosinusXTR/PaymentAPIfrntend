"use client"
import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryChange = (e) => {
    setExpiry(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform payment processing or validation here
    // You can send the cardNumber, expiry, and cvv to the server for further processing

    // Clear form inputs
    setCardNumber('');
    setExpiry('');
    setCvv('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" value={cardNumber} onChange={handleCardNumberChange} />
      </div>
      <div>
        <label htmlFor="expiry">Expiry Date:</label>
        <input type="text" id="expiry" value={expiry} onChange={handleExpiryChange} />
      </div>
      <div>
        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" value={cvv} onChange={handleCvvChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;
