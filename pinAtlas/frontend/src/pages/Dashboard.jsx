import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getStats, getStateDistribution, getDeliveryDistribution } from '../api';
import PageTransition from '../components/PageTransition';
import StatCard from '../components/StatCard';
import SkeletonLoader from '../components/SkeletonLoader';
import { MapPin, Map, Building, ArchiveX, TrendingUp, BarChart3, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stateDist, setStateDist] = useState([]);
  const [deliveryDist, setDeliveryDist] = useState(null);
  const [apiError, setApiError] = useState(null);

  const fetchDashboardData = async () => {
    try {
      setApiError(null);
      setLoading(true);
      const [statsData, distData, delivData] = await Promise.all([
        getStats(),
        getStateDistribution(),
        getDeliveryDistribution(),
      ]);
      setStats(statsData.data);
      setStateDist(distData.data || []);
      setDeliveryDist(delivData.data);
    } catch (e) {
      const msg =
        e?.response?.data?.message ||
        e?.message ||
        'Could not reach the API. Is the backend running on port 5000?';
      setApiError(msg);
      setStats(null);
      setStateDist([]);
      setDeliveryDist(null);
      toast.error('Could not load dashboard statistics.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const COLORS = ['#3b82f6', '#ef4444'];
  const pieData = deliveryDist
    ? [
        { name: 'Delivery', value: deliveryDist.delivery },
        { name: 'Non-Delivery', value: deliveryDist.nonDelivery },
      ]
    : [];

  const topStates = [...stateDist].sort((a, b) => b.count - a.count).slice(0, 10);
  const deliveryTotal = (deliveryDist?.delivery || 0) + (deliveryDist?.nonDelivery || 0);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-text mb-1 flex items-center gap-2">
              <TrendingUp className="text-primary" /> Platform Overview
            </h1>
            <p className="text-textMuted text-sm">Real-time statistics covering India&apos;s postal network</p>
          </div>
        </div>

        {apiError && (
          <div className="glass-card p-6 border-l-4 border-danger/80 bg-danger/5 rounded-xl space-y-3">
            <p className="font-semibold text-text">Data load failed — you will see 0 everywhere until this is fixed.</p>
            <p className="text-sm text-textMuted">{apiError}</p>
            <ol className="list-decimal pl-5 text-sm text-textMuted space-y-2">
              <li>
                Backend ચાલુ કરો: <code className="text-text bg-surface px-1.5 py-0.5 rounded">cd backend</code> પછી{' '}
                <code className="text-text bg-surface px-1.5 py-0.5 rounded">npm run dev</code> (port{' '}
                <strong>5000</strong>)
              </li>
              <li>
                <code className="text-text bg-surface px-1.5 py-0.5 rounded">backend/.env</code> માં સાચું{' '}
                <strong>MONGO_URI</strong> મૂકો (MongoDB Atlas — placeholder કામ નહીં કરે)
              </li>
              <li>
                CSV seed: <code className="text-text bg-surface px-1.5 py-0.5 rounded">cd backend</code> પછી{' '}
                <code className="text-text bg-surface px-1.5 py-0.5 rounded">npm run seed</code> (
                <code className="text-text bg-surface px-1.5 py-0.5 rounded">pincodes.csv</code> project root પર હોવી
                જોઈએ)
              </li>
              <li>
                <code className="text-text bg-surface px-1.5 py-0.5 rounded">frontend/.env</code> →{' '}
                <code className="text-text bg-surface px-1.5 py-0.5 rounded">VITE_API_BASE_URL=http://localhost:5000</code>
              </li>
            </ol>
            <button
              type="button"
              onClick={() => fetchDashboardData()}
              className="text-sm font-medium text-primary hover:underline"
            >
              Retry
            </button>
          </div>
        )}

        {!apiError && !loading && stats && stats.totalPincodes === 0 && (
          <div className="glass-card p-4 border border-primary/30 bg-primary/5 text-sm text-textMuted">
            Database માં હજુ કોઈ pincode નથી. ઉપરના પગલાં પ્રમાણે{' '}
            <code className="text-text bg-surface px-1 rounded">npm run seed</code> ચલાવો.
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Pincodes"
            value={stats?.totalPincodes}
            icon={MapPin}
            loading={loading}
            disabled={!!apiError}
          />
          <StatCard
            title="Total States"
            value={stats?.totalStates}
            icon={Map}
            loading={loading}
            disabled={!!apiError}
          />
          <StatCard
            title="Delivery Offices"
            value={stats?.deliveryOffices}
            icon={Building}
            loading={loading}
            disabled={!!apiError}
          />
          <StatCard
            title="Non-Delivery Offices"
            value={stats?.nonDeliveryOffices}
            icon={ArchiveX}
            loading={loading}
            disabled={!!apiError}
          />
        </div>

        {!apiError && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-card p-6 flex flex-col">
            <h2 className="text-lg font-bold text-text flex items-center gap-2 mb-6">
              <BarChart3 className="text-primary h-5 w-5" /> Top 10 states by pincode count
            </h2>
            <div className="flex-1 h-[350px]">
              {loading ? (
                <div className="h-full flex items-center justify-center">
                  <SkeletonLoader type="card" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={topStates}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 8, bottom: 5 }}
                  >
                    <XAxis type="number" hide />
                    <YAxis
                      dataKey="state"
                      type="category"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'var(--textMuted)', fontSize: 12 }}
                      width={110}
                    />
                    <Tooltip
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{
                        backgroundColor: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        color: 'var(--text)',
                      }}
                      formatter={(value) => [Number(value).toLocaleString('en-IN'), 'Pincodes']}
                    />
                    <Bar
                      dataKey="count"
                      fill="#3b82f6"
                      radius={[0, 4, 4, 0]}
                      barSize={20}
                      animationDuration={1500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className="glass-card p-6 flex flex-col">
            <h2 className="text-lg font-bold text-text flex items-center gap-2 mb-6">
              <PieChart className="text-primary h-5 w-5" /> Delivery vs non-delivery
            </h2>
            <div className="flex-1 h-[350px] relative">
              {loading ? (
                <div className="h-full flex items-center justify-center">
                  <SkeletonLoader type="card" />
                </div>
              ) : (
                <>
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="45%"
                        innerRadius={60}
                        outerRadius={110}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                        animationDuration={1500}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'var(--surface)',
                          border: '1px solid var(--border)',
                          borderRadius: '8px',
                          color: 'var(--text)',
                        }}
                      />
                      <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="circle"
                        formatter={(value) => <span className="text-textMuted ml-1">{value}</span>}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>

                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-10">
                    <span className="text-3xl font-bold text-text">
                      {deliveryTotal ? deliveryTotal.toLocaleString('en-IN') : '0'}
                    </span>
                    <span className="text-xs text-textMuted uppercase tracking-wider">Total</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        )}

        {!apiError && (
        <div className="glass-card p-6">
          <h2 className="text-lg font-bold text-text mb-6">Top 5 States</h2>
          {loading ? (
            <SkeletonLoader type="table" />
          ) : stateDist.length === 0 ? (
            <p className="text-textMuted text-center py-8">No distribution data yet.</p>
          ) : (
            <div className="space-y-4">
              {stateDist.slice(0, 5).map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.35 }}
                  key={item.state}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center font-bold text-textMuted group-hover:text-primary transition-colors border border-border">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-text">{item.state}</span>
                      <span className="text-sm text-textMuted font-bold">
                        {item.count.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="w-full bg-surface rounded-full h-2 overflow-hidden border border-border/50">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${stateDist[0]?.count ? (item.count / stateDist[0].count) * 100 : 0}%`,
                        }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
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
