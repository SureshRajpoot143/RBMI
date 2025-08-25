import React, { useState } from 'react';

function DonationForm() {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  if (showThankYou) {
    return (
      <section id="donate">
        <h2>Thank You!</h2>
        <p>Thank you, {name}, for your generous donation of ${amount}!</p>
      </section>
    );
  }

  return (
    <section id="donate">
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount ($)"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
<<<<<<< HEAD
          placeholder="Full Name"
=======
          placeholder=" Enter your Full Name"
>>>>>>> cc25e4e (fghjkl;)
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
<<<<<<< HEAD
          placeholder="Email"
=======
          placeholder=" Enter your email"
>>>>>>> cc25e4e (fghjkl;)
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Donate</button>
      </form>
    </section>
  );
}

export default DonationForm;
