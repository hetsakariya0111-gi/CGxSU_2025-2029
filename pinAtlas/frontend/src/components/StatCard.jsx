import React, { useEffect, useState } from 'react';
import SkeletonLoader from './SkeletonLoader';

const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = Number(end) || 0;
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - 2 ** (-10 * progress);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};

const StatCard = ({ title, value, icon: Icon, loading, disabled }) => {
  const n = typeof value === 'number' ? value : Number(value);
  const safe = Number.isFinite(n) ? n : 0;
  const count = useCountUp(loading || disabled ? 0 : safe);

  if (loading) {
    return <SkeletonLoader type="card" />;
  }

  if (disabled) {
    return (
      <div className="glass-card p-6 relative overflow-hidden opacity-60">
        <div className="flex items-center justify-between relative z-10">
          <div>
            <p className="text-sm text-textMuted font-medium mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-textMuted">—</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-border flex items-center justify-center text-textMuted">
            <Icon size={24} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/5 opacity-60" />
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-sm text-textMuted font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-text">{count.toLocaleString('en-IN')}</h3>
        </div>
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
