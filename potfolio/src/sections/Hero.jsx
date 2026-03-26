import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { TypeAnimation } from 'react-type-animation'

const socials = [
  { icon: <FiGithub size={20} />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <FiTwitter size={20} />, href: 'https://twitter.com/', label: 'Twitter' },
]

const floatVariants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(109,78,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(109,78,247,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="badge mb-4 inline-block">👋 Welcome to my portfolio</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">Your Name</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-dark-300 mb-6 min-h-[2.5rem]">
            I build{' '}
            <span className="text-primary-400 font-bold">
              <TypeAnimation
                sequence={[
                  'Web Apps', 2000,
                  'UI/UX Designs', 2000,
                  'APIs & Backends', 2000,
                  'Cool Projects', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          <p className="text-dark-400 text-lg leading-relaxed mb-8 max-w-lg">
            A passionate full-stack developer crafting elegant digital experiences.
            I turn ideas into beautiful, performant web applications.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn-primary">
              View My Work
              <FiArrowDown className="animate-bounce" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <span className="text-dark-500 text-sm">Find me on</span>
            <div className="flex gap-3">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-xl glass text-dark-300 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Visual side — floating avatar ring */}
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative w-80 h-80">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full border-4 border-primary-500/20 animate-pulse-slow" />
            <div className="absolute -inset-4 rounded-full border border-primary-500/10 animate-spin" style={{ animationDuration: '20s' }} />

            {/* Avatar */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-700 via-primary-500 to-pink-500 p-1 glow">
              <div className="w-full h-full rounded-full glass-card flex items-center justify-center overflow-hidden">
                <span className="text-8xl select-none">👨‍💻</span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
              className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-xl text-sm font-semibold text-primary-300 flex items-center gap-2"
            >
              ⚡ React
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card px-3 py-2 rounded-xl text-sm font-semibold text-pink-300 flex items-center gap-2"
            >
              🎨 Tailwind
            </motion.div>
            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -left-16 -translate-y-1/2 glass-card px-3 py-2 rounded-xl text-sm font-semibold text-green-300 flex items-center gap-2"
            >
              🟢 Node.js
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-dark-600 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-primary-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
