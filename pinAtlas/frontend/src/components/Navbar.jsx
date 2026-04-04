import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function PinLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 4C12.5 4 10 6.8 10 10.2c0 2.8 1.4 4.5 3.2 6.1l2.8 2.6 2.8-2.6c1.8-1.6 3.2-3.3 3.2-6.1C22 6.8 19.5 4 16 4Z"
        fill="currentColor"
        className="text-white"
      />
      <circle cx="16" cy="10" r="2.2" fill="var(--color-background)" />
      <path
        d="M13 18.5v8c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-8l-3 2.8-3-2.8Z"
        fill="currentColor"
        className="text-white/90"
      />
    </svg>
  );
}

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/explore', label: 'Explore' },
    { path: '/about', label: 'About' },
  ];

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-border transition-[backdrop-filter,background-color] duration-200 ${
        scrolled ? 'bg-background/75 backdrop-blur-xl' : 'bg-background/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/dashboard"
            className="flex items-center gap-2.5 group"
            onClick={closeMenu}
            aria-label="PinAtlas Pro home"
          >
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-[1.02] transition-transform duration-200 ease-out">
              <PinLogo className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-text">pin</span>
              <span className="text-primary">Atlas</span>
              <span className="text-textMuted font-semibold text-sm ml-1.5 align-top">Pro</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary relative py-2 ${
                      isActive ? 'text-primary' : 'text-textMuted'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-underline"
                          className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary rounded-full"
                          transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="relative p-2.5 rounded-full bg-surface border border-border text-textMuted hover:text-primary hover:border-primary/30 transition-colors duration-200"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.85 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.85 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="flex"
                >
                  {theme === 'dark' ? <Sun size={20} aria-hidden /> : <Moon size={20} aria-hidden />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-surface border border-border text-textMuted"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} aria-hidden /> : <Moon size={20} aria-hidden />}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="p-2 rounded-lg text-textMuted hover:text-text hover:bg-surface border border-transparent hover:border-border"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden border-t border-border overflow-hidden bg-surface/95 backdrop-blur-lg"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive ? 'bg-primary/15 text-primary' : 'text-textMuted hover:bg-background'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
