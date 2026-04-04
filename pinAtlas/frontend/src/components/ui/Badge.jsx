import React from 'react';

export function DeliveryBadge({ status, large = false }) {
  const isDelivery = status === 'Delivery';
  const size = large ? 'px-5 py-2 text-sm tracking-widest' : 'px-2.5 py-0.5 text-xs tracking-wide';
  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold uppercase ${size} ${
        isDelivery
          ? 'bg-success/15 text-success ring-1 ring-success/30'
          : 'bg-danger/15 text-danger ring-1 ring-danger/30'
      }`}
    >
      {status || 'Unknown'}
    </span>
  );
}
