import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

const infoItems = [
  { icon: <FiMapPin />, label: 'Location', value: 'India' },
  { icon: <FiMail />, label: 'Email', value: 'you@email.com' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16 text-center"
        >
          <p className="text-primary-400 font-mono text-sm tracking-widest mb-2">// WHO I AM</p>
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle">A little about myself and what drives me</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: profile card */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col items-center"
          >
            <div className="relative mb-6">
              <div className="w-52 h-52 rounded-2xl bg-gradient-to-br from-primary-600 to-pink-500 p-1 glow-sm">
                <div className="w-full h-full rounded-2xl glass flex items-center justify-center text-7xl">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 glass-card px-3 py-1.5 rounded-xl text-xs font-semibold text-green-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to work
              </div>
            </div>

            {/* Info chips */}
            <div className="glass-card rounded-2xl p-6 w-full max-w-sm space-y-4">
              {infoItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="p-2 rounded-lg bg-primary-600/20 text-primary-400">{item.icon}</span>
                  <div>
                    <span className="block text-dark-400 text-xs">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                </div>
              ))}

              {/* Social row */}
              <div className="flex gap-3 pt-2 border-t border-white/5">
                {[
                  { icon: <FiGithub />, href: 'https://github.com/', label: 'GitHub' },
                  { icon: <FiLinkedin />, href: 'https://linkedin.com/', label: 'LinkedIn' },
                  { icon: <FiMail />, href: 'mailto:you@email.com', label: 'Email' },
                ].map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="flex-1 flex items-center justify-center py-2 rounded-xl bg-white/5 hover:bg-primary-600/20 text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: bio */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Building the web, one pixel at a time ✨
            </h3>
            <p className="text-dark-300 leading-relaxed mb-4">
              I'm a passionate full-stack developer with a love for crafting beautiful, 
              functional web experiences. I specialize in React, Node.js, and modern CSS — 
              turning complex problems into elegant solutions.
            </p>
            <p className="text-dark-300 leading-relaxed mb-6">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source, or sketching out my next side project. I believe great software is 
              a blend of clean code, thoughtful design, and relentless iteration.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '10+', label: 'Projects Done' },
                { value: '2+', label: 'Years Experience' },
                { value: '5+', label: 'Happy Clients' },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-2xl p-4 text-center">
                  <div className="text-2xl font-extrabold gradient-text">{stat.value}</div>
                  <div className="text-dark-400 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <a href="/resume.pdf" download className="btn-primary inline-flex">
              Download Résumé ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
