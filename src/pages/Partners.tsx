import React from 'react';
import SEO from '../components/shared/SEO';

const partners = [
  { name: 'AFS Intercultural Programs', url: 'https://afs.org/', logo: '/images/partners/afs.png', description: 'Global leader in intercultural exchange and education.' },
  { name: 'BASICS International', url: 'https://basicsinternational.org/', logo: '/images/partners/basics.png', description: 'Empowering children and communities through education and support.' },
  { name: 'Center for Sustainable Transformation - CeST', url: 'https://www.cestint.com/', logo: '/images/partners/cest.png', description: 'Promoting sustainable development and transformation.' },
  { name: 'Future Leaders UCC', url: 'https://futureleadersuccghana.wordpress.com/', logo: '/images/partners/futureleaders.png', description: 'Developing future leaders through education and mentorship.' },
  { name: 'The Street Children Empowerment Foundation (SCEF)', url: 'https://scef-international.org/', logo: '/images/partners/scef.png', description: 'Supporting and empowering street-connected children.' },
  { name: 'The Human Rights Advocacy Centre (HRAC)', url: 'http://hracghana.org/', logo: '/images/partners/hrac.png', description: 'Advocating for human rights and social justice.' },
  { name: 'The Street Academy', url: 'https://thestreetacademy.webs.com/', logo: '/images/partners/streetacademy.png', description: 'Providing education and support for vulnerable children.' },
  { name: 'Maven Heart Foundation', url: 'https://mavenheart.org/', logo: '/images/partners/mavenheart.png', description: 'Promoting health and well-being in communities.' },
  { name: 'Alafya Foundation', url: 'http://www.alafyafoundation.org/index_en.html', logo: '/images/partners/alafya.png', description: 'Empowering communities through education and health.' },
  { name: 'CLED Ghana', url: 'https://www.facebook.com/cledghana/', logo: '/images/partners/cled.png', description: 'Championing literacy and education for all.' },
  { name: 'Fafali Organization', url: 'https://fafaliorganization.org/', logo: '/images/partners/fafali.png', description: 'Empowering children and communities in Ghana.' },
  { name: 'Henry House Community School', url: 'https://www.henryhousecommunityschool.com/', logo: '/images/partners/henryhouse.png', description: 'Providing quality education for children.' },
];

export default function Partners() {
  return (
    <>
      <SEO
        title="Our Partners"
        description="IEP Ghana works with leading organizations to create global impact."
      />
      <div className="py-12">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We work closely with academic institutions, international NGOs, government bodies, and community organisations. These partnerships allow us to create meaningful pathways for students, strengthen educational systems, and support the development of culturally competent and globally minded citizens.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((partner) => (
                <li key={partner.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                  <a href={partner.url} target="_blank" rel="noopener noreferrer">
                    <img src={partner.logo} alt={partner.name + ' logo'} className="h-16 mb-4 object-contain" onError={e => e.currentTarget.style.display='none'} />
                  </a>
                  <div className="text-lg font-bold text-primary mb-2">{partner.name}</div>
                  <div className="text-gray-600 text-sm mb-2">{partner.description}</div>
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">Visit Website</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
} 