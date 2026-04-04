import React from 'react';

const SkeletonLoader = ({ type }) => {
  if (type === 'card') {
    return (
      <div className="glass-card p-6 flex items-center justify-between animate-pulse">
        <div>
          <div className="h-4 bg-border rounded w-24 mb-4"></div>
          <div className="h-8 bg-border rounded w-16"></div>
        </div>
        <div className="w-12 h-12 bg-border rounded-full"></div>
      </div>
    );
  }

  if (type === 'table') {
    return (
      <div className="animate-pulse space-y-4 w-full">
        <div className="h-10 bg-border rounded w-full mb-4"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between space-x-4">
            <div className="h-12 bg-border rounded w-1/6"></div>
            <div className="h-12 bg-border rounded w-1/4"></div>
            <div className="h-12 bg-border rounded w-1/6"></div>
            <div className="h-12 bg-border rounded w-1/6"></div>
            <div className="h-12 bg-border rounded w-1/6"></div>
            <div className="h-12 bg-border rounded w-1/6"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="animate-pulse h-10 bg-border rounded w-full"></div>
  );
};

export default SkeletonLoader;
