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
            <h2 className="text-2xl font-bold mb-8">Volunteer Travel and Impact Program</h2>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <img src="/images/programs/volunteer-travel.jpg" alt="Volunteer Travel and Impact" className="w-full md:w-1/3 h-56 object-cover rounded-lg mb-6 md:mb-0" onError={e => e.currentTarget.style.display='none'} />
              <div className="w-full md:w-2/3">
                <p className="mb-2 font-bold">Make a Difference While Discovering Ghana</p>
                <p className="mb-2">Join our Volunteer & Impact Travel Program and experience Ghana like never before. Support local communities, develop leadership and soft skills, and build global friendships. Ideal for students, diaspora youth, and service groups.</p>
                <ul className="list-disc list-inside mb-2 pl-4">
                  <li>Expert facilitators from Ghana and abroad</li>
                  <li>Interactive sessions with group projects and case studies</li>
                  <li>Hands-on volunteer work in community settings</li>
                  <li>Cultural excursions (Cape Coast, Kente weaving, etc.)</li>
                  <li>Workshops on the SDGs, African history, and identity</li>
                  <li>Safe accommodation and local support</li>
                  <li>Digital certificate upon completion</li>
                </ul>
                <p className="mb-2">Courses: Cross-cultural communication, Team collaboration, Emotional intelligence, Problem-solving and adaptability, Public speaking and storytelling for advocacy</p>
                <p className="mb-2 font-semibold">Price: GHS 7,500 or $750</p>
                <a href="/apply" className="btn-primary mt-2 inline-block">Sign Up</a>
              </div>
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