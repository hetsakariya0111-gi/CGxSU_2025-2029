import React from 'react';

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-transform duration-200 ease-out will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none';

const variants = {
  primary:
    'btn-glow bg-primary text-white px-5 py-2.5 hover:scale-[1.02] active:scale-[0.99] shadow-lg shadow-primary/25',
  secondary:
    'bg-surface border border-border text-text px-5 py-2.5 hover:scale-[1.02] hover:border-primary/40',
  ghost: 'text-textMuted hover:text-text px-3 py-2 rounded-lg hover:bg-surface',
  danger: 'bg-danger/90 text-white px-5 py-2.5 hover:scale-[1.02]',
};

export function Button({ children, variant = 'primary', className = '', type = 'button', ...props }) {
  return (
    <button type={type} className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
}
