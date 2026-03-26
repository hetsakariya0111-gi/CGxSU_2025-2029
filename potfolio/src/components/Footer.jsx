import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'

const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <FiTwitter size={18} />, href: 'https://twitter.com/', label: 'Twitter' },
]

const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <a href="#hero" className="font-mono text-2xl font-bold gradient-text">
              &lt;Dev/&gt;
            </a>
            <p className="text-dark-500 text-sm mt-1">Building the web, one commit at a time.</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-dark-400 text-sm hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -3 }}
                className="p-2.5 rounded-xl glass text-dark-400 hover:text-primary-400 transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-dark-500 text-sm flex items-center justify-center gap-1.5">
            Made with <FiHeart className="text-pink-500" /> by{' '}
            <span className="text-primary-400 font-medium">Your Name</span>
            {' '}· © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
