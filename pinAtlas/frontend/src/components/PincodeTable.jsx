import React, { useMemo, useState } from 'react';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import SkeletonLoader from './SkeletonLoader';

const PincodeTable = ({ data, loading, onRowClick }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

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

  if (loading) {
    return <SkeletonLoader type="table" />;
  }

  if (!data || data.length === 0) {
    return (
      <div className="glass-card p-12 text-center flex flex-col items-center justify-center">
        <p className="text-xl text-textMuted font-medium">No results found.</p>
        <p className="text-sm text-textMuted mt-2">Try adjusting your filters or search query.</p>
      </div>
    );
  }

  const columns = [
    { key: 'pincode', label: 'Pincode' },
    { key: 'officeName', label: 'Office Name' },
    { key: 'officeType', label: 'Type' },
    { key: 'taluk', label: 'Taluk' },
    { key: 'district', label: 'District' },
    { key: 'state', label: 'State' },
  ];

  const SortIcon = ({ colKey }) => {
    if (sortConfig.key !== colKey) {
      return <ArrowUpDown size={14} className="opacity-40" aria-hidden />;
    }
    return sortConfig.direction === 'asc' ? (
      <ArrowUp size={14} className="text-primary" aria-hidden />
    ) : (
      <ArrowDown size={14} className="text-primary" aria-hidden />
    );
  };

  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[720px]">
          <thead>
            <tr className="bg-surface/50 border-b border-border">
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  onClick={() => handleSort(col.key)}
                  className="px-6 py-4 font-semibold text-textMuted text-sm cursor-pointer hover:text-text transition-colors whitespace-nowrap select-none"
                >
                  <div className="flex items-center gap-2">
                    {col.label}
                    <SortIcon colKey={col.key} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, i) => (
              <tr
                key={row._id || `${row.pincode}-${i}`}
                onClick={() => onRowClick(row)}
                className={`border-b border-border/50 hover:bg-surface/50 cursor-pointer transition-colors ${
                  i % 2 === 0 ? 'bg-transparent' : 'bg-surface/20'
                }`}
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4 text-sm text-text">
                    {col.key === 'pincode' ? (
                      <span className="font-semibold text-primary">{row[col.key]}</span>
                    ) : (
                      row[col.key] || '-'
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PincodeTable;
