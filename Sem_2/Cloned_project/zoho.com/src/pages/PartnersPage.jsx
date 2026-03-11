import { Link } from 'react-router-dom';

const PartnersPage = () => {
  const benefits = [
    {
      title: 'Domain expertise and guidance',
      desc: 'Zoho partners bring specialized knowledge of Zoho products, industry solutions, and business processes.',
      icon: '🎯'
    },
    {
      title: 'Customized solutions',
      desc: 'Partners deliver bespoke solutions tailored to the unique requirements and goals of each customer.',
      icon: '⚙️'
    },
    {
      title: 'Rapid implementation',
      desc: 'Leveraging their proficiency with Zoho products, Partners expedite the implementation process.',
      icon: '⚡'
    },
    {
      title: 'Increased productivity',
      desc: 'Collaborating with Zoho partners leads to enhanced productivity and operational efficiency.',
      icon: '📈'
    },
    {
      title: 'Training and Continued Support',
      desc: 'Partner provide comprehensive training and ongoing support to acquire new skills and enhance capabilities.',
      icon: '🎓'
    },
    {
      title: 'Scalability and adaptability',
      desc: 'Partner enable customers to scale their Zoho solutions as their business grows.',
      icon: '📊'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">What is a Zoho Partner?</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Partner with us to grow your business and deliver exceptional value to your customers.</p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-600">
            BECOME A PARTNER
          </button>
        </div>
      </section>

      {/* Benefits Section - WITH ICONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Partner with Zoho?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">Join our partner program and unlock new opportunities for growth and success.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 border rounded-xl hover:shadow-xl transition group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to become a Zoho Partner?</h2>
          <p className="text-gray-600 mb-8">Join our global network of partners and start growing your business today.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700">
            APPLY NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;