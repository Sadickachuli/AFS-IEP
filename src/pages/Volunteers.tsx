import React from 'react';
import SEO from '../components/shared/SEO';

export default function Volunteers() {
  return (
    <>
      <SEO
        title="Volunteers"
        description="Learn about volunteering opportunities and stories at IEP Ghana. Join us to make a difference!"
      />
      <div className="py-12">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Volunteers</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Join IEP Ghana as a volunteer and help shape a brighter future for communities across Ghana. We welcome passionate individuals from all backgrounds to contribute their skills, time, and energy to our mission.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Volunteers group photo */}
            <img src="/images/volunteers/group.jpg" alt="IEP Ghana Volunteers" className="w-full h-64 object-cover rounded-lg mb-8" onError={e => e.currentTarget.style.display='none'} />
            <h2 className="text-2xl font-semibold mb-4">Why Volunteer with Us?</h2>
            <ul className="list-disc list-inside mb-6 pl-4">
              <li>Make a real impact in education and community development</li>
              <li>Gain valuable intercultural and leadership experience</li>
              <li>Connect with like-minded changemakers</li>
              <li>Receive training, support, and recognition</li>
            </ul>
            <div className="bg-yellow-100 border-l-4 border-yellow-400 p-6 rounded mb-8">
              <h2 className="text-2xl font-bold mb-2">How We Support Volunteers</h2>
              <p className="text-gray-700">Content coming soon: How we support and train people to develop themselves through their volunteering journey.</p>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Volunteer Stories (Coming Soon)</h2>
            {/* Volunteer story image example */}
            <img src="/images/volunteers/story1.jpg" alt="Volunteer Story" className="w-full h-40 object-cover rounded-lg mb-8" onError={e => e.currentTarget.style.display='none'} />
            <h2 className="text-2xl font-semibold mb-4">How to Get Involved</h2>
            <p className="mb-4">
              Interested in volunteering? We will soon open applications for local and international volunteers. Stay tuned for more information, or contact us at <a href="mailto:info@iepghana.org" className="text-primary underline">info@iepghana.org</a>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
} 