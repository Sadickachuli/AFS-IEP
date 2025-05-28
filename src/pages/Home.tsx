import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="IEP Ghana offers life-changing international exchange programs that promote cultural understanding and global citizenship. Join us for a transformative experience."
      />
      <div>
        {/* Hero Section */}
        <section className="relative h-[90vh] bg-gray-900 overflow-hidden">
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
              className="max-w-2xl text-white"
            >
              <h1 className="text-5xl font-bold mb-6">
                Experience Ghana Through Cultural Exchange
              </h1>
              <p className="text-xl mb-8">
                Join IEP Ghana for life-changing international exchange programs that
                promote cultural understanding and global citizenship.
              </p>
              <div className="space-x-4">
                <Link to="/programs" className="btn-primary">
                  Explore Programs
                </Link>
                <Link to="/host-family" className="btn-secondary">
                  Become a Host Family
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src="/images/programs/high-school.jpg"
                  alt="High School Exchange"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">High School Exchange</h3>
                  <p className="text-gray-600 mb-4">
                    Experience a year abroad as a high school student in Ghana or send
                    your child to study overseas.
                  </p>
                  <Link to="/programs/high-school" className="text-primary hover:underline">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src="/images/programs/volunteer.jpg"
                  alt="Volunteer Programs"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Volunteer Programs</h3>
                  <p className="text-gray-600 mb-4">
                    Make a difference in local communities while immersing yourself in
                    Ghanaian culture.
                  </p>
                  <Link to="/programs/volunteer" className="text-primary hover:underline">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src="/images/programs/language.jpg"
                  alt="Language & Culture"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Language & Culture</h3>
                  <p className="text-gray-600 mb-4">
                    Learn local languages and immerse yourself in Ghana's rich cultural
                    heritage.
                  </p>
                  <Link to="/programs/language-culture" className="text-primary hover:underline">
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
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600">Exchange Students</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Host Families</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Partner Schools</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step towards an unforgettable cultural exchange experience
              with IEP Ghana.
            </p>
            <Link to="/apply" className="btn-secondary">
              Apply Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 