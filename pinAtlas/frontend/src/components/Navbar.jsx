import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MapPin, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/explore', label: 'Explore' },
    { path: '/about', label: 'About' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/dashboard" className="flex items-center gap-2 group" onClick={closeMenu}>
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:bg-primaryDark transition-colors">
              <MapPin size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-text tracking-tight">
              pin<span className="text-primary">Atlas</span>
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
                          className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
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
              className="p-2 rounded-full hover:bg-surface text-textMuted hover:text-primary transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surface text-textMuted"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-textMuted hover:text-text hover:bg-surface"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive ? 'bg-primary/10 text-primary' : 'text-textMuted hover:bg-background hover:text-text'
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
