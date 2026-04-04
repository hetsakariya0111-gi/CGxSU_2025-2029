import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPincodeDetail } from '../api';
import PageTransition from '../components/PageTransition';
import SkeletonLoader from '../components/SkeletonLoader';
import { DeliveryBadge } from '../components/ui/Badge';
import {
  Search,
  MapPin,
  Building,
  Map,
  Compass,
  Globe,
  Shield,
  ArrowRight,
  Layers,
  Target,
} from 'lucide-react';
import { motion } from 'framer-motion';

const InfoCard = React.memo(function InfoCardInner({ icon: Icon, label, value }) {
  return (
    <div className="glass-card p-6 flex items-start gap-4 border border-border/50 hover:-translate-y-0.5 transition-transform duration-200 ease-out will-change-transform">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="text-primary" size={20} aria-hidden />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-textMuted uppercase font-bold tracking-wider mb-1">{label}</p>
        <p className="text-base font-medium text-text break-words">{value || '—'}</p>
      </div>
    </div>
  );
});

const PincodeDetail = () => {
  const { pincode: pinParam } = useParams();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(pinParam || '');

  const validPin = Boolean(pinParam && /^\d{6}$/.test(pinParam));

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['pincode-detail', pinParam],
    queryFn: ({ signal }) => getPincodeDetail(pinParam, { signal }),
    enabled: validPin,
    retry: false,
  });

  useEffect(() => {
    setSearchInput(pinParam || '');
  }, [pinParam]);

  const notFound = isError && error?.response?.status === 404;
  const loadError = isError && !notFound;
  const record = data?.data ?? null;

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      const next = searchInput.trim();
      if (/^\d{6}$/.test(next)) {
        navigate(`/pincode/${next}`);
      }
    },
    [navigate, searchInput]
  );

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col items-center">
        <div className="w-full max-w-2xl mb-12 sm:mb-16">
          <form onSubmit={handleSearch} className="relative flex items-center group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-textMuted group-focus-within:text-primary transition-colors duration-200" />
            </div>
            <input
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter 6-digit PIN code…"
              className="block w-full pl-12 pr-16 py-4 bg-surface border-2 border-border text-text rounded-2xl text-lg outline-none transition-[box-shadow,border-color] duration-200 focus:ring-2 focus:ring-primary/35 focus:border-primary"
              inputMode="numeric"
              maxLength={6}
              aria-label="Search another pincode"
            />
            <button
              type="submit"
              className="absolute right-2 p-2.5 bg-primary hover:opacity-95 text-white rounded-xl transition-opacity duration-200 disabled:opacity-40"
              disabled={!/^\d{6}$/.test(searchInput.trim())}
              aria-label="Submit search"
            >
              <ArrowRight size={20} aria-hidden />
            </button>
          </form>
          {!validPin && pinParam ? (
            <p className="text-sm text-danger mt-3 text-center" role="alert">
              Enter a valid 6-digit PIN code.
            </p>
          ) : null}
        </div>

        {validPin && isPending && (
          <div className="w-full space-y-8">
            <div className="flex flex-col items-center gap-4">
              <SkeletonLoader type="card" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {[...Array(8)].map((_, i) => (
                <SkeletonLoader key={i} type="card" />
              ))}
            </div>
          </div>
        )}

        {validPin && loadError && (
          <div className="glass-card p-10 text-center max-w-xl border border-danger/25">
            <p className="text-text font-medium">Something went wrong while loading this pincode.</p>
            <p className="text-textMuted text-sm mt-2">Please try again shortly.</p>
            <button
              type="button"
              onClick={() => refetch()}
              className="mt-6 text-sm font-semibold text-primary hover:underline"
            >
              Retry
            </button>
          </div>
        )}

        {validPin && notFound && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col items-center text-center p-10 sm:p-14 glass-card w-full max-w-lg border border-border"
            role="status"
          >
            <div className="pin-404-art mb-8" aria-hidden />
            <h2 className="text-2xl font-bold text-text mb-2 tracking-tight">No results for {pinParam}</h2>
            <p className="text-textMuted max-w-sm leading-relaxed">
              This PIN is not in the database. Try another 6-digit code or explore the data explorer.
            </p>
          </motion.div>
        )}

        {validPin && record && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="w-full flex flex-col items-center"
          >
            <div className="text-center mb-12 relative w-full px-2">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/15 blur-[100px] -z-10 pointer-events-none"
                aria-hidden
              />

              <h2 className="text-7xl sm:text-8xl md:text-9xl font-black text-gradient-pin tracking-tighter mb-8 tabular-nums leading-none">
                {record.pincode}
              </h2>

              <nav
                className="text-sm md:text-base text-textMuted font-medium flex flex-wrap justify-center items-center gap-x-2 gap-y-1 mb-8"
                aria-label="Breadcrumb"
              >
                <span>{record.state}</span>
                <span className="text-border" aria-hidden>
                  →
                </span>
                <span>{record.district}</span>
                {record.taluk ? (
                  <>
                    <span className="text-border" aria-hidden>
                      →
                    </span>
                    <span>{record.taluk}</span>
                  </>
                ) : null}
                <span className="text-border" aria-hidden>
                  →
                </span>
                <span className="text-text">{record.pincode}</span>
              </nav>

              <div className="flex justify-center">
                <DeliveryBadge status={record.deliveryStatus} large />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <InfoCard icon={Building} label="Office Name" value={record.officeName} />
              <InfoCard icon={Target} label="Office Type" value={record.officeType} />
              <InfoCard icon={Map} label="Taluk" value={record.taluk} />
              <InfoCard icon={Compass} label="District" value={record.district} />
              <InfoCard icon={Globe} label="State" value={record.state} />
              <InfoCard icon={Layers} label="Division" value={record.divisionName} />
              <InfoCard icon={MapPin} label="Region" value={record.regionName} />
              <InfoCard icon={Shield} label="Circle" value={record.circle} />
            </div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
};

export default PincodeDetail;
