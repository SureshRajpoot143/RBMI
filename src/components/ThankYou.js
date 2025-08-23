import React from 'react';

function ThankYou({ receipt, onBack }) {
  return (
    <section id="thank-you" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-700">THANK YOU FOR YOUR DONATION!</h2>
          <p className="text-xl text-gray-600 mb-6">Your generous contribution will make a real difference in the lives of those we serve.</p>
          <div className="bg-white p-6 rounded-lg shadow-sm max-w-md mx-auto">
            <h3 className="font-semibold text-gray-700 mb-2">Donation Receipt</h3>
            <div className="text-left space-y-2">
              <p><span className="font-medium">Name:</span> <span>{receipt.name}</span></p>
              <p><span className="font-medium">Amount:</span> <span className="text-green-600">${receipt.amount}</span></p>
              <p><span className="font-medium">Date:</span> <span>{receipt.date}</span></p>
              <p><span className="font-medium">Payment Method:</span> <span>{receipt.method}</span></p>
            </div>
          </div>
          <button onClick={onBack} className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">Back to Home</button>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;
