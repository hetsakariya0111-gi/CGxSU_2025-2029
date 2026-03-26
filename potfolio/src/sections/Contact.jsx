import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    title: 'Email',
    value: 'you@email.com',
    href: 'mailto:you@email.com',
  },
  {
    icon: <FiMapPin size={20} />,
    title: 'Location',
    value: 'India 🇮🇳',
    href: null,
  },
  {
    icon: <FiGithub size={20} />,
    title: 'GitHub',
    value: 'github.com/yourusername',
    href: 'https://github.com/',
  },
  {
    icon: <FiLinkedin size={20} />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    href: 'https://linkedin.com/',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    window.location.href = `mailto:you@email.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Hi, I'm ${name} (${email}).\n\n${message}`)}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary-400 font-mono text-sm tracking-widest mb-2">// GET IN TOUCH</p>
          <h2 className="section-title gradient-text">Contact Me</h2>
          <p className="section-subtitle">Have a project in mind? Let's talk!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-dark-300 leading-relaxed mb-6">
              I'm always open to new opportunities, collaborations, or just a friendly chat.
              Whether you have a project idea, a job offer, or just want to say hi — feel free!
            </p>
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-2xl p-4 flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-primary-600/20 text-primary-400 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-dark-400 text-xs mb-0.5">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white text-sm font-medium hover:text-primary-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-dark-400 mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-dark-900/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-dark-400 mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@email.com"
                  className="w-full bg-dark-900/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/60 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-dark-400 mb-1.5 block">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Collaboration"
                className="w-full bg-dark-900/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/60 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-dark-400 mb-1.5 block">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-dark-900/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/60 transition-colors resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full btn-primary justify-center ${sent ? 'opacity-80' : ''}`}
            >
              {sent ? '✅ Message Opened!' : <><FiSend /> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
