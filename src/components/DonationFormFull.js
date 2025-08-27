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
    <section
      id="donate"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-10">
          <span className="text-blue-600">💖 Make a Donation</span>
        </h1>

        {/* Bigger, attractive donation box */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all hover:scale-[1.01]">
          <form
            className="p-10 md:p-14"
            onSubmit={handleDonation}
            autoComplete="off"
          >
            {/* Donation Amount */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">
                Donation Amount
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[10, 25, 50, 100].map((amount) => (
                  <button
                    type="button"
                    key={amount}
                    className={`py-3 px-5 rounded-xl font-bold transition-all ${
                      donationAmount === amount
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                    onClick={() => setDonationAmount(amount)}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              <div className="mt-5">
                <input
                  type="number"
                  min="1"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  placeholder="Enter custom amount"
                  required
                />
              </div>
            </div>

            {/* Full Name */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-2">
                Payment Method
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="credit">💳 Credit Card</option>
                <option value="paypal">🅿️ PayPal</option>
                <option value="bank">🏦 Bank Transfer</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold text-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
            >
              🚀 Donate Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default DonationFormFull;
