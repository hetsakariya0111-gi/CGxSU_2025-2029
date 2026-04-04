import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getPincodes, searchPincodes, exportCSV } from '../api';
import PageTransition from '../components/PageTransition';
import FilterPanel from '../components/FilterPanel';
import SearchBar from '../components/SearchBar';
import PincodeTable from '../components/PincodeTable';
import SideDrawer from '../components/SideDrawer';
import { Button } from '../components/ui/Button';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';

const Explore = () => {
  const [filters, setFilters] = useState({ state: '', district: '', taluk: '' });
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);

  const trimmedSearch = searchQuery.trim();
  const isSearchMode = trimmedSearch.length > 0;

  const listQuery = useQuery({
    queryKey: ['pincodes', 'list', filters.state, filters.district, filters.taluk, page, limit],
    queryFn: ({ signal }) =>
      getPincodes(
        {
          state: filters.state || undefined,
          district: filters.district || undefined,
          taluk: filters.taluk || undefined,
          page,
          limit,
        },
        { signal }
      ),
    enabled: !isSearchMode,
  });

  const searchQueryResult = useQuery({
    queryKey: ['pincodes', 'search', trimmedSearch],
    queryFn: ({ signal }) => searchPincodes(trimmedSearch, { signal }),
    enabled: isSearchMode,
  });

  const activeQuery = isSearchMode ? searchQueryResult : listQuery;

  const rows = useMemo(() => {
    if (isSearchMode) return searchQueryResult.data?.data ?? [];
    return listQuery.data?.data ?? [];
  }, [isSearchMode, searchQueryResult.data, listQuery.data]);

  const meta = useMemo(() => {
    if (isSearchMode) {
      const r = searchQueryResult.data?.data ?? [];
      return {
        page: 1,
        limit: Math.max(r.length, 1),
        total: r.length,
        totalPages: 1,
      };
    }
    return (
      listQuery.data?.meta ?? {
        page,
        limit,
        total: 0,
        totalPages: 0,
      }
    );
  }, [isSearchMode, searchQueryResult.data, listQuery.data, page, limit]);

  const loading = activeQuery.isPending || activeQuery.isFetching;
  const isSearching = isSearchMode && searchQueryResult.isFetching;

  const exploreHadErrorRef = useRef(false);
  useEffect(() => {
    if (activeQuery.isError && !exploreHadErrorRef.current) {
      toast.error('Failed to load data');
    }
    exploreHadErrorRef.current = activeQuery.isError;
  }, [activeQuery.isError]);

  useEffect(() => {
    if (!isSearchMode) {
      const reduce =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    }
  }, [page, isSearchMode]);

  const handleSearchInput = useCallback((q) => {
    setSearchQuery(q);
    if (q) {
      setFilters({ state: '', district: '', taluk: '' });
      setPage(1);
    }
  }, []);

  const handleFiltersChange = useCallback((newFilters) => {
    setFilters(newFilters);
    setPage(1);
    setSearchQuery('');
  }, []);

  const handleReset = useCallback(() => {
    setFilters({ state: '', district: '', taluk: '' });
    setSearchQuery('');
    setPage(1);
  }, []);

  const handleExport = useCallback(() => {
    exportCSV(filters);
    toast.success('Download started');
  }, [filters]);

  const getPageNumbers = useCallback(() => {
    const { totalPages } = meta;
    const p = page;
    const maxPagesToShow = 5;
    let startPage = Math.max(1, p - Math.floor(maxPagesToShow / 2));
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
  }, [meta, page]);

  const showingCount = rows.length;
  const totalCount = meta.total ?? 0;

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col min-h-[calc(100vh-64px)]">
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text tracking-tight">Data Explorer</h1>
            <p className="text-textMuted text-sm mt-1 max-w-xl">
              Filter by geography, search offices, export CSV — optimized for large result sets.
            </p>
          </div>
          <Button
            type="button"
            variant="primary"
            onClick={handleExport}
            className="shrink-0 self-start sm:self-auto"
            aria-label="Export filtered results as CSV"
          >
            <Download size={18} aria-hidden />
            Export CSV
          </Button>
        </header>

        <FilterPanel filters={filters} setFilters={handleFiltersChange} onReset={handleReset} />

        {activeQuery.isError && (
          <div
            className="mb-6 glass-card p-4 border-l-4 border-danger/70 bg-danger/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            role="alert"
          >
            <p className="text-sm text-text">
              <span className="font-semibold text-text">Could not load results.</span>{' '}
              <span className="text-textMuted">
                {activeQuery.error?.message || 'Check that the API is running on port 5000.'}
              </span>
            </p>
            <Button
              type="button"
              variant="secondary"
              className="shrink-0 text-sm"
              onClick={() => activeQuery.refetch()}
              aria-label="Retry loading results"
            >
              Retry
            </Button>
          </div>
        )}

        <div className="mb-8 w-full">
          <SearchBar onSearch={handleSearchInput} isSearching={isSearching} />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <p className="text-sm font-medium text-textMuted glass-card px-4 py-2.5 rounded-xl border border-border w-full sm:w-auto text-center sm:text-left">
            Showing{' '}
            <span className="text-text font-bold tabular-nums">{showingCount.toLocaleString('en-IN')}</span> of{' '}
            <span className="text-text font-bold tabular-nums">{totalCount.toLocaleString('en-IN')}</span> results
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
            <label className="sr-only" htmlFor="per-page">
              Results per page
            </label>
            <select
              id="per-page"
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setPage(1);
              }}
              disabled={isSearchMode}
              className="input-pro py-2.5 text-sm appearance-none cursor-pointer disabled:opacity-50 min-w-[140px]"
            >
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
            </select>
          </div>
        </div>

        <div className="flex-1 mb-8 relative min-h-[200px]">
          <PincodeTable data={rows} loading={loading} onRowClick={setSelectedRow} />
        </div>

        {!isSearchMode && meta.totalPages > 1 && (
          <nav
            className="flex items-center justify-center gap-2 pb-10 flex-wrap"
            aria-label="Pagination"
          >
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2.5 rounded-xl border border-border bg-surface text-textMuted hover:text-text hover:bg-border disabled:opacity-45 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} aria-hidden />
            </button>

            {getPageNumbers().map((pageNum) => (
              <button
                type="button"
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`min-w-[2.5rem] h-10 px-2 rounded-xl flex items-center justify-center font-medium transition-colors duration-200 ${
                  pageNum === page
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-surface border border-border text-text hover:bg-border'
                }`}
                aria-label={`Page ${pageNum}`}
                aria-current={pageNum === page ? 'page' : undefined}
              >
                {pageNum}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setPage((p) => p + 1)}
              disabled={page === meta.totalPages}
              className="p-2.5 rounded-xl border border-border bg-surface text-textMuted hover:text-text hover:bg-border disabled:opacity-45 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Next page"
            >
              <ChevronRight size={20} aria-hidden />
            </button>
          </nav>
        )}

        <SideDrawer isOpen={!!selectedRow} onClose={() => setSelectedRow(null)} data={selectedRow} />
      </div>
    </PageTransition>
  );
};

export default Explore;
