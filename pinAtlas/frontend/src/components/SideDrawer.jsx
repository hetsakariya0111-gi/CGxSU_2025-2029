import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Building } from 'lucide-react';
import { DeliveryBadge } from './ui/Badge';

const Row = ({ label, value }) => (
  <div className="glass-card p-4 border border-border/60">
    <p className="text-xs text-textMuted uppercase font-bold tracking-wider mb-1">{label}</p>
    <p className="text-sm font-medium text-text break-words">{value || '—'}</p>
  </div>
);

const SideDrawer = ({ isOpen, onClose, data }) => {
  return (
    <AnimatePresence>
      {isOpen && data && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm z-50"
            aria-hidden
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-background border-l border-border shadow-2xl z-50 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-pin-title"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-textMuted mb-2">PIN code</p>
                  <h2
                    id="drawer-pin-title"
                    className="text-4xl sm:text-5xl font-black text-text tracking-tighter tabular-nums flex items-center gap-2"
                  >
                    <MapPin className="text-primary h-9 w-9 shrink-0" aria-hidden />
                    {data.pincode}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2.5 hover:bg-surface rounded-xl transition-colors text-textMuted hover:text-text border border-transparent hover:border-border"
                  aria-label="Close drawer"
                >
                  <X size={22} aria-hidden />
                </button>
              </div>

              <div className="mb-8">
                <p className="text-xs text-textMuted uppercase font-bold tracking-wider mb-3">Status</p>
                <DeliveryBadge status={data.deliveryStatus} large />
              </div>

              <div className="glass-card p-5 mb-6 border border-border/60">
                <div className="flex items-start gap-3">
                  <Building className="text-primary mt-0.5 shrink-0" size={22} aria-hidden />
                  <div>
                    <p className="text-xs text-textMuted font-semibold mb-1">Office Name</p>
                    <p className="text-lg font-semibold text-text leading-snug">{data.officeName}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Row label="Office Type" value={data.officeType} />
                <Row label="Delivery" value={data.deliveryStatus} />
                <Row label="Taluk" value={data.taluk} />
                <Row label="District" value={data.district} />
                <Row label="State" value={data.state} />
                <Row label="Division" value={data.divisionName} />
                <Row label="Region" value={data.regionName} />
                <Row label="Circle" value={data.circle} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideDrawer;
