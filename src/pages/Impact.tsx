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
            <div>
              <h2 className="text-2xl font-semibold mb-4">IEP Ghana's Impact Through the AFS Partner Network</h2>
              <p className="mb-2">
                As a committed member of the AFS global partner network, Intercultural Exchange Programs (IEP) Ghana plays a pivotal role in shaping young global citizens through intercultural learning and international exchange. IEP Ghana has played a transformative role in connecting Ghanaian youth, educators, and communities to global learning opportunities. Through our hosting and sending programs, and our expanded work in global citizenship education, STEM, and teacher development, IEP Ghana is shaping a new generation of globally minded leaders. For over half a century, IEP Ghana has proudly facilitated the hosting and sending of students under various AFS programs, providing transformative experiences for both Ghanaian participants and international students.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-2">Building Global Bridges: Sending Ghanaian Youth Abroad</h3>
              <p className="mb-2">
                IEP Ghana has successfully sent hundreds of Ghanaian students to countries around the world through flagship programs like the YES (Kennedy – Lugar Youth Exchange and Study) and AFS Year and Semester Programs. These students live with host families, attend local high schools, and participate in community service—immersing themselves in new cultures while acting as ambassadors of Ghana.
              </p>
              <ul className="list-disc list-inside mb-4 pl-4">
                <li>Global awareness and leadership skills</li>
                <li>Improved academic and language competencies</li>
                <li>Stronger cross-cultural communication abilities</li>
                <li>A deeper appreciation of diversity and inclusion</li>
              </ul>
              <p className="mb-2">
                Many of these young alumni go on to lead meaningful projects in their communities, contribute to national development, and advocate for intercultural understanding.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-2">Welcoming the World to Ghana: Hosting International Participants</h3>
              <p className="mb-2">
                IEP Ghana also plays a vital role in hosting international students, offering them the opportunity to live with Ghanaian families and study in local high schools. These participants engage deeply with Ghana's rich traditions, languages, and community life—broadening their worldview and challenging cultural assumptions.
              </p>
              <ul className="list-disc list-inside mb-4 pl-4">
                <li>Fosters mutual understanding between Ghanaian communities and the world</li>
                <li>Strengthens people-to-people diplomacy</li>
                <li>Promotes Ghana as a hospitable, diverse, and educationally rich destination</li>
              </ul>
              <p className="mb-2">
                Host families, schools, and volunteers across Ghana benefit from these relationships, creating lifelong bonds and shared learning.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-2">Empowering Educators and Girls in STEM: Beyond Exchange</h3>
              <p className="mb-2">
                In addition to traditional exchange programs, IEP Ghana is a strong advocate for educational transformation through global learning initiatives:
              </p>
              <ul className="list-disc list-inside mb-4 pl-4">
                <li>Through the AFS Effect+ Program, IEP Ghana has trained over 100 teachers and educators in how to integrate Global Competence Education into their classrooms. These workshops equip teachers with practical tools to help students explore global issues, think critically, and take informed action in their communities.</li>
                <li>In 2024 and 2025, IEP Ghana led a successful campaign that saw 11 Ghanaian girls selected for the Global STEM Accelerators—an award-winning virtual exchange program that empowers girls aged 15–17.5 to pursue careers in science, technology, engineering, and math. The program also engages educators and mentors who support girls throughout their journey, expanding the reach and impact of STEM education across Ghana.</li>
              </ul>
              <p className="mb-2">
                These initiatives are at the heart of our mission to make inclusive, high-quality global education accessible to all—particularly to girls, marginalized youth, and educators in under-resourced communities.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-2">A Lasting Impact</h3>
              <p className="mb-2">
                IEP Ghana's role in the AFS partner network is about more than just exchanges—it's about investing in people; it's about transformative education and the power of human connection. Our programs build the foundations of peace, understanding, and equity by empowering students, educators, and communities to grow through intercultural learning and collaboration.
              </p>
              <p className="mb-2">
                Our alumni—both local and international—carry with them the values of peace, inclusion, and responsible global citizenship.
              </p>
              <p className="mb-2">
                Through strategic school partnerships, targeted outreach, and strong alumni engagement, IEP Ghana continues to grow its impact—ensuring that young people in and from Ghana are active contributors to global understanding and sustainable development.
              </p>
              <p className="mb-2">
                As we continue to expand our outreach through schools, civil society, and international partners, IEP Ghana remains committed to building a more just and connected world—starting right here in Ghana.
              </p>
              <p className="mb-2">
                IEP Ghana remains committed to expanding access to intercultural experiences, shaping leaders who are not only proud of their roots but also prepared to thrive in an interconnected world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 