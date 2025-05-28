import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';

interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  ageRange: string;
  image: string;
  features: string[];
}

const programs: Program[] = [
  {
    id: 'high-school',
    title: 'High School Exchange',
    description: 'Experience a transformative academic year in Ghana or send your child abroad for a cultural immersion experience.',
    duration: '1 Academic Year',
    ageRange: '15-18 years',
    image: '/high-school.jpg',
    features: [
      'Full academic year in a Ghanaian high school',
      'Host family accommodation',
      'Cultural excursions and activities',
      'Language learning support',
      'Academic counseling'
    ]
  },
  {
    id: 'volunteer',
    title: 'Volunteer Programs',
    description: 'Make a meaningful impact while experiencing Ghanaian culture through our various volunteer programs.',
    duration: '2-12 weeks',
    ageRange: '18+ years',
    image: '/volunteer.jpg',
    features: [
      'Community development projects',
      'Teaching opportunities',
      'Healthcare initiatives',
      'Environmental conservation',
      'Cultural exchange activities'
    ]
  },
  {
    id: 'language-culture',
    title: 'Language & Culture Program',
    description: 'Immerse yourself in Ghanaian languages and cultural practices through our intensive programs.',
    duration: '4-8 weeks',
    ageRange: '16+ years',
    image: '/language.jpg',
    features: [
      'Local language instruction',
      'Cultural workshops',
      'Traditional craft lessons',
      'Community engagement',
      'Cultural excursions'
    ]
  }
];

const Programs = () => {
  return (
    <>
      <SEO
        title="Our Programs"
        description="Explore IEP Ghana's diverse range of exchange programs including high school exchanges, volunteer opportunities, and language & culture programs."
      />
      <div className="py-12">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Our Exchange Programs
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Discover life-changing opportunities for cultural exchange and personal growth
              through our diverse range of programs.
            </p>
          </div>
        </section>

        {/* Programs List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-lg shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800">{program.title}</h2>
                    <p className="text-lg text-gray-600">{program.description}</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>Duration: {program.duration}</span>
                      <span>Age: {program.ageRange}</span>
                    </div>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Link
                        to={`/programs/${program.id}`}
                        className="btn-primary inline-block"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Take the first step towards an unforgettable cultural exchange experience.
              Apply now or contact us to learn more about our programs.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/apply" className="btn-primary">
                Apply Now
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Programs; 