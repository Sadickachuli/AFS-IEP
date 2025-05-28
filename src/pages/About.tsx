import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'Executive Director',
    image: '/team/director.jpg',
    bio: 'With over 15 years of experience in international education, John leads our mission to create meaningful cultural exchanges.'
  },
  {
    name: 'Sarah Smith',
    role: 'Program Coordinator',
    image: '/team/coordinator.jpg',
    bio: 'Sarah ensures smooth operation of our exchange programs and maintains strong relationships with host families and schools.'
  },
  {
    name: 'Jane Doe',
    role: 'Cultural Affairs Director',
    image: '/team/cultural.jpg',
    bio: 'Jane brings authentic Ghanaian cultural experiences to our programs and develops cultural training materials.'
  },
  {
    name: 'Mary Doe',
    role: 'Student Support Specialist',
    image: '/team/support.jpg',
    bio: 'Mary provides comprehensive support to exchange students and helps them navigate their experience in Ghana.'
  }
];

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about IEP Ghana's mission, history, values, and the dedicated team behind our successful cultural exchange programs."
      />
      <div className="py-12">
        {/* Mission Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
              <p className="text-xl">
                To foster global understanding and cultural appreciation through meaningful
                exchange programs that create lasting connections between Ghana and the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <h2 className="text-3xl font-bold mb-6">Our History</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2000, IEP Ghana began with a vision to bridge cultures
                    through educational exchange. What started as a small initiative has
                    grown into one of Ghana's leading cultural exchange organizations.
                  </p>
                  <p>
                    Over the past two decades, we've facilitated thousands of successful
                    exchanges, building lasting relationships between Ghana and
                    communities worldwide.
                  </p>
                  <p>
                    Today, we continue to expand our programs while maintaining our
                    commitment to personal attention and cultural authenticity.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <img
                  src="/about-history.jpg"
                  alt="IEP Ghana History"
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">Cultural Understanding</h3>
                <p className="text-gray-600">
                  We believe in the power of cultural exchange to break down barriers
                  and foster global understanding.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">Educational Excellence</h3>
                <p className="text-gray-600">
                  We maintain high standards in our programs to ensure meaningful
                  learning experiences for all participants.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">Community Impact</h3>
                <p className="text-gray-600">
                  We strive to create positive change in both local and global
                  communities through our exchange programs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About; 