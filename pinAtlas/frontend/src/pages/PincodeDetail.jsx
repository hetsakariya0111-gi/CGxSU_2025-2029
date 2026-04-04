import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPincodeDetail } from '../api';
import PageTransition from '../components/PageTransition';
import SkeletonLoader from '../components/SkeletonLoader';
import {
  Search,
  MapPin,
  Building,
  Map,
  Compass,
  Globe,
  Shield,
  ArrowRight,
  AlertCircle,
  Layers,
  Target,
} from 'lucide-react';
import { motion } from 'framer-motion';

const InfoCard = ({ icon: Icon, label, value }) => (
  <div className="glass-card p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
      <Icon className="text-primary" size={20} />
    </div>
    <div>
      <p className="text-xs text-textMuted uppercase font-bold tracking-wider mb-1">{label}</p>
      <p className="text-base font-medium text-text">{value || '—'}</p>
    </div>
  </div>
);

const PincodeDetail = () => {
  const { pincode } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (!pincode) return undefined;

    const fetchData = async () => {
      try {
        setLoading(true);
        setNotFound(false);
        setLoadError(false);
        const res = await getPincodeDetail(pincode);
        setData(res.data);
      } catch (err) {
        setData(null);
        if (err.response?.status === 404) {
          setNotFound(true);
        } else {
          setLoadError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    setSearchInput(pincode);
    return undefined;
  }, [pincode]);

  const handleSearch = (e) => {
    e.preventDefault();
    const next = searchInput.trim();
    if (next) {
      navigate(`/pincode/${next}`);
    }
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        <div className="w-full max-w-2xl text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-6">Pincode Lookup</h1>
          <form onSubmit={handleSearch} className="relative flex items-center group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-textMuted group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter any PIN code..."
              className="block w-full pl-12 pr-16 py-4 bg-surface border-2 border-border text-text rounded-2xl text-lg outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
              inputMode="numeric"
              maxLength={6}
            />
            <button
              type="submit"
              className="absolute right-2 p-2 bg-primary hover:bg-primaryDark text-white rounded-xl transition-colors disabled:opacity-50"
              disabled={!searchInput.trim()}
            >
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        {loading && (
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

        {!loading && loadError && (
          <div className="glass-card p-10 text-center max-w-xl">
            <p className="text-text font-medium">Something went wrong while loading this pincode.</p>
            <p className="text-textMuted text-sm mt-2">Please try again in a moment.</p>
          </div>
        )}

        {!loading && notFound && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center p-12 glass-card w-full max-w-2xl border-danger/30"
          >
            <div className="w-20 h-20 rounded-full bg-danger/10 flex items-center justify-center mb-6">
              <AlertCircle className="text-danger w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-text mb-2">No results found for {pincode}</h2>
            <p className="text-textMuted max-w-md">
              The pincode you entered does not exist in our database. Try another 6-digit PIN.
            </p>
          </motion.div>
        )}

        {!loading && data && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-col items-center"
          >
            <div className="text-center mb-10 relative w-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />

              <h2 className="text-7xl md:text-8xl font-black text-text tracking-tighter mb-6">
                {data.pincode}
              </h2>

              <nav
                className="text-sm md:text-base text-textMuted font-medium flex flex-wrap justify-center items-center gap-x-2 gap-y-1 mb-8"
                aria-label="Breadcrumb"
              >
                <span>{data.state}</span>
                <span className="text-border">{'>'}</span>
                <span>{data.district}</span>
                {data.taluk ? (
                  <>
                    <span className="text-border">{'>'}</span>
                    <span>{data.taluk}</span>
                  </>
                ) : null}
                <span className="text-border">{'>'}</span>
                <span className="text-text">{data.pincode}</span>
              </nav>

              <span
                className={`inline-flex px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest ${
                  data.deliveryStatus === 'Delivery'
                    ? 'bg-success/20 text-success border-2 border-success/30'
                    : 'bg-danger/20 text-danger border-2 border-danger/30'
                }`}
              >
                {data.deliveryStatus || 'Unknown'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <InfoCard icon={Building} label="Office Name" value={data.officeName} />
              <InfoCard icon={Target} label="Office Type" value={data.officeType} />
              <InfoCard icon={Map} label="Taluk" value={data.taluk} />
              <InfoCard icon={Compass} label="District" value={data.district} />
              <InfoCard icon={Globe} label="State" value={data.state} />
              <InfoCard icon={Layers} label="Division" value={data.divisionName} />
              <InfoCard icon={MapPin} label="Region" value={data.regionName} />
              <InfoCard icon={Shield} label="Circle" value={data.circle} />
            </div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
};

export default PincodeDetail;
