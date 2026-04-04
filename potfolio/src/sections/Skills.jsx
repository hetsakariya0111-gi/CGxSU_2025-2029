import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    emoji: '💬',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 75 },
      { name: 'TypeScript', level: 70 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    category: 'Frameworks',
    emoji: '⚙️',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    category: 'Tools & Platforms',
    emoji: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'MongoDB', level: 72 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 65 },
    ],
  },
]

const techBadges = [
  'React', 'Vite', 'Next.js', 'TailwindCSS', 'Node.js', 'Express',
  'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'TypeScript', 'Python',
  'REST API', 'Figma', 'Vercel',
]

function SkillBar({ name, level, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-dark-200">{name}</span>
        <span className="text-sm text-primary-400 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-dark-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #6d4ef7, #ec4899)' }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary-400 font-mono text-sm tracking-widest mb-2">// WHAT I KNOW</p>
          <h2 className="section-title gradient-text">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with every day</p>
        </motion.div>

        {/* Skill bar groups */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">{group.emoji}</span>
                <h3 className="font-bold text-white text-lg">{group.category}</h3>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={gi * 0.15 + si * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-dark-400 mb-6 text-sm uppercase tracking-widest">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                className="badge cursor-default"
                whileHover={{ scale: 1.1, y: -3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.04 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
