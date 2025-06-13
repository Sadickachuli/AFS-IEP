import React, { useState } from 'react';
import SEO from '../components/shared/SEO';

export default function Programs() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

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
            {/* Study Abroad */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src="/images/programs/high-school.jpg" alt="Study Abroad" className="w-full md:w-1/3 h-56 object-cover rounded-lg mb-6 md:mb-0" onError={e => e.currentTarget.style.display='none'} />
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">1. Study Abroad</h2>
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
                {/* Featured Programs */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Richmond College Card */}
                  <div className="bg-white rounded-lg shadow flex flex-col items-stretch">
                    <img src="/images/programs/richmond-banner.jpg" alt="Richmond College Banner" className="h-40 w-full object-cover rounded-t-lg" onError={e => e.currentTarget.style.display='none'} />
                    <div className="flex flex-col items-center p-6 flex-1">
                      <img src="/images/partners/richmond-college.png" alt="Richmond College Logo" className="h-16 w-auto object-contain mb-4" onError={e => e.currentTarget.style.display='none'} />
                      <h3 className="text-lg font-bold text-primary mb-2 text-center">Richmond College (UK)</h3>
                      <p className="text-gray-700 text-sm mb-4 text-center">IEP Ghana is an official agent for Richmond College, a leading UK institution offering a wide range of undergraduate and postgraduate programs. We support students through the application process and provide guidance on scholarships, visas, and more.</p>
                      <div className="flex gap-2 justify-center mt-auto">
                        <button className="btn-secondary" onClick={() => setPdfUrl('/docs/richmond-brochure.pdf')}>Learn More</button>
                        <a href="http://richmondcollege.co.uk/" target="_blank" rel="noopener noreferrer" className="btn-primary">Visit</a>
                      </div>
                    </div>
                  </div>
                  {/* Go Elite Card */}
                  <div className="bg-white rounded-lg shadow flex flex-col items-stretch">
                    <img src="/images/programs/go-elite-banner.jpg" alt="Go Elite Banner" className="h-40 w-full object-cover rounded-t-lg" onError={e => e.currentTarget.style.display='none'} />
                    <div className="flex flex-col items-center p-6 flex-1">
                      <img src="/images/partners/go-elite.png" alt="Go Elite Logo" className="h-16 w-auto object-contain mb-4" onError={e => e.currentTarget.style.display='none'} />
                      <h3 className="text-lg font-bold text-primary mb-2 text-center">Go Elite</h3>
                      <p className="text-gray-700 text-sm mb-4 text-center">As a recruitment partner for Go Elite, IEP Ghana connects students to exclusive international study opportunities and career pathways. We help you explore programs, prepare your application, and succeed abroad.</p>
                      <div className="flex gap-2 justify-center mt-auto">
                        <button className="btn-secondary" onClick={() => setPdfUrl('/docs/go-elite-brochure.pdf')}>Learn More</button>
                        <a href="https://goelite.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">Visit</a>
                      </div>
                    </div>
                  </div>
                </div>
                {pdfUrl && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black bg-opacity-40" onClick={() => setPdfUrl(null)} />
                    <div className="relative bg-white rounded-lg shadow-lg p-4 w-full max-w-3xl mx-auto flex flex-col items-center">
                      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl" onClick={() => setPdfUrl(null)}>&times;</button>
                      <iframe src={pdfUrl} title="Brochure PDF" className="w-full h-[70vh] rounded" />
                    </div>
                  </div>
                )}
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
            {/* Global Skills Academy */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src="/images/programs/global-skills.jpg" alt="Global Skills Academy" className="w-full md:w-1/3 h-56 object-cover rounded-lg mb-6 md:mb-0" onError={e => e.currentTarget.style.display='none'} />
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">Global Skills Academy</h2>
                <p className="mb-2 font-bold">Empower Your Future with the Global Skills Academy</p>
                <p className="mb-2">The Global Skills Academy is a short-term training and certification program designed for students, young professionals, and educators. It offers thematic courses in Global Citizenship, Intercultural Communication, Sustainability, Leadership, and Digital Collaboration.</p>
                <ul className="list-disc list-inside mb-2 pl-4">
                  <li>4-week modular courses (2-hour weekly sessions)</li>
                  <li>Expert facilitators from Ghana and abroad</li>
                  <li>Interactive sessions with group projects and case studies</li>
                  <li>Digital certificate upon completion</li>
                </ul>
                <p className="mb-2">Courses: Global Citizenship, Intercultural Communication, Sustainability, Leadership, Digital Collaboration</p>
                <p className="mb-2 font-semibold">Price: GHS 600</p>
                <a href="/apply" className="btn-primary mt-2 inline-block">Sign Up</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 