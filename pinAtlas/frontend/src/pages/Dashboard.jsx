import React, { lazy, Suspense, useMemo, useCallback, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getStats, getStateDistribution, getDeliveryDistribution } from '../api';
import PageTransition from '../components/PageTransition';
import StatCard from '../components/StatCard';
import SkeletonLoader from '../components/SkeletonLoader';
import { MapPin, Map, Building, ArchiveX, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

const DashboardCharts = lazy(() => import('../components/dashboard/DashboardCharts'));

const rankBadge = (index) => {
  if (index === 0) return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
  if (index === 1) return 'bg-slate-300/20 text-slate-200 border-slate-400/35';
  if (index === 2) return 'bg-orange-500/20 text-orange-400 border-orange-500/35';
  return 'bg-surface text-textMuted border-border';
};

const Dashboard = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['dashboard'],
    queryFn: async ({ signal }) => {
      const [statsData, distData, delivData] = await Promise.all([
        getStats({ signal }),
        getStateDistribution({ signal }),
        getDeliveryDistribution({ signal }),
      ]);
      return {
        stats: statsData.data,
        stateDist: distData.data || [],
        deliveryDist: delivData.data,
      };
    },
    staleTime: 60_000,
  });

  const apiError = isError ? error?.message || 'Network error' : null;
  const stats = data?.stats ?? null;
  const stateDist = useMemo(() => data?.stateDist ?? [], [data]);
  const deliveryDist = data?.deliveryDist ?? null;
  const loading = isPending;

  const pieData = useMemo(
    () =>
      deliveryDist
        ? [
            { name: 'Delivery', value: deliveryDist.delivery },
            { name: 'Non-Delivery', value: deliveryDist.nonDelivery },
          ]
        : [],
    [deliveryDist]
  );

  const topStates = useMemo(
    () => [...stateDist].sort((a, b) => b.count - a.count).slice(0, 10),
    [stateDist]
  );

  const top5States = useMemo(
    () => [...stateDist].sort((a, b) => b.count - a.count).slice(0, 5),
    [stateDist]
  );

  const deliveryTotal = (deliveryDist?.delivery || 0) + (deliveryDist?.nonDelivery || 0);

  const onRetry = useCallback(() => {
    refetch();
  }, [refetch]);

  const dashHadErrorRef = useRef(false);
  useEffect(() => {
    if (isError && !dashHadErrorRef.current) {
      toast.error('Could not load dashboard statistics.');
    }
    dashHadErrorRef.current = isError;
  }, [isError]);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <section className="relative overflow-hidden rounded-2xl border border-border hero-gradient-anim text-white shadow-2xl shadow-primary/10">
          <div className="hero-particles" aria-hidden />
          <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70 mb-3">
              PinAtlas Pro
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
              India&apos;s Postal Intelligence Platform
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
              Explore 150,000+ PIN codes across 28 states — search, filter, export, and visualize
              delivery geography in one place.
            </p>
          </div>
        </section>

        {apiError && (
          <div className="glass-card p-6 border-l-4 border-danger/80 bg-danger/5 rounded-xl space-y-3">
            <p className="font-semibold text-text">Data load failed — stats stay empty until this is resolved.</p>
            <p className="text-sm text-textMuted">{apiError}</p>
            <ol className="list-decimal pl-5 text-sm text-textMuted space-y-2">
              <li>
                Start API: <code className="text-text bg-surface px-1.5 py-0.5 rounded">cd backend</code> then{' '}
                <code className="text-text bg-surface px-1.5 py-0.5 rounded">npm run dev</code> (port{' '}
                <strong>5000</strong>)
              </li>
              <li>
                Set a valid <code className="text-text bg-surface px-1.5 py-0.5 rounded">MONGO_URI</code> in{' '}
                <code className="text-text bg-surface px-1.5 py-0.5 rounded">backend/.env</code>
              </li>
              <li>
                Seed data: <code className="text-text bg-surface px-1.5 py-0.5 rounded">npm run seed</code> with{' '}
                <code className="text-text bg-surface px-1.5 py-0.5 rounded">pincodes.csv</code> at project root
              </li>
              <li>
                Dev UI proxies <code className="text-text bg-surface px-1.5 py-0.5 rounded">/api</code> → backend;
                restart <code className="text-text bg-surface px-1.5 py-0.5 rounded">npm run dev</code> after env
                changes.
              </li>
            </ol>
            <Button type="button" variant="secondary" className="text-sm" onClick={onRetry}>
              Retry
            </Button>
          </div>
        )}

        {!apiError && !loading && stats && stats.totalPincodes === 0 && (
          <div className="glass-card p-4 border border-primary/30 bg-primary/5 text-sm text-textMuted">
            No pincodes in the database yet. Run{' '}
            <code className="text-text bg-surface px-1 rounded">npm run seed</code> from the backend folder.
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Pincodes"
            value={stats?.totalPincodes}
            icon={MapPin}
            loading={loading}
            disabled={!!apiError}
            accent="indigo"
          />
          <StatCard
            title="Total States"
            value={stats?.totalStates}
            icon={Map}
            loading={loading}
            disabled={!!apiError}
            accent="emerald"
          />
          <StatCard
            title="Delivery Offices"
            value={stats?.deliveryOffices}
            icon={Building}
            loading={loading}
            disabled={!!apiError}
            accent="blue"
          />
          <StatCard
            title="Non-Delivery Offices"
            value={stats?.nonDeliveryOffices}
            icon={ArchiveX}
            loading={loading}
            disabled={!!apiError}
            accent="rose"
          />
        </div>

        {!apiError && (
          <Suspense
            fallback={
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <SkeletonLoader type="card" />
                </div>
                <SkeletonLoader type="card" />
              </div>
            }
          >
            <DashboardCharts
              topStates={topStates}
              pieData={pieData}
              deliveryTotal={deliveryTotal}
              loading={loading}
            />
          </Suspense>
        )}

        {!apiError && (
          <div className="glass-card p-6 sm:p-8">
            <h2 className="text-lg font-bold text-text flex items-center gap-2 mb-8 tracking-tight">
              <Trophy className="text-primary h-5 w-5 shrink-0" aria-hidden />
              Top 5 States
            </h2>
            {loading ? (
              <SkeletonLoader type="table" />
            ) : top5States.length === 0 ? (
              <p className="text-textMuted text-center py-10">No distribution data yet.</p>
            ) : (
              <div className="space-y-5">
                {top5States.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    key={item.state}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm border shrink-0 ${rankBadge(index)}`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-3 mb-1.5">
                        <span className="font-medium text-text truncate">{item.state}</span>
                        <span className="text-sm text-textMuted font-bold tabular-nums shrink-0">
                          {item.count.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2 overflow-hidden border border-border/60">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: `${top5States[0]?.count ? (item.count / top5States[0].count) * 100 : 0}%`,
                          }}
                          transition={{ duration: 0.9, delay: 0.15 + index * 0.08, ease: [0.4, 0, 0.2, 1] }}
                          className="bg-primary h-full rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Dashboard;
