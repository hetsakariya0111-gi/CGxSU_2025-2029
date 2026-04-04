import React, { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import SkeletonLoader from './SkeletonLoader';
import { DeliveryBadge } from './ui/Badge';

const ROW_HEIGHT = 52;
const VIRTUAL_THRESHOLD = 50;

const GRID_COLS =
  'grid grid-cols-[minmax(5.5rem,6.5rem)_minmax(10rem,1.6fr)_minmax(4.5rem,5.5rem)_minmax(5.5rem,1fr)_minmax(5.5rem,1fr)_minmax(4.5rem,6rem)_minmax(6rem,7rem)] gap-x-3 items-center';

function useContainerWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(960);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(() => setWidth(Math.max(320, el.clientWidth)));
    ro.observe(el);
    setWidth(Math.max(320, el.clientWidth));
    return () => ro.disconnect();
  }, []);
  return { ref, width };
}

const VirtualTableRow = React.memo(function VirtualTableRow({ index, style, data }) {
  const { rows, onRowClick } = data;
  const row = rows[index];
  const zebra = index % 2 === 0;

  return (
    <div style={style} className="border-b border-border/40">
      <div
        role="button"
        tabIndex={0}
        onClick={() => onRowClick(row)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onRowClick(row);
          }
        }}
        className={`${GRID_COLS} h-full px-4 cursor-pointer transition-colors duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset ${
          zebra ? 'bg-transparent' : 'bg-surface/20'
        } hover:bg-primary/[0.06]`}
      >
        <span className="font-semibold text-primary tabular-nums truncate">{row.pincode}</span>
        <span className="text-sm text-text truncate">{row.officeName || '—'}</span>
        <span className="text-sm text-textMuted truncate">{row.officeType || '—'}</span>
        <span className="text-sm text-text truncate">{row.taluk || '—'}</span>
        <span className="text-sm text-text truncate">{row.district || '—'}</span>
        <span className="text-sm text-text truncate">{row.state || '—'}</span>
        <span className="flex justify-start">
          <DeliveryBadge status={row.deliveryStatus} />
        </span>
      </div>
    </div>
  );
});

const COLUMNS = [
  { key: 'pincode', label: 'Pincode' },
  { key: 'officeName', label: 'Office' },
  { key: 'officeType', label: 'Type' },
  { key: 'taluk', label: 'Taluk' },
  { key: 'district', label: 'District' },
  { key: 'state', label: 'State' },
  { key: 'deliveryStatus', label: 'Delivery' },
];

const PincodeTable = ({ data, loading, onRowClick }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const { ref: containerRef, width } = useContainerWidth();

  const handleSort = useCallback((key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  }, []);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data || [];
    return [...(data || [])].sort((a, b) => {
      const valA = a[sortConfig.key] ?? '';
      const valB = b[sortConfig.key] ?? '';
      const s1 = String(valA);
      const s2 = String(valB);
      if (s1 < s2) return sortConfig.direction === 'asc' ? -1 : 1;
      if (s1 > s2) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const SortIcon = useCallback(
    function SortColIcon({ colKey }) {
      if (sortConfig.key !== colKey) {
        return <ArrowUpDown size={14} className="opacity-40 shrink-0" aria-hidden />;
      }
      return sortConfig.direction === 'asc' ? (
        <ArrowUp size={14} className="text-primary shrink-0" aria-hidden />
      ) : (
        <ArrowDown size={14} className="text-primary shrink-0" aria-hidden />
      );
    },
    [sortConfig]
  );

  const itemData = useMemo(
    () => ({ rows: sortedData, onRowClick }),
    [sortedData, onRowClick]
  );

  if (loading) {
    return <SkeletonLoader type="table" />;
  }

  if (!data || data.length === 0) {
    return (
      <div className="glass-card p-12 text-center flex flex-col items-center justify-center">
        <p className="text-xl text-textMuted font-medium">No results found.</p>
        <p className="text-sm text-textMuted mt-2">Try adjusting filters or your search query.</p>
      </div>
    );
  }

  const useVirtual = sortedData.length >= VIRTUAL_THRESHOLD;
  const listHeight = Math.min(560, Math.max(ROW_HEIGHT * 3, sortedData.length * ROW_HEIGHT));

  if (useVirtual) {
    return (
      <div ref={containerRef} className="glass-card overflow-hidden">
        <div
          className={`${GRID_COLS} px-4 py-3 border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-10 text-left text-xs font-semibold uppercase tracking-wide text-textMuted`}
        >
          {COLUMNS.map((col) => (
            <button
              key={col.key}
              type="button"
              onClick={() => handleSort(col.key)}
              className="flex items-center gap-1.5 hover:text-text transition-colors text-left min-w-0"
              aria-label={`Sort by ${col.label}`}
            >
              <span className="truncate">{col.label}</span>
              <SortIcon colKey={col.key} />
            </button>
          ))}
        </div>
        <List
          height={listHeight}
          width={width}
          itemCount={sortedData.length}
          itemSize={ROW_HEIGHT}
          itemData={itemData}
          overscanCount={6}
        >
          {VirtualTableRow}
        </List>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[880px]">
          <thead>
            <tr className="bg-surface/80 backdrop-blur-md border-b border-border sticky top-0 z-10">
              {COLUMNS.map((col) => (
                <th key={col.key} scope="col" className="px-4 py-3 text-left">
                  <button
                    type="button"
                    onClick={() => handleSort(col.key)}
                    className="flex items-center gap-2 font-semibold text-textMuted text-xs uppercase tracking-wide hover:text-text transition-colors"
                    aria-label={`Sort by ${col.label}`}
                  >
                    {col.label}
                    <SortIcon colKey={col.key} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, i) => (
              <tr
                key={row._id || `${row.pincode}-${i}`}
                onClick={() => onRowClick(row)}
                className={`border-b border-border/50 cursor-pointer transition-colors duration-150 ease-out hover:bg-primary/[0.06] ${
                  i % 2 === 0 ? 'bg-transparent' : 'bg-surface/15'
                }`}
              >
                <td className="px-4 py-3 text-sm font-semibold text-primary tabular-nums">{row.pincode}</td>
                <td className="px-4 py-3 text-sm text-text max-w-[200px] truncate">{row.officeName || '—'}</td>
                <td className="px-4 py-3 text-sm text-textMuted">{row.officeType || '—'}</td>
                <td className="px-4 py-3 text-sm text-text">{row.taluk || '—'}</td>
                <td className="px-4 py-3 text-sm text-text">{row.district || '—'}</td>
                <td className="px-4 py-3 text-sm text-text">{row.state || '—'}</td>
                <td className="px-4 py-3">
                  <DeliveryBadge status={row.deliveryStatus} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PincodeTable;
