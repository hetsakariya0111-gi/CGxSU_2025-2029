import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce app with cart, auth, payments, and an admin dashboard. Built for performance and scale.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    emoji: '🛒',
    color: 'from-violet-600 to-purple-700',
    github: 'https://github.com/',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Chat Assistant',
    description: 'Real-time AI chatbot using OpenAI GPT-4 API. Supports conversation memory, markdown rendering, and code highlighting.',
    tags: ['React', 'OpenAI', 'TailwindCSS', 'Socket.io'],
    emoji: '🤖',
    color: 'from-pink-600 to-rose-700',
    github: 'https://github.com/',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Manager App',
    description: 'Drag-and-drop Kanban board, project tracking, team assignments, and deadline notifications.',
    tags: ['React', 'Firebase', 'Framer Motion'],
    emoji: '📋',
    color: 'from-blue-600 to-cyan-700',
    github: 'https://github.com/',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This very portfolio! A React + Tailwind CSS single-page app with smooth animations, dark theme, and glassmorphism UI.',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
    emoji: '💼',
    color: 'from-emerald-600 to-teal-700',
    github: 'https://github.com/',
    live: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with location search, 7-day forecast, animated weather icons, and historical charts.',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    emoji: '🌤️',
    color: 'from-orange-600 to-amber-700',
    github: 'https://github.com/',
    live: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Social Media Clone',
    description: 'Twitter-like app with posts, likes, follows, real-time notifications, and infinite scroll feed. Full MERN stack.',
    tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
    emoji: '📱',
    color: 'from-indigo-600 to-violet-700',
    github: 'https://github.com/',
    live: '#',
    featured: false,
  },
]

const filters = ['All', 'React', 'Node.js', 'MongoDB', 'OpenAI']

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl overflow-hidden group"
    >
      {/* Card header */}
      <div className={`h-36 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
        <span className="text-6xl select-none">{project.emoji}</span>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        {project.featured && (
          <span className="absolute top-3 right-3 badge text-xs">✨ Featured</span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-dark-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="badge text-xs">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 hover:bg-primary-600/20 text-dark-300 hover:text-primary-400 transition-all text-sm font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiGithub size={15} /> Code
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label="Live Demo"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl btn-primary text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiExternalLink size={15} /> Live
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter))

  return (
    <section id="projects" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-primary-400 font-mono text-sm tracking-widest mb-2">// WHAT I'VE BUILT</p>
          <h2 className="section-title gradient-text">My Projects</h2>
          <p className="section-subtitle">A selection of things I've built with passion</p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'glass text-dark-300 hover:text-white hover:border-primary-500/30'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* More on GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-dark-400 mb-4">More projects on my GitHub</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
