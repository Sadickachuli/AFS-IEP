import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
import Apply from './Apply';

const Home = () => {
  const partnerLogos = [
    { name: 'AFS', url: 'https://afs.org/', logo: '/images/partners/afs.png' },
    { name: 'BASICS', url: 'https://basicsinternational.org/', logo: '/images/partners/basics.png' },
    { name: 'CeST', url: 'https://www.cestint.com/', logo: '/images/partners/cest.png' },
    { name: 'Future Leaders', url: 'https://futureleadersuccghana.wordpress.com/', logo: '/images/partners/futureleaders.png' },
    { name: 'SCEF', url: 'https://scef-international.org/', logo: '/images/partners/scef.png' },
    { name: 'HRAC', url: 'http://hracghana.org/', logo: '/images/partners/hrac.png' },
    { name: 'Street Academy', url: 'https://thestreetacademy.webs.com/', logo: '/images/partners/streetacademy.png' },
    { name: 'Maven Heart', url: 'https://mavenheart.org/', logo: '/images/partners/mavenheart.png' },
    { name: 'Alafya', url: 'http://www.alafyafoundation.org/index_en.html', logo: '/images/partners/alafya.png' },
    { name: 'CLED', url: 'https://www.facebook.com/cledghana/', logo: '/images/partners/cled.png' },
    { name: 'Fafali', url: 'https://fafaliorganization.org/', logo: '/images/partners/fafali.png' },
    { name: 'Henry House', url: 'https://www.henryhousecommunityschool.com/', logo: '/images/partners/henryhouse.png' },
  ];

  const [showApply, setShowApply] = useState(false);

  return (
    <>
      <SEO
        title="Home"
        description="IEP Ghana offers life-changing international exchange programs that promote cultural understanding and global citizenship. Join us for a transformative experience."
      />
      <div>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-gray-900 overflow-hidden flex items-center pt-24 pb-8 md:pt-32 md:pb-0">
          <div className="absolute inset-0">
            {/* Mobile Image */}
            <img
              src="/images/hero/hero-bg.jpg"
              alt="Students in Ghana"
              className="w-full h-full object-cover opacity-50 md:hidden"
            />
            {/* Desktop Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="hidden md:block w-full h-full object-cover opacity-50"
            >
              <source src="/images/hero/hero-bg.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white w-full"
            >
              <h1 className="text-5xl font-bold mb-6">
                Empowering Ghana's Youth Through Global Learning
              </h1>
              <p className="text-xl mb-8">
                IEP Ghana advances intercultural learning, leadership, and educational opportunities for young people, families, and communities. Join us to bridge cultures, build leaders, and create lasting impact in Ghana and beyond.
              </p>
              <div className="space-x-4 flex flex-col sm:flex-row gap-4">
                <Link to="/programs" className="btn-primary">
                  Explore Programs
                </Link>
                <button className="btn-secondary" onClick={() => setShowApply(true)}>
                  Apply to Programs
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {showApply && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-40" onClick={() => setShowApply(false)} />
            <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl mx-auto overflow-y-auto max-h-[90vh]">
              <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl" onClick={() => setShowApply(false)}>&times;</button>
              <Apply />
            </div>
          </div>
        )}

        {/* Our Partners Title and Infinite Marquee */}
        <div className="bg-white pt-6 pb-6 overflow-x-hidden -mt-2">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Our Partners</h2>
            <div className="relative w-full overflow-x-hidden" style={{ transform: 'translateY(-2px)' }}>
              <div
                className="marquee-track flex whitespace-nowrap gap-8"
                style={{
                  width: `${partnerLogos.length * 2 * 140}px`, // 140px per logo (adjust as needed)
                  animation: 'scroll-x 30s linear infinite',
                }}
              >
                {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
                  <a key={partner.name + idx} href={partner.url} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img
                      src={partner.logo}
                      alt={partner.name + ' logo'}
                      className="h-12 w-auto mx-6 object-contain inline"
                      style={{ minWidth: 120 }}
                      onError={e => e.currentTarget.style.display='none'}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image coming soon</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Study Abroad</h3>
                  <p className="text-gray-600 mb-4">
                    We empower students to navigate the international admissions process with confidence and build the skills needed to thrive abroad.
                  </p>
                  <Link to="/programs" className="text-primary hover:underline">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image coming soon</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Volunteer Programs</h3>
                  <p className="text-gray-600 mb-4">
                    Make a difference in local communities while immersing yourself in Ghanaian culture.
                  </p>
                  <Link to="/volunteers" className="text-primary hover:underline">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image coming soon</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Community Education & Development Initiatives</h3>
                  <p className="text-gray-600 mb-4">
                    Learn local languages, participate in community projects, and immerse yourself in Ghana's rich cultural heritage.
                  </p>
                  <Link to="/programs" className="text-primary hover:underline">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                <div className="text-gray-600">Exchange Students</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Young Community Leaders</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Community Project Organisations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">58+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership CTA Section */}
        <section className="bg-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Partner With IEP Ghana</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in creating life-changing opportunities for youth and communities. We welcome partnerships with schools, NGOs, companies, and individuals who share our vision for global citizenship and educational equity.
            </p>
            <Link to="/partnership" className="btn-primary bg-accent text-white font-bold px-8 py-3 rounded-md shadow hover:bg-orange-700 transition-colors">
              Become a Partner
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 