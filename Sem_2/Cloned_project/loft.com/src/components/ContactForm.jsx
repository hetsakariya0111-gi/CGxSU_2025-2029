import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    interest: '',
    message: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-loft-gray py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl text-loft-blue font-bold mb-8">Ready to Discuss Your Mission?</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: First Name, Last Name, Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-loft-blue font-bold mb-2 text-sm">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:border-loft-orange transition-colors"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-loft-blue font-bold mb-2 text-sm">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:border-loft-orange transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-loft-blue font-bold mb-2 text-sm">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:border-loft-orange transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Company, Country, Interest */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="company" className="block text-loft-blue font-bold mb-2 text-sm">Company *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:border-loft-orange transition-colors"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-loft-blue font-bold mb-2 text-sm">Country *</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:border-loft-orange transition-colors"
              >
                <option value="">Select an option</option>
                <option value="USA">United States of America</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
              </select>
            </div>

            <div>
              <label htmlFor="interest" className="block text-loft-blue font-bold mb-2 text-sm">Interest *</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:border-loft-orange transition-colors"
              >
                <option value="">Select an option</option>
                <option value="capabilities">Learn more about Loft's capabilities</option>
                <option value="partnership">Partnerships or collaboration</option>
                <option value="media">Media and press inquiries</option>
                <option value="investor">Investor relations</option>
                <option value="recruiting">Recruiting</option>
                <option value="general">General questions</option>
              </select>
            </div>
          </div>

          {/* Message Field - Full Width */}
          <div>
            <label htmlFor="message" className="block text-loft-blue font-bold mb-2 text-sm">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:border-loft-orange transition-colors resize-y"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              By sending this form I confirm that I have read and accept the <a href="/data-policy" className="text-loft-orange underline hover:no-underline">Data Policy</a>
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="bg-loft-orange text-white px-10 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;