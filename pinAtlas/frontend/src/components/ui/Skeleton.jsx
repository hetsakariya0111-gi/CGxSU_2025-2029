import React from 'react';

export function Skeleton({ className = '' }) {
  return <div className={`animate-pulse rounded-md bg-border/80 ${className}`} aria-hidden />;
}

export function SkeletonCard() {
  return (
    <div className="glass-card p-6 flex items-center justify-between">
      <div className="space-y-3 flex-1">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-9 w-20" />
      </div>
      <Skeleton className="h-12 w-12 rounded-full shrink-0" />
    </div>
  );
}

export function SkeletonTable({ rows = 6 }) {
  return (
    <div className="space-y-3 w-full" aria-hidden>
      <Skeleton className="h-10 w-full rounded-lg" />
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-3">
          <Skeleton className="h-11 flex-1 rounded-lg" />
          <Skeleton className="h-11 flex-1 rounded-lg" />
          <Skeleton className="h-11 flex-1 rounded-lg" />
          <Skeleton className="h-11 w-24 rounded-lg" />
        </div>
      ))}
    </div>
  );
}
