import React from 'react';
import SEO from '../components/shared/SEO';

export default function Programs() {
  return (
    <>
      <SEO
        title="Our Programs"
        description="Explore IEP Ghana's diverse range of programs: Study Abroad in Higher Education and Community Education & Development Initiatives."
      />
      <div className="py-12">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs and Projects</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover how IEP Ghana empowers students and communities through international education and local development initiatives.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-16">
            {/* Study Abroad in Higher Education */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Team image, only render if file exists */}
              <img src="/images/programs/high-school.jpg" alt="High School Exchange" className="w-full md:w-1/3 h-56 object-cover rounded-lg mb-6 md:mb-0" onError={e => e.currentTarget.style.display='none'} />
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">1. Study Abroad in Higher Education</h2>
                <p className="mb-2">
                  IEP Ghana supports students aspiring to pursue higher education in top global destinations, including the United Kingdom, Canada, and the United States. Our services include:
                </p>
                <ul className="list-disc list-inside mb-4 pl-4">
                  <li>Personalized study abroad advising</li>
                  <li>University selection and application support</li>
                  <li>Scholarship and financial aid guidance</li>
                  <li>Visa and pre-departure preparation</li>
                  <li>Alumni mentoring and reintegration support</li>
                </ul>
                <p>
                  We empower students to navigate the international admissions process with confidence and build the skills needed to thrive abroad.
                </p>
              </div>
            </div>
            {/* Community Education & Development Initiatives */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src="/images/programs/language.jpg" alt="Community Education & Development Initiatives" className="w-full md:w-1/3 h-56 object-cover rounded-lg mb-6 md:mb-0" onError={e => e.currentTarget.style.display='none'} />
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">2. Community Education &amp; Development Initiatives</h2>
                <p className="mb-2">
                  At the heart of IEP Ghana's mission is a belief in educational equity. Our community projects aim to strengthen learning environments and create opportunities for young people through:
                </p>
                <ul className="list-disc list-inside mb-4 pl-4">
                  <li>School-Based Programs: Leadership and citizenship workshops, reading campaigns, and intercultural learning sessions for students and teachers.</li>
                  <li>Educational Fundraising Initiatives: Mobilizing support for schools in need—ranging from books and equipment to infrastructure and scholarships.</li>
                  <li>Teacher &amp; Youth Empowerment Projects: Training programs, mini-grants, and community engagement activities that elevate local education systems.</li>
                </ul>
                <p>
                  Through these efforts, we work to ensure that every child, regardless of background, has access to quality education and the chance to participate in a globalised world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 