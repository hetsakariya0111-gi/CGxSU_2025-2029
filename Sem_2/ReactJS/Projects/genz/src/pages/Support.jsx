import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const faqs = [
  {
    question: "How do I upgrade my current plan?",
    answer: "You can upgrade your plan at any time by visiting the Billing section in your dashboard. Changes take effect immediately, and you'll be charged a prorated amount for the remainder of the billing cycle.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Yes! We specialize in tailored solutions for enterprise clients. Please reach out to our sales team through the contact form below or email us directly at enterprise@genz.agency to discuss your specific needs.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 14-day money-back guarantee for all our digital products. If you're not completely satisfied within the first two weeks, simply contact our support team for a full, no-questions-asked refund.",
  },
  {
    question: "How quickly can I expect a response from support?",
    answer: "Our standard support hours are Monday-Friday, 9 AM to 6 PM EST. We aim to respond to all inquiries within 24 hours. Priority support customers typically receive responses within 2 hours.",
  },
  {
    question: "Do you provide white-label services?",
    answer: "Absolutely. We offer comprehensive white-label services for agencies wanting to expand their offerings without increasing headcount. Let's talk about how we can partner up.",
  }
];

const categories = [
  { title: "Account & Billing", icon: "💳", desc: "Manage your subscription, invoices, and payment methods." },
  { title: "Technical Support", icon: "🛠️", desc: "Get help with integrations, API usage, and bug reports." },
  { title: "Partnerships", icon: "🤝", desc: "Explore collaboration opportunities and affiliate programs." },
  { title: "General Inquiries", icon: "✉️", desc: "Everything else you might need help with." },
];

export default function Support() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans selection:bg-amber-400 selection:text-white">
      <Nav />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 sm:px-12 md:px-24 lg:px-40 text-center bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-sm">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            How can we <span className="text-amber-500 relative inline-block">help you?<svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-200" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 0" stroke="currentColor" strokeWidth="3" fill="none" /></svg></span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Whether you need help with a project, have a question about our services, or just want to say hello—our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6 sm:px-12 md:px-24 lg:px-40 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 group cursor-pointer text-center sm:text-left shadow-sm">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100 mx-auto sm:mx-0">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-3">{cat.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{cat.desc}</p>
                <span className="text-amber-500 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Get Help <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Contact Section */}
      <section className="py-24 px-6 sm:px-12 md:px-24 lg:px-40 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* FAQ Accordion */}
            <div>
              <div className="mb-10">
                <span className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-2 block">Quick Answers</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
              </div>
              
              <div className="flex flex-col gap-4">
                {faqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-amber-300 bg-amber-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'}`}
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900"
                    >
                      <span>{faq.question}</span>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-amber-100 text-amber-600 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </span>
                    </button>
                    <div 
                      className={`px-6 text-slate-600 leading-relaxed transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0 overflow-hidden'}`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-amber-50 border border-amber-100 rounded-[2rem] p-8 sm:p-12 shadow-xl relative overflow-hidden h-fit">
              {/* Decorative blob */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-300 rounded-full blur-[80px] opacity-40 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Still need help?</h3>
                <p className="text-slate-600 mb-8 font-medium">Send us a direct message and we'll get back to you.</p>

                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                       <label className="text-sm text-slate-700 font-bold" htmlFor="name">First Name</label>
                       <input type="text" id="name" className="w-full bg-white border border-amber-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors shadow-sm" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm text-slate-700 font-bold" htmlFor="email">Email Address</label>
                       <input type="email" id="email" className="w-full bg-white border border-amber-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors shadow-sm" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-slate-700 font-bold" htmlFor="subject">Subject</label>
                    <select id="subject" className="w-full bg-white border border-amber-200 rounded-xl px-4 py-3 text-slate-900 appearance-none focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors shadow-sm">
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Billing Question</option>
                      <option>Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm text-slate-700 font-bold" htmlFor="message">How can we help?</label>
                     <textarea id="message" rows="4" className="w-full bg-white border border-amber-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-none shadow-sm" placeholder="Tell us about your project or issue..."></textarea>
                  </div>

                  <button className="mt-4 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-slate-900/10 active:scale-[0.98]">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
