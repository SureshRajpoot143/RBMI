import React, { useState } from 'react';
import ThankYou from './ThankYou';

function DonationFormFull() {
  const [donationAmount, setDonationAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [showThankYou, setShowThankYou] = useState(false);
  const [receipt, setReceipt] = useState({});

  const handleDonation = (e) => {
    e.preventDefault();
    setReceipt({
      name,
      amount: donationAmount,
      date: new Date().toLocaleDateString(),
      method: paymentMethod,
    });
    setShowThankYou(true);
  };

  const handleBack = () => {
    setShowThankYou(false);
    setDonationAmount('');
    setName('');
    setEmail('');
    setPaymentMethod('credit');
  };

  if (showThankYou) {
    return <ThankYou receipt={receipt} onBack={handleBack} />;
  }

  return (
    <section  style={{maxWidth: '100%', overflow: 'hidden', backgroundColor: '#f137e86e',tranprency:'0.9' }} id="donate" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <u><i><h1 className="text-5xl md:text-3xl font-bold mb-4">>Make a Donation  </h1></i> </u>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden donation-card">
          <form className="p-6" onSubmit={handleDonation} autoComplete="off">
            <div className="mb-6">
               <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">Donation Amount ($)</label>
              <div className="grid grid-cols-4 gap-2">
                {[10, 25, 50, 100].map(amount => (
                  <button type="button" key={amount} className="amount-btn py-2 px-4 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors" onClick={() => setDonationAmount(amount)}>
                    ₹{amount}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <input type="number" min="1" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Custom amount" required />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="enter your name" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="rbmi@example.com" required />
            </div>
            <div className="mb-6">
              <label htmlFor="payment-method" className="block text-gray-700 font-medium mb-2">Payment Method</label>
              <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">Donate Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default DonationFormFull;
