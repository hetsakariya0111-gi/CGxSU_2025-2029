import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const openings = [
  {
    id: 1,
    title: 'Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    emoji: '💻',
    desc: 'Build stunning UIs using React, Tailwind and modern web tech. You care deeply about performance and pixel-perfect design.',
    tags: ['React', 'Tailwind', 'JavaScript'],
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Hybrid',
    emoji: '🎨',
    desc: 'Craft beautiful, intuitive experiences from wireframe to final product. You balance aesthetics with usability.',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    id: 3,
    title: 'Backend Engineer',
    type: 'Full-time',
    location: 'Remote',
    emoji: '⚙️',
    desc: 'Design and build scalable APIs and services. You love clean architecture, databases, and making things fast.',
    tags: ['Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    id: 4,
    title: 'Marketing Strategist',
    type: 'Part-time',
    location: 'Remote',
    emoji: '📣',
    desc: 'Drive brand awareness and lead generation through creative campaigns. You know how to make noise on the internet.',
    tags: ['SEO', 'Social Media', 'Analytics'],
  },
]

const perks = [
  { icon: '🌍', title: 'Work From Anywhere', desc: 'Fully remote-first culture with flexible hours that fit your lifestyle.' },
  { icon: '📈', title: 'Fast Growth', desc: 'Work on real projects that ship. Your impact is visible from day one.' },
  { icon: '💸', title: 'Competitive Pay', desc: 'We pay for your skills. No lowballing — ever.' },
  { icon: '🎓', title: 'Learning Budget', desc: 'Annual budget for courses, books, and conferences to keep you sharp.' },
  { icon: '🧘', title: 'Mental Wellness', desc: 'Paid mental health days, no-meeting Fridays, and a no-hustle culture.' },
  { icon: '🤝', title: 'Amazing Team', desc: 'Collaborate with talented, humble creators who actually care.' },
]

export default function Career() {
  const [applied, setApplied] = useState(null)

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans selection:bg-amber-400 selection:text-white">
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 sm:px-12 md:px-24 lg:px-40 bg-white border-b border-slate-200 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100 rounded-full blur-[120px] opacity-70 pointer-events-none mix-blend-multiply flex-shrink-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60 pointer-events-none mix-blend-multiply" />

        <div className="relative z-10 max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-sm font-bold mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            We're Hiring
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Do Your Best Work. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">
              Grow With Us.
            </span>
          </h1>
          <p className="text-slate-500 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
            Join a collective of creators shaping the future of digital brands. We prize autonomy, craft, and making an impact.
          </p>
          <a
            href="#openings"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-full overflow-hidden transition-all hover:bg-slate-800 shadow-xl shadow-slate-900/10 hover:-translate-y-1"
          >
            <span className="relative z-10">Explore Roles</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-24 px-6 sm:px-12 md:px-24 lg:px-40 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-16 max-w-2xl">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Why Life Here is <span className="text-amber-500">Different</span></h2>
              <p className="text-slate-500 text-lg">We treat our team like adults. That means maximum flexibility, top-tier compensation, and zero bureaucracy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="group p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{perk.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section id="openings" className="py-24 px-6 sm:px-12 md:px-24 lg:px-40 bg-white border-y border-slate-200 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-slate-100">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Open Roles</h2>
              <p className="text-slate-500 text-lg">Find where you fit in our mission.</p>
            </div>
            <div className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl font-bold text-sm">
              {openings.length} Positions Available
            </div>
          </div>

          <div className="space-y-6">
            {openings.map((job) => (
              <div
                key={job.id}
                className="group border border-slate-200 rounded-3xl p-6 sm:p-8 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 bg-white flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden"
              >
                {/* Hover gradient stripe */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl shrink-0 shadow-sm group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                    {job.emoji}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">{job.type}</span>
                      <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider">{job.location}</span>
                    </div>
                    <p className="text-slate-500 leading-relaxed font-medium max-w-2xl">{job.desc}</p>
                  </div>
                </div>

                <div className="shrink-0 self-start md:self-center w-full md:w-auto mt-4 md:mt-0">
                  {applied === job.id ? (
                    <div className="flex items-center justify-center gap-2 px-8 py-4 bg-green-50 text-green-600 border border-green-200 font-bold rounded-xl w-full">
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                       Application Received
                    </div>
                  ) : (
                    <button
                      onClick={() => setApplied(job.id)}
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 text-slate-900 font-bold rounded-xl hover:bg-amber-500 transition-colors duration-300 w-full shadow-sm hover:shadow-md"
                    >
                       Apply Now
                       <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-12 md:px-24 lg:px-40 bg-zinc-900 text-white text-center rounded-[3rem] mx-4 sm:mx-8 mb-8 my-8 relative overflow-hidden">
         {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Create Your Own Role</h2>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
             We don't always know what we're missing. If you're phenomenally talented and think you belong here, prove it.
          </p>
          <button className="px-10 py-5 bg-amber-400 text-slate-900 font-black rounded-full hover:bg-amber-300 transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-105">
             Pitch Us Your Role
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
