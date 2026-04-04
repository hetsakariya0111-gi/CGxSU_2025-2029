import React from 'react';
import { SkeletonCard, SkeletonTable } from './ui/Skeleton';

const SkeletonLoader = ({ type }) => {
  if (type === 'card') return <SkeletonCard />;
  if (type === 'table') return <SkeletonTable rows={6} />;
  return <SkeletonCard />;
};

export default SkeletonLoader;
