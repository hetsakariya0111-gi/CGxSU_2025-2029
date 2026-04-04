import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, Loader2 } from 'lucide-react';

const SearchBar = ({ onSearch, isSearching }) => {
  const [query, setQuery] = useState('');
  const timeoutRef = useRef(null);

  const notify = useCallback(
    (value) => {
      onSearch(value);
    },
    [onSearch]
  );

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => notify(query), 300);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [query, notify]);

  const handleClear = useCallback(() => {
    setQuery('');
    notify('');
  }, [notify]);

  return (
    <div className="relative w-full group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-textMuted group-focus-within:text-primary transition-colors duration-200" />
      </div>
      <input
        type="search"
        className="block w-full pl-12 pr-28 py-4 rounded-2xl border border-border bg-surface text-text text-base outline-none transition-[box-shadow,border-color] duration-200 ease-out focus:border-primary focus:ring-2 focus:ring-primary/35"
        placeholder="Search pincode or office name…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
        aria-label="Search pincodes"
      />

      <div className="absolute inset-y-0 right-3 flex items-center gap-2">
        {isSearching ? (
          <span className="flex items-center gap-1.5 text-xs font-medium text-primary pr-1">
            <Loader2 className="h-4 w-4 animate-spin shrink-0" aria-hidden />
            <span className="hidden sm:inline">Searching…</span>
          </span>
        ) : null}
        {query ? (
          <button
            type="button"
            onClick={handleClear}
            className="text-textMuted hover:text-text transition-colors p-1.5 rounded-lg hover:bg-surface/80"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
