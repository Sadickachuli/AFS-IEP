import React from 'react';
import SEO from '../components/shared/SEO';

export default function Impact() {
  return (
    <>
      <SEO
        title="Our Impact"
        description="Stories of IEP Ghana's impact, including the Yamoransa ICT Center and Weltwärts volunteers."
      />
      <div className="py-12">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover how IEP Ghana and its partners are making a difference in communities and lives across Ghana and beyond.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Partnering for Progress: IEP Ghana and Yale Alumni Drive Sustainable Change in Yamoransa</h2>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                {/* Yamoransa ICT Center image */}
                <img src="/images/impact/yamoransa-ict.jpg" alt="Yamoransa ICT Center" className="w-full h-64 object-cover rounded-lg mb-4" onError={e => e.currentTarget.style.display='none'} />
              </div>
              <p className="mb-2">
                In 2012, IEP Ghana proudly launched a transformative partnership with the Yale Alumni Service Corps (YASC) to promote sustainable development and cultural exchange in Yamoransa, a vibrant community of 4,700 residents along Ghana's Cape Coast, renowned for its kenkey production.
              </p>
              <p className="mb-2">
                This collaboration brought together the expertise and commitment of Yale alumni, the local leadership of IEP Ghana, and the passion of the Yamoransa people to co-create lasting solutions that empower the community.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-2">A Hub for Opportunity: The Yamoransa Community ICT Centre</h3>
              <p className="mb-2">
                The centerpiece of this partnership is the Yamoransa Community Information Communication Technology Center (ICTC) — a 5,000-square-foot facility designed to serve as a launchpad for digital learning, innovation, and entrepreneurship.
              </p>
              <ul className="list-disc list-inside mb-4 pl-4">
                <li>Grassroots Leadership: The people of Yamoransa contributed funds, labor, and local knowledge, laying the foundation for a truly collaborative project. YASC complemented this with financial resources and hands-on volunteerism during service trips in 2012, 2013, and 2014.</li>
                <li>Lasting Impact: More than 150 Yale alumni volunteers taught over 800 children, hosted creative arts and sports camps, ran a medical clinic serving nearly 1,000 patients, and facilitated entrepreneurial training — creating ripple effects in education, health, and business.</li>
                <li>Sustainable Future: Today, the ICT Center is owned and operated by the Yamoransa community, offering continuous access to digital tools, educational programming, and economic opportunities. It stands as a symbol of what global partnerships grounded in respect and reciprocity can achieve.</li>
              </ul>
              <p>
                IEP Ghana's collaboration with Yale Alumni is a testament to the power of intercultural exchange and long-term partnerships. Together, we've moved beyond short-term service to build infrastructure, relationships, and opportunities that endure.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Global Impact Through Youth Engagement: Welcoming Weltwärts Volunteers to Ghana</h2>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                {/* Weltwärts volunteers image */}
                <img src="/images/impact/weltwaerts.jpg" alt="Weltwärts Volunteers" className="w-full h-64 object-cover rounded-lg mb-4" onError={e => e.currentTarget.style.display='none'} />
              </div>
              <p className="mb-2">
                Since 2008, the Weltwärts program—launched by the German Ministry for Economic Cooperation and Development (BMZ)—has become one of the world's most impactful global voluntary service initiatives. With over 35,000 young Germans having served abroad in more than 150 countries, Weltwärts is not only a bridge between cultures but also a platform for social transformation.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-2">A Tradition of Service and Exchange</h3>
              <p className="mb-2">
                Weltwärts was born out of Germany's long-standing tradition of youth volunteerism, which spans over six decades. Inspired by this legacy and driven by a commitment to international cooperation, AFS Germany played a critical role in shaping the program's early concept through its participation in the national umbrella NGO platform for international development exchanges.
              </p>
              <p className="mb-2">
                As one of the program's founding and leading partners, AFS Germany has sent more than 4,000 volunteers abroad and welcomed approximately 200 young people—primarily from Latin America—into Germany.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-2">Ghana's Role in the Weltwärts Journey</h3>
              <p className="mb-2">
                Ghana joined the Weltwärts network early on and has since become a vibrant host country. Since 2008, over 165 volunteers have served in Ghana, partnering with IEP Ghana and other local organizations to contribute meaningfully to community development and capacity building.
              </p>
              <ul className="list-disc list-inside mb-4 pl-4">
                <li>Assisting as teaching aides and language instructors</li>
                <li>Contributing to advocacy and administrative support</li>
                <li>Promoting public health and human rights awareness</li>
                <li>Supporting civic engagement and good governance initiatives</li>
                <li>Providing care and support in child welfare and reproductive health</li>
                <li>Assisting at schools for the blind and the deaf, promoting inclusion and equity</li>
              </ul>
              <h3 className="text-xl font-bold mt-6 mb-2">Transformative Learning for All</h3>
              <p className="mb-2">
                Beyond their service contributions, volunteers gain invaluable life experiences—learning from Ghanaian communities, understanding different cultural realities, and reflecting on their roles in an interconnected world. The exchange is truly mutual, fostering lasting friendships and global citizenship.
              </p>
              <p>
                IEP Ghana is proud to be part of this global movement, helping shape a generation of compassionate, globally-minded leaders through its partnership with Weltwärts and AFS Germany. We look forward to welcoming more volunteers who are ready to serve, learn, and grow—together with Ghanaian communities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 