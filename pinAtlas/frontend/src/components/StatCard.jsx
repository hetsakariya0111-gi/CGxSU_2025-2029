import React, { useEffect, useState } from 'react';
import SkeletonLoader from './SkeletonLoader';

const ACCENTS = {
  indigo: {
    wash: 'from-primary/20 via-transparent to-transparent',
    icon: 'bg-primary/20 text-primary shadow-[0_0_24px_rgba(99,102,241,0.35)]',
    hover: 'hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)]',
  },
  emerald: {
    wash: 'from-accentEmerald/20 via-transparent to-transparent',
    icon: 'bg-accentEmerald/20 text-accentEmerald shadow-[0_0_24px_rgba(16,185,129,0.3)]',
    hover: 'hover:shadow-[0_12px_40px_rgba(16,185,129,0.12)]',
  },
  blue: {
    wash: 'from-accentBlue/20 via-transparent to-transparent',
    icon: 'bg-accentBlue/20 text-accentBlue shadow-[0_0_24px_rgba(59,130,246,0.3)]',
    hover: 'hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)]',
  },
  rose: {
    wash: 'from-accentRose/20 via-transparent to-transparent',
    icon: 'bg-accentRose/20 text-accentRose shadow-[0_0_24px_rgba(244,63,94,0.28)]',
    hover: 'hover:shadow-[0_12px_40px_rgba(244,63,94,0.12)]',
  },
};

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let cancelled = false;
    const target = Number(end) || 0;
    let startTime = null;

    const animate = (currentTime) => {
      if (cancelled) return;
      if (!startTime) startTime = currentTime;
      const t = Math.min((currentTime - startTime) / duration, 1);
      const ease = t === 1 ? 1 : 1 - 2 ** (-10 * t);
      setCount(Math.floor(ease * target));
      if (t < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [end, duration]);

  return count;
};

const StatCard = ({ title, value, icon: Icon, loading, disabled, accent = 'indigo' }) => {
  const a = ACCENTS[accent] || ACCENTS.indigo;
  const n = typeof value === 'number' ? value : Number(value);
  const safe = Number.isFinite(n) ? n : 0;
  const count = useCountUp(loading || disabled ? 0 : safe);

  if (loading) {
    return <SkeletonLoader type="card" />;
  }

  if (disabled) {
    return (
      <div className="glass-card p-6 relative overflow-hidden opacity-55">
        <div className="flex items-center justify-between relative z-10">
          <div>
            <p className="text-sm text-textMuted font-medium mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-textMuted">—</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-border flex items-center justify-center text-textMuted">
            <Icon size={24} aria-hidden />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`glass-card p-6 relative overflow-hidden group transition-transform duration-200 ease-out will-change-transform hover:-translate-y-1 ${a.hover}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.wash} opacity-90`}
        aria-hidden
      />
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-sm text-textMuted font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-text tabular-nums tracking-tight">
            {count.toLocaleString('en-IN')}
          </h3>
        </div>
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${a.icon}`}
        >
          <Icon size={24} aria-hidden />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
