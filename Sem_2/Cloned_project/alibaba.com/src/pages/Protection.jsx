import { Link } from 'react-router-dom';

const Protection = () => {
  return (
    <div>
      {/* Protection Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-16 px-5 text-center border-b border-amber-200">
        <span className="inline-block bg-orange-primary text-white px-2.5 py-1 rounded-full text-xs font-bold mb-4">
          FREE SERVICE
        </span>
        <h1 className="text-3xl md:text-4xl text-gray-800 mb-4">Trade Assurance</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Enjoy protection from payment to delivery.
        </p>
        <p className="text-sm text-gray-500 mt-2.5">
          Orders are protected when you pay through Alibaba.com
        </p>
      </section>

      {/* Benefits Section */}
      <div className="container-custom">
        <h2 className="section-title">What is covered?</h2>
        
        <div className="flex gap-8 mb-16 flex-wrap">
          {/* Card 1 */}
          <div className="flex-1 min-w-[280px] text-center p-8 rounded-xl shadow-sm bg-white border border-gray-200 transition-transform hover:-translate-y-1 hover:border-orange-primary">
            <div className="w-[70px] h-[70px] bg-orange-bg text-orange-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-5">
              💳
            </div>
            <h3 className="mb-2.5 text-gray-800">Safe & Easy Payments</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your money is held securely until you confirm delivery. We support over 20 payment methods globally.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 min-w-[280px] text-center p-8 rounded-xl shadow-sm bg-white border border-gray-200 transition-transform hover:-translate-y-1 hover:border-orange-primary">
            <div className="w-[70px] h-[70px] bg-orange-bg text-orange-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-5">
              🚚
            </div>
            <h3 className="mb-2.5 text-gray-800">Money-back Policy</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              If the product quality or shipping date varies from what you agreed to, you can claim your money back.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 min-w-[280px] text-center p-8 rounded-xl shadow-sm bg-white border border-gray-200 transition-transform hover:-translate-y-1 hover:border-orange-primary">
            <div className="w-[70px] h-[70px] bg-orange-bg text-orange-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-5">
              🎧
            </div>
            <h3 className="mb-2.5 text-gray-800">Shipping & Logistics</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Get accurate tracking and on-time delivery guarantees with our verified logistics partners.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="bg-gray-50 py-16 px-5 rounded-2xl">
          <h2 className="section-title">How to use Trade Assurance</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start relative gap-8 md:gap-0">
            {/* Connecting Line - Desktop only */}
            <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-gray-300 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 text-center flex-1">
              <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white">
                1
              </div>
              <h4 className="my-2.5">Place an Order</h4>
              <p className="text-xs text-gray-500 px-5">
                Find a supplier offering Trade Assurance and place your order online.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 text-center flex-1">
              <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white">
                2
              </div>
              <h4 className="my-2.5">Pay Securely</h4>
              <p className="text-xs text-gray-500 px-5">
                Pay through Alibaba.com using Credit Card, PayPal, or Bank Transfer.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 text-center flex-1">
              <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white">
                3
              </div>
              <h4 className="my-2.5">Receive Goods</h4>
              <p className="text-xs text-gray-500 px-5">
                Receive your shipment. If there is an issue, we will help resolve it.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl mb-5">Ready to source confidently?</h2>
          <Link to="/featured" className="big-btn">
            Find Suppliers Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Protection;