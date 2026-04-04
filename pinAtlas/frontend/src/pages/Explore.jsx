import React, { useState, useEffect, useCallback } from 'react';
import { getPincodes, searchPincodes, exportCSV } from '../api';
import PageTransition from '../components/PageTransition';
import FilterPanel from '../components/FilterPanel';
import SearchBar from '../components/SearchBar';
import PincodeTable from '../components/PincodeTable';
import SideDrawer from '../components/SideDrawer';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';

const Explore = () => {
  const [filters, setFilters] = useState({ state: '', district: '', taluk: '' });
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({ page: 1, limit: 20, total: 0, totalPages: 0 });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleSearchInput = useCallback((q) => {
    setSearchQuery(q);
    if (q) {
      setFilters({ state: '', district: '', taluk: '' });
      setMeta((m) => ({ ...m, page: 1 }));
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        if (searchQuery.trim()) {
          setIsSearching(true);
          const res = await searchPincodes(searchQuery.trim());
          if (cancelled) return;
          setData(res.data || []);
          setMeta(
            res.meta || {
              page: 1,
              limit: (res.data || []).length,
              total: (res.data || []).length,
              totalPages: 1,
            }
          );
        } else {
          const res = await getPincodes({
            state: filters.state || undefined,
            district: filters.district || undefined,
            taluk: filters.taluk || undefined,
            page: meta.page,
            limit: meta.limit,
          });
          if (cancelled) return;
          setData(res.data || []);
          if (res.meta) setMeta(res.meta);
        }
      } catch {
        if (!cancelled) toast.error('Failed to load data');
      } finally {
        if (!cancelled) {
          setLoading(false);
          setIsSearching(false);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [filters.state, filters.district, filters.taluk, meta.page, meta.limit, searchQuery]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setMeta((m) => ({ ...m, page: 1 }));
    setSearchQuery('');
  };

  const handleReset = () => {
    setFilters({ state: '', district: '', taluk: '' });
    setSearchQuery('');
    setMeta((m) => ({ ...m, page: 1 }));
  };

  const handleExport = () => {
    exportCSV(filters);
    toast.success('Download started');
  };

  const getPageNumbers = () => {
    const { page, totalPages } = meta;
    const maxPagesToShow = 5;
    let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i += 1) {
      pages.push(i);
    }
    return pages;
  };

  const showingCount = data.length;
  const totalCount = meta.total ?? 0;
  const isSearchMode = Boolean(searchQuery.trim());

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col min-h-[calc(100vh-64px)]">
        <FilterPanel filters={filters} setFilters={handleFiltersChange} onReset={handleReset} />

        <div className="mb-8">
          <SearchBar onSearch={handleSearchInput} isSearching={isSearching} />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <p className="text-sm font-medium text-textMuted bg-surface px-4 py-2 rounded-lg border border-border">
            Showing{' '}
            <span className="text-text font-bold">{showingCount.toLocaleString('en-IN')}</span> of{' '}
            <span className="text-text font-bold">{totalCount.toLocaleString('en-IN')}</span> results
          </p>

          <div className="flex items-center gap-4">
            <label className="sr-only" htmlFor="per-page">
              Results per page
            </label>
            <select
              id="per-page"
              value={meta.limit}
              onChange={(e) =>
                setMeta((m) => ({
                  ...m,
                  limit: Number(e.target.value),
                  page: 1,
                }))
              }
              disabled={isSearchMode}
              className="bg-surface border border-border text-text rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary text-sm appearance-none disabled:opacity-50"
            >
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
            </select>

            <button
              type="button"
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primaryDark text-white rounded-lg transition-colors text-sm font-medium"
            >
              <Download size={16} />
              Export CSV
            </button>
          </div>
        </div>

        <div className="flex-1 mb-8 relative">
          <PincodeTable
            data={data}
            loading={loading}
            onRowClick={(row) => setSelectedRow(row)}
          />
        </div>

        {!isSearchMode && meta.totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pb-8 flex-wrap">
            <button
              type="button"
              onClick={() => setMeta((m) => ({ ...m, page: m.page - 1 }))}
              disabled={meta.page === 1}
              className="p-2 rounded-lg border border-border bg-surface text-textMuted hover:text-text hover:bg-border disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            {getPageNumbers().map((pageNum) => (
              <button
                type="button"
                key={pageNum}
                onClick={() => setMeta((m) => ({ ...m, page: pageNum }))}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors ${
                  pageNum === meta.page
                    ? 'bg-primary text-white'
                    : 'bg-surface border border-border text-text hover:bg-border'
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setMeta((m) => ({ ...m, page: m.page + 1 }))}
              disabled={meta.page === meta.totalPages}
              className="p-2 rounded-lg border border-border bg-surface text-textMuted hover:text-text hover:bg-border disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        <SideDrawer isOpen={!!selectedRow} onClose={() => setSelectedRow(null)} data={selectedRow} />
      </div>
    </PageTransition>
  );
};

export default Explore;
