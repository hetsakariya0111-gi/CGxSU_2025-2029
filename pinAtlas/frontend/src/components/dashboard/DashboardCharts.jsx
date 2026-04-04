import React, { useMemo } from 'react';
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
import { BarChart3, PieChart } from 'lucide-react';
import SkeletonLoader from '../SkeletonLoader';

const BAR_GRADIENT_ID = 'barIndigoGradient';

function GlassTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const p = payload[0];
  const title = label ?? p.name;
  return (
    <div className="glass-card px-3 py-2 text-sm text-text shadow-xl">
      <p className="font-semibold text-textMuted mb-0.5">{title}</p>
      <p className="tabular-nums font-medium">{Number(p.value).toLocaleString('en-IN')}</p>
    </div>
  );
}

export default function DashboardCharts({ topStates, pieData, deliveryTotal, loading }) {
  const colors = useMemo(() => ['#6366f1', '#f43f5e'], []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-6 h-[380px] flex items-center justify-center">
          <SkeletonLoader type="card" />
        </div>
        <div className="glass-card p-6 h-[380px] flex items-center justify-center">
          <SkeletonLoader type="card" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 glass-card p-6 flex flex-col min-h-[380px]">
        <h2 className="text-lg font-bold text-text flex items-center gap-2 mb-6 tracking-tight">
          <BarChart3 className="text-primary h-5 w-5" aria-hidden />
          Top 10 states by pincode count
        </h2>
        <div className="flex-1 min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={topStates}
              layout="vertical"
              margin={{ top: 5, right: 28, left: 4, bottom: 5 }}
            >
              <defs>
                <linearGradient id={BAR_GRADIENT_ID} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={1} />
                </linearGradient>
              </defs>
              <XAxis type="number" hide />
              <YAxis
                dataKey="state"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
                width={118}
              />
              <Tooltip content={<GlassTooltip />} cursor={{ fill: 'transparent' }} />
              <Bar
                dataKey="count"
                fill={`url(#${BAR_GRADIENT_ID})`}
                radius={[0, 6, 6, 0]}
                barSize={22}
                animationDuration={900}
                isAnimationActive
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card p-6 flex flex-col min-h-[380px]">
        <h2 className="text-lg font-bold text-text flex items-center gap-2 mb-6 tracking-tight">
          <PieChart className="text-primary h-5 w-5" aria-hidden />
          Delivery vs non-delivery
        </h2>
        <div className="flex-1 min-h-[300px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="44%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
                animationDuration={900}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${entry.name}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip content={<GlassTooltip />} />
              <Legend
                verticalAlign="bottom"
                height={40}
                iconType="circle"
                formatter={(value) => <span className="text-textMuted text-sm ml-1">{value}</span>}
              />
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-12">
            <span className="text-3xl font-bold text-text tabular-nums">
              {deliveryTotal ? deliveryTotal.toLocaleString('en-IN') : '0'}
            </span>
            <span className="text-[10px] text-textMuted uppercase tracking-[0.2em] font-semibold">Total</span>
          </div>
        </div>
      </div>
    </div>
  );
}
