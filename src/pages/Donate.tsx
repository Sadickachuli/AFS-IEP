import React, { useRef, useState } from 'react';
import SEO from '../components/shared/SEO';

const PAYSTACK_PUBLIC_KEY = 'pk_test_ec272adf6fc9fef6e217fd61241addd734990836'; // Replace with your real key for production

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const paystackRef = useRef<any>(null);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setMessage('');
    if (!amount || !email) {
      setStatus('error');
      setMessage('Please enter a valid amount and email.');
      return;
    }
    // @ts-ignore
    const handler = window.PaystackPop && window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email,
      amount: parseInt(amount, 10) * 100, // Paystack expects amount in kobo/pesewas
      currency: 'GHS',
      callback: function(response: any) {
        setStatus('success');
        setMessage('Thank you for your donation! Payment reference: ' + response.reference);
      },
      onClose: function() {
        setStatus('error');
        setMessage('Payment was not completed.');
      },
    });
    if (handler) handler.openIframe();
  };

  React.useEffect(() => {
    // Load Paystack script if not already present
    if (!document.getElementById('paystack-js')) {
      const script = document.createElement('script');
      script.id = 'paystack-js';
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <SEO
        title="Donate"
        description="Support IEP Ghana. Donate securely online via Paystack."
      />
      <div className="py-12">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Donate</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your support helps us empower youth, strengthen communities, and advance intercultural education in Ghana.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Donate Online</h2>
            <form onSubmit={handlePay} className="max-w-md mx-auto mb-8 space-y-4">
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-left text-sm font-medium text-gray-700 mb-1">Amount (GHS)</label>
                <input
                  id="amount"
                  type="number"
                  min="1"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="50"
                />
              </div>
              <button type="submit" className="btn-primary w-full">Donate with Paystack</button>
            </form>
            {status === 'success' && <div className="rounded bg-green-100 text-green-800 p-4 mb-4">{message}</div>}
            {status === 'error' && <div className="rounded bg-red-100 text-red-800 p-4 mb-4">{message}</div>}
            <p className="text-lg mt-8">For offline donations or questions, email <a href="mailto:info@iepghana.org" className="text-primary underline">info@iepghana.org</a>.</p>
            <p className="text-sm text-gray-500 mt-2">Paystack charges 1.95% per transaction for local cards/mobile money (capped at GHS 20). <a href="https://paystack.com/gh/pricing" target="_blank" rel="noopener noreferrer" className="underline">See Paystack pricing</a>.</p>
          </div>
        </section>
      </div>
    </>
  );
} 