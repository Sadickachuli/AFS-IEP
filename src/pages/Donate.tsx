import React from 'react';
import SEO from '../components/shared/SEO';

export default function Donate() {
  return (
    <>
      <SEO
        title="Donate"
        description="Support IEP Ghana. Online donation via Paystack coming soon!"
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
            <h2 className="text-2xl font-semibold mb-4">Online Donation (Coming Soon)</h2>
            <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-8">
              <span className="text-gray-400 text-2xl">Paystack integration will be available here soon.</span>
            </div>
            <p className="text-lg mb-2">We'll set up a secure Paystack payment gateway for online donations. Please check back soon!</p>
            <p className="text-lg">For offline donations or questions, email <a href="mailto:info@iepghana.org" className="text-primary underline">info@iepghana.org</a>.</p>
          </div>
        </section>
      </div>
    </>
  );
} 