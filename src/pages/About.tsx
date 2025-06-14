import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';
import { LinkedIn } from '@mui/icons-material';

const staffMembers = [
  { name: 'Diana Sey', role: 'Chief Executive Officer', linkedin: '', bio: 'Bio coming soon.' },
  { name: 'Teye-Mensah Mezo', role: 'Accounts and Finance Director', linkedin: '', bio: 'Bio coming soon.' },
  { name: 'Christiana Ahu', role: 'Program Manager', linkedin: '', bio: 'Bio coming soon.' },
  { name: 'Rosemond Nkansah', role: 'Program Manager', linkedin: '', bio: 'Bio coming soon.' },
  { name: 'Osborn Mensah', role: 'Program Coordinator', linkedin: '', bio: 'Bio coming soon.' },
  { name: 'Deborah Agamasu', role: 'Program Coordinator', linkedin: '', bio: 'Bio coming soon.' },
  { name: 'Theresa Ammah', role: 'Administration Coordinator', linkedin: '', bio: 'Bio coming soon.' },
];

const boardMembers = [
  { name: 'Andani Kholinar', role: 'Board Chairman', linkedin: '', bio: 'Bio coming soon.' },
  { name: 'Peter Mireku', role: 'Vice Chairman', linkedin: '', bio: 'Bio coming soon.' },
  { name: 'Ewurama Asare', role: 'Board Secretary', linkedin: '', bio: 'Bio coming soon.' },
  { name: 'Martin Sasu', role: 'Board Treasurer', linkedin: '', bio: 'Bio coming soon.' },
  { name: 'Yahaya Abdul-Sallam', role: 'Member', linkedin: '', bio: 'Bio coming soon.' },
  { name: 'Pearl Kwakye', role: 'Member', linkedin: '', bio: 'Bio coming soon.' },
  { name: 'Adams Issaka', role: 'Member', linkedin: '', bio: 'Bio coming soon.' },
];

export default function About() {
  const [openStaffBio, setOpenStaffBio] = useState<number | null>(null);
  const [openBoardBio, setOpenBoardBio] = useState<number | null>(null);
  const [drawerBio, setDrawerBio] = useState<{ name: string; bio: string } | null>(null);

  // Carousel state
  const carouselImages = [
    'https://via.placeholder.com/800x600?text=IEP+Ghana+1',
    'https://via.placeholder.com/800x600?text=IEP+Ghana+2',
    'https://via.placeholder.com/800x600?text=IEP+Ghana+3',
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Intercultural Exchange Programs Ghana</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Bridging Cultures, Building Leaders</h2>
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
                {/* Functional carousel with placeholder images */}
                <div className="relative w-full aspect-[4/3] rounded-lg shadow-lg overflow-hidden">
                  {carouselImages.map((src, idx) => (
                    <img
                      key={src}
                      src={src}
                      alt={`IEP Ghana Carousel ${idx + 1}`}
                      className={`w-full h-full object-cover absolute left-0 top-0 transition-opacity duration-700 ${carouselIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                      style={{ zIndex: carouselIndex === idx ? 2 : 1 }}
                    />
                  ))}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {carouselImages.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-3 h-3 bg-white rounded-full ${carouselIndex === idx ? 'opacity-80' : 'opacity-40'}`}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
              {/* History images stacked vertically */}
              <div className="order-2 lg:order-1 flex flex-col gap-4">
                <div>
                  <img src="/images/about/history-1.jpg" alt="Historical image 1" className="rounded-lg shadow-lg w-full h-48 object-cover" onError={e => e.currentTarget.style.display='none'} />
                </div>
                <div>
                  <img src="/images/about/history-2.jpg" alt="Historical image 2" className="rounded-lg shadow-lg w-full h-48 object-cover" onError={e => e.currentTarget.style.display='none'} />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">Historical images</p>
              </div>
              {/* History text */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Our History</h2>
                <p className="mb-4">
                  IEP Ghana was founded in 1967, rooted in Ghana's rich tradition of international exchange and community-based education. With a long-standing commitment to advancing educational opportunities and intercultural understanding, IEP Ghana laid the foundation for what would later include the development of AFS Ghana as a partner initiative. Over the decades, IEP Ghana has evolved into an independent, mission-driven organisation focused on higher education mobility and local development through school-based programs. Today, we remain a trusted leader in international education and grassroots empowerment across Ghana.
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
                  <div key={member.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center relative">
                    <div className="relative mb-4 w-32 h-32">
                      <img src={imagePath} alt={member.name} className="w-32 h-32 rounded-full object-cover bg-gray-100" onError={e => e.currentTarget.style.display='none'} />
                    </div>
                    <div className="relative w-full flex flex-col items-center">
                      <div className="text-lg font-semibold text-gray-800 text-center inline-flex items-center">
                        {member.name}
                        <a href="#" className="ml-1 align-super" style={{ color: '#0A66C2', fontSize: '1rem', verticalAlign: 'super' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5.602z"/></svg>
                        </a>
                      </div>
                      <div className="text-sm text-gray-500 text-center mb-2">{member.role}</div>
                      <button
                        className="border border-primary text-primary text-xs font-semibold focus:outline-none px-4 py-2 rounded-full bg-white transition-colors hover:bg-primary hover:text-white"
                        onClick={() => setDrawerBio({ name: member.name, bio: member.bio })}
                      >
                        View Bio
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <h3 className="text-2xl font-semibold text-center mb-6">Our Board</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, idx) => {
                const imagePath = `/images/board/${member.name.toLowerCase().replace(/ /g, '-')}.jpg`;
                return (
                  <div key={member.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center relative">
                    <div className="relative mb-4 w-32 h-32">
                      <img src={imagePath} alt={member.name} className="w-32 h-32 rounded-full object-cover bg-gray-100" onError={e => e.currentTarget.style.display='none'} />
                    </div>
                    <div className="relative w-full flex flex-col items-center">
                      <div className="text-lg font-semibold text-gray-800 text-center inline-flex items-center">
                        {member.name}
                        <a href="#" className="ml-1 align-super" style={{ color: '#0A66C2', fontSize: '1rem', verticalAlign: 'super' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5.602z"/></svg>
                        </a>
                      </div>
                      <div className="text-sm text-gray-500 text-center mb-2">{member.role}</div>
                      <button
                        className="border border-primary text-primary text-xs font-semibold focus:outline-none px-4 py-2 rounded-full bg-white transition-colors hover:bg-primary hover:text-white"
                        onClick={() => setDrawerBio({ name: member.name, bio: member.bio })}
                      >
                        View Bio
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      {/* Side Drawer for Bio */}
      {drawerBio && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-30" onClick={() => setDrawerBio(null)} />
          <div className="ml-auto w-full max-w-md h-full bg-blue-50 shadow-xl p-8 flex flex-col">
            <button className="self-end text-gray-500 hover:text-gray-800 mb-4" onClick={() => setDrawerBio(null)}>&times;</button>
            <h2 className="text-2xl font-bold mb-4 text-primary">{drawerBio.name}</h2>
            <div className="text-gray-700 text-base whitespace-pre-line">This is a placeholder for the team/board member's bio. The full biography will appear here when available.</div>
          </div>
        </div>
      )}
    </>
  );
} 