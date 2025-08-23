import React, { useState } from 'react';
import './SSRWorld.css';

const SSRWorld = () => {
    const [donationAmount, setDonationAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [showThankYou, setShowThankYou] = useState(false);
    const [receipt, setReceipt] = useState({});

    const handleDonation = () => {
        setReceipt({ name, amount: donationAmount, date: new Date().toLocaleDateString(), method: paymentMethod });
        setShowThankYou(true);
    };

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="bg-blue-600 text-white py-6">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8e75a2e4-f6b4-41bf-9457-16644eb2dd7e.png" alt="SSR WORLD logo" className="h-12 w-12 rounded-full" />
                        <h1 className="text-2xl font-bold">SSR WORLD</h1>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            <li><a href="#about" className="hover:text-blue-200 transition-colors">About</a></li>
                            <li><a href="#donate" className="hover:text-blue-200 transition-colors">Donate</a></li>
                            <li><a href="#impact" className="hover:text-blue-200 transition-colors">Our Impact</a></li>
                            <li><a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Together We Can Change Lives</h1>
                        <p className="text-xl mb-6">Every donation to SSR WORLD helps create a better future for those in need.</p>
                        <a href="#donate" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors inline-block">Make a Donation</a>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35edaa0c-2c36-45ba-9469-730eeef6e3dc.png" alt="Diverse group of smiling children" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">About SSR WORLD</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Mission Card */}
                        <div className="bg-blue-50 p-6 rounded-xl donation-card">
                            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                            <p className="text-gray-600">SSR WORLD is dedicated to providing education, healthcare, and support to underprivileged communities worldwide.</p>
                        </div>
                        {/* Transparency Card */}
                        <div className="bg-blue-50 p-6 rounded-xl donation-card">
                            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                            <p className="text-gray-600">We ensure that 90% of every donation goes directly to our programs, with only 10% for administrative costs.</p>
                        </div>
                        {/* Impact Card */}
                        <div className="bg-blue-50 p-6 rounded-xl donation-card">
                            <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
                            <p className="text-gray-600">Last year, we supported over 50,000 people across 15 countries through our various programs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Form Section */}
            <section id="donate" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Make a Donation</h2>
                    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden donation-card">
                        <div className="p-6">
                            <div className="mb-6">
                                <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">Donation Amount ($)</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {[10, 25, 50, 100].map(amount => (
                                        <button key={amount} className="amount-btn py-2 px-4 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors" onClick={() => setDonationAmount(amount)}>
                                            ${amount}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-4">
                                    <input type="number" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Custom amount" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="payment-method" className="block text-gray-700 font-medium mb-2">Payment Method</label>
                                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="credit">Credit Card</option>
                                    <option value="paypal">PayPal</option>
                                    <option value="bank">Bank Transfer</option>
                                </select>
                            </div>
                            <button onClick={handleDonation} className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">Donate Now</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Thank You Section */}
            {showThankYou && (
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
                            <a href="#" className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">Back to Home</a>
                        </div>
                    </div>
                </section>
            )}

            {/* Impact Section */}
            <section id="impact" className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">15</div>
                            <p className="text-blue-100">Countries Reached</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">50K+</div>
                            <p className="text-blue-100">Lives Touched</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">$2.5M</div>
                            <p className="text-blue-100">Raised This Year</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">90%</div>
                            <p className="text-blue-100">Goes Directly to Causes</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">SSR WORLD</h3>
                            <p>Creating positive change through education, healthcare, and community support worldwide.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#about" className="hover:text-blue-300 transition-colors">About Us</a></li>
                                <li><a href="#donate" className="hover:text-blue-300 transition-colors">Donate</a></li>
                                <li><a href="#impact" className="hover:text-blue-300 transition-colors">Our Impact</a></li>
                                <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li>123 Charity Street</li>
                                <li>New York, NY 10001</li>
                                <li>contact@ssrworld.org</li>
                                <li>+1 (555) 123-4567</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
                            <div className="flex space-x-4">
                                {/* Social Media Icons */}
                                <a href="#" className="hover:text-blue-300 transition-colors">Facebook Icon</a>
                                <a href="#" className="hover:text-blue-300 transition-colors">Twitter Icon</a>
                                <a href="#" className="hover:text-blue-300 transition-colors">Instagram Icon</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>©️ 2023 SSR WORLD. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SSRWorld;
