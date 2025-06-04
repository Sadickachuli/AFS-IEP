import React from 'react';
import SEO from '../components/shared/SEO';

export default function Partnership() {
  return (
    <>
      <SEO
        title="Partnership Opportunities"
        description="Partner with IEP Ghana to make a difference in education and intercultural exchange."
      />
      <div className="py-12">
        <section className="bg-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Partner</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              IEP Ghana welcomes partnerships with organizations, companies, schools, and individuals who share our commitment to global citizenship, education, and community development. Together, we can create greater impact.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Why Partner With Us?</h2>
            <ul className="list-disc list-inside mb-6 text-left mx-auto max-w-xl">
              <li>Collaborate on educational and community projects</li>
              <li>Support youth development and intercultural learning</li>
              <li>Amplify your organization's social impact</li>
              <li>Access a network of local and international changemakers</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Partnership Form (Coming Soon)</h2>
            <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-8">
              <span className="text-gray-400 text-2xl">Partnership application form will be available here soon.</span>
            </div>
            <p className="text-lg">For partnership inquiries, please email <a href="mailto:info@iepghana.org" className="text-primary underline">info@iepghana.org</a>.</p>
          </div>
        </section>
      </div>
    </>
  );
} 