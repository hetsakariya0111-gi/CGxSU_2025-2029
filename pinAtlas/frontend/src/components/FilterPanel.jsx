import React, { useEffect, useState, useCallback } from 'react';
import { getStates, getDistricts, getTaluks } from '../api';
import { RefreshCcw, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';

const selectClass =
  'flex-1 input-pro py-2.5 text-sm appearance-none cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed pr-10 bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat';

const FilterPanel = ({ filters, setFilters, onReset }) => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [taluks, setTaluks] = useState([]);
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingDistricts, setLoadingDistricts] = useState(false);
  const [loadingTaluks, setLoadingTaluks] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoadingStates(true);
    getStates()
      .then((res) => {
        if (!cancelled) setStates(res.data || []);
      })
      .catch(() => {
        if (!cancelled) setStates([]);
      })
      .finally(() => {
        if (!cancelled) setLoadingStates(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!filters.state) {
      setDistricts([]);
      setTaluks([]);
      return undefined;
    }
    let cancelled = false;
    setLoadingDistricts(true);
    getDistricts(filters.state)
      .then((res) => {
        if (!cancelled) setDistricts(res.data || []);
      })
      .catch(() => {
        if (!cancelled) setDistricts([]);
      })
      .finally(() => {
        if (!cancelled) setLoadingDistricts(false);
      });
    return () => {
      cancelled = true;
    };
  }, [filters.state]);

  useEffect(() => {
    if (!filters.state || !filters.district) {
      setTaluks([]);
      return undefined;
    }
    let cancelled = false;
    setLoadingTaluks(true);
    getTaluks(filters.state, filters.district)
      .then((res) => {
        if (!cancelled) setTaluks(res.data || []);
      })
      .catch(() => {
        if (!cancelled) setTaluks([]);
      })
      .finally(() => {
        if (!cancelled) setLoadingTaluks(false);
      });
    return () => {
      cancelled = true;
    };
  }, [filters.state, filters.district]);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      const newFilters = { ...filters, [name]: value };

      if (name === 'state') {
        newFilters.district = '';
        newFilters.taluk = '';
      } else if (name === 'district') {
        newFilters.taluk = '';
      }

      setFilters(newFilters);
    },
    [filters, setFilters]
  );

  return (
    <div className="glass-card p-4 sticky top-4 z-40 mb-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between border border-border/80 backdrop-blur-xl bg-surface/40">
      <div className="flex-1 flex flex-col md:flex-row gap-3 w-full">
        <div className="relative flex-1">
          <select
            name="state"
            value={filters.state}
            onChange={handleChange}
            disabled={loadingStates}
            className={selectClass}
            aria-busy={loadingStates}
            aria-label="Filter by state"
          >
            <option value="">{loadingStates ? 'Loading states…' : 'Select State'}</option>
            {states.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {loadingStates && (
            <span className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 text-primary">
              <Loader2 className="animate-spin" size={18} aria-hidden />
            </span>
          )}
        </div>

        <div className="relative flex-1">
          <select
            name="district"
            value={filters.district}
            onChange={handleChange}
            disabled={!filters.state || loadingDistricts}
            className={selectClass}
            aria-busy={loadingDistricts}
            aria-label="Filter by district"
          >
            <option value="">
              {!filters.state ? 'Select state first' : loadingDistricts ? 'Loading districts…' : 'Select District'}
            </option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {loadingDistricts && filters.state && (
            <span className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 text-primary">
              <Loader2 className="animate-spin" size={18} aria-hidden />
            </span>
          )}
        </div>

        <div className="relative flex-1">
          <select
            name="taluk"
            value={filters.taluk}
            onChange={handleChange}
            disabled={!filters.district || loadingTaluks}
            className={selectClass}
            aria-busy={loadingTaluks}
            aria-label="Filter by taluk"
          >
            <option value="">
              {!filters.district ? 'Select district first' : loadingTaluks ? 'Loading taluks…' : 'Select Taluk'}
            </option>
            {taluks.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {loadingTaluks && filters.district && (
            <span className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 text-primary">
              <Loader2 className="animate-spin" size={18} aria-hidden />
            </span>
          )}
        </div>
      </div>

      <Button
        type="button"
        variant="secondary"
        onClick={onReset}
        className="whitespace-nowrap md:self-center"
        aria-label="Reset all filters"
      >
        <RefreshCcw size={18} aria-hidden />
        Reset
      </Button>
    </div>
  );
};

export default FilterPanel;
