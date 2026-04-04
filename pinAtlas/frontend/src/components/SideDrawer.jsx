import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Building } from 'lucide-react';

const Row = ({ label, value }) => (
  <div className="glass-card p-4">
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
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-background border-l border-border shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text flex items-center gap-2">
                  <MapPin className="text-primary" />
                  {data.pincode}
                </h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 hover:bg-surface rounded-full transition-colors text-textMuted hover:text-text"
                  aria-label="Close"
                >
                  <X />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    data.deliveryStatus === 'Delivery'
                      ? 'bg-success/20 text-success border border-success/30'
                      : 'bg-danger/20 text-danger border border-danger/30'
                  }`}
                >
                  {data.deliveryStatus || 'Unknown'}
                </span>
              </div>

              <div className="glass-card p-5 mb-4">
                <div className="flex items-start gap-3">
                  <Building className="text-primary mt-0.5 shrink-0" size={20} />
                  <div>
                    <p className="text-xs text-textMuted font-medium mb-1">Office Name</p>
                    <p className="text-lg font-semibold text-text">{data.officeName}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Row label="Office Type" value={data.officeType} />
                <Row label="Delivery Status" value={data.deliveryStatus} />
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
