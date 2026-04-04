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
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      notify(query);
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [query, notify]);

  const handleClear = () => {
    setQuery('');
    notify('');
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-textMuted" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-10 py-3 border border-border bg-surface text-text rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
        placeholder="Search pincode or office name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />

      <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1">
        {isSearching && <Loader2 className="h-5 w-5 text-primary animate-spin" aria-hidden />}
        {query ? (
          <button
            type="button"
            onClick={handleClear}
            className="text-textMuted hover:text-text transition-colors p-1"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
