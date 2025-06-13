import React, { useRef, useState } from 'react';
import SEO from '../components/shared/SEO';

const PAYSTACK_PUBLIC_KEY = 'pk_test_ec272adf6fc9fef6e217fd61241addd734990836'; // Replace with your real key for production

const projects = [
  {
    name: 'Scholarship Fund',
    image: '/images/donate/scholarship.jpg',
    description: 'Help a deserving student participate in a life-changing exchange or skills program.'
  },
  {
    name: 'Community Education Initiatives',
    image: '/images/donate/community.jpg',
    description: 'Support school-based projects, reading campaigns, and teacher training in underserved areas.'
  },
  {
    name: 'Volunteer & Impact Travel',
    image: '/images/donate/volunteer.jpg',
    description: 'Fund local and international volunteers working on grassroots development projects.'
  }
];

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const paystackRef = useRef<any>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

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
          <div className="container mx-auto px-4 max-w-5xl text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Support Our Mission</h2>
            <p className="mb-6 text-gray-700">
              Your donation directly supports IEP Ghana's mission to empower youth, strengthen communities, and advance intercultural education. Contributions help fund scholarships, community projects, and leadership training for young people across Ghana.
            </p>
            <h3 className="text-xl font-semibold mb-8">Featured Projects Seeking Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={project.name} className="relative rounded-lg shadow-lg overflow-hidden flex flex-col justify-end min-h-[340px] bg-gray-200">
                  <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                    <h4 className="text-xl font-bold text-white mb-2 drop-shadow">{project.name}</h4>
                    <p className="text-white mb-4 drop-shadow text-sm">{project.description}</p>
                    <button className="btn-primary w-full" onClick={() => setSelectedProject(project.name)}>Donate</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="fixed inset-0 bg-black bg-opacity-40" onClick={() => setSelectedProject(null)} />
              <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl" onClick={() => setSelectedProject(null)}>&times;</button>
                <h2 className="text-2xl font-bold mb-4 text-primary">Donate to {selectedProject}</h2>
                <form onSubmit={handlePay} className="space-y-4">
                  <input type="hidden" name="project" value={selectedProject} />
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
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
} 