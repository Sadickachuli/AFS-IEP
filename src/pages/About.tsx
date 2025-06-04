import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';

const staffMembers = [
  { name: 'Diana Sey', role: 'Chief Executive Officer' },
  { name: 'Teye-Mensah Mezo', role: 'Accounts and Finance Director' },
  { name: 'Christiana Ahu', role: 'Program Manager' },
  { name: 'Rosemond Nkansah', role: 'Program Manager' },
  { name: 'Osborn Mensah', role: 'Program Coordinator' },
  { name: 'Deborah Agamasu', role: 'Program Coordinator' },
  { name: 'Theresa Ammah', role: 'Administration Coordinator' },
];

const boardMembers = [
  { name: 'Andani Kholinar', role: 'Board Chairman' },
  { name: 'Peter Mireku', role: 'Vice Chairman' },
  { name: 'Ewurama Asare', role: 'Board Secretary' },
  { name: 'Martin Sasu', role: 'Board Treasurer' },
  { name: 'Yahaya Abdul-Sallam', role: 'Member' },
  { name: 'Pearl Kwakye', role: 'Member' },
  { name: 'Adams Issaka', role: 'Member' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="IEP Ghana: Shaping Global Citizens Through Education. Learn about our mission, history, team, and board."
      />
      <div className="py-12">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">IEP Ghana Company Profile</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Shaping Global Citizens Through Education</h2>
          </div>
        </section>

        {/* Overview and History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Overview text and main image */}
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6">About Us</h2>
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="mb-4">
                  Intercultural Exchange Programs (IEP) Ghana exists to promote the advancement of intercultural learning and global understanding. We design and deliver programs that bring together young people, families, and communities from diverse cultural backgrounds to engage in shared learning experiences. Through these interactions, participants gain deeper appreciation for each other's cultures and develop a strong sense of global citizenship.
                </p>
                <p className="mb-4">
                  Our mission is to help individuals, especially youth become more aware of our shared humanity and more committed to addressing global challenges. By providing educational exchanges, work and training opportunities for students, teachers, and young professionals, we contribute to the advancement of education both in Ghana and abroad.
                </p>
              </div>
              <div className="order-1 lg:order-2 mb-8 lg:mb-0">
                <img src="/images/about/history-main.jpg" alt="IEP Ghana Through the Years" className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
              {/* History images stacked vertically */}
              <div className="order-2 lg:order-1 flex flex-col gap-4">
                <img src="/images/about/history-1.jpg" alt="Early days of IEP Ghana" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                <img src="/images/about/history-2.jpg" alt="IEP Ghana Today" className="rounded-lg shadow-lg w-full h-48 object-cover" />
              </div>
              {/* History text */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Our History</h2>
                <p className="mb-4">
                  IEP Ghana was born from a rich legacy of international exchange and community-based education in Ghana. Originally operating within the AFS Ghana framework, IEP Ghana has since grown into an independent organisation with a clear focus on higher education mobility and local development through school-based initiatives. Today, we stand as a trusted partner in international education and grassroots empowerment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <p className="mb-8 text-center max-w-2xl mx-auto">
              IEP Ghana is led by a passionate and professional team with expertise in international education, youth development, program design, and community engagement. United by a shared commitment to impact, our team works collaboratively to support learners and build bridges across cultures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {staffMembers.map((member, idx) => {
                const imagePath = `/images/team/${member.name.toLowerCase().replace(/ /g, '-')}.jpg`;
                return (
                  <div key={member.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                    {/* Team member image, only render if file exists */}
                    <img src={imagePath} alt={member.name} className="w-32 h-32 rounded-full mb-4 object-cover bg-gray-100" onError={e => e.currentTarget.style.display='none'} />
                    <div className="text-lg font-semibold text-gray-800 text-center">{member.name}</div>
                    <div className="text-sm text-gray-500 text-center">{member.role}</div>
                  </div>
                );
              })}
            </div>
            <h3 className="text-2xl font-semibold text-center mb-6">Our Board</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, idx) => {
                const imagePath = `/images/board/${member.name.toLowerCase().replace(/ /g, '-')}.jpg`;
                return (
                  <div key={member.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                    {/* Board member image, only render if file exists */}
                    <img src={imagePath} alt={member.name} className="w-32 h-32 rounded-full mb-4 object-cover bg-gray-100" onError={e => e.currentTarget.style.display='none'} />
                    <div className="text-lg font-semibold text-gray-800 text-center">{member.name}</div>
                    <div className="text-sm text-gray-500 text-center">{member.role}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 