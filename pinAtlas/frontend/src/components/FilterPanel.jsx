import React, { useEffect, useState } from 'react';
import { getStates, getDistricts, getTaluks } from '../api';
import { RefreshCcw } from 'lucide-react';

const FilterPanel = ({ filters, setFilters, onReset }) => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [taluks, setTaluks] = useState([]);

  useEffect(() => {
    getStates()
      .then((res) => setStates(res.data || []))
      .catch(() => setStates([]));
  }, []);

  useEffect(() => {
    if (filters.state) {
      getDistricts(filters.state)
        .then((res) => setDistricts(res.data || []))
        .catch(() => setDistricts([]));
      if (!filters.district) {
        setTaluks([]);
      }
    } else {
      setDistricts([]);
      setTaluks([]);
    }
  }, [filters.state]);

  useEffect(() => {
    if (filters.state && filters.district) {
      getTaluks(filters.state, filters.district)
        .then((res) => setTaluks(res.data || []))
        .catch(() => setTaluks([]));
    } else {
      setTaluks([]);
    }
  }, [filters.state, filters.district]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };

    if (name === 'state') {
      newFilters.district = '';
      newFilters.taluk = '';
    } else if (name === 'district') {
      newFilters.taluk = '';
    }

    setFilters(newFilters);
  };

  return (
    <div className="glass-card p-4 sticky top-4 z-40 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="flex-1 flex flex-col md:flex-row gap-4 w-full">
        <select
          name="state"
          value={filters.state}
          onChange={handleChange}
          className="flex-1 bg-surface border border-border text-text rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary appearance-none"
        >
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select
          name="district"
          value={filters.district}
          onChange={handleChange}
          disabled={!filters.state}
          className="flex-1 bg-surface border border-border text-text rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 appearance-none"
        >
          <option value="">Select District</option>
          {districts.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select
          name="taluk"
          value={filters.taluk}
          onChange={handleChange}
          disabled={!filters.district}
          className="flex-1 bg-surface border border-border text-text rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 appearance-none"
        >
          <option value="">Select Taluk</option>
          {taluks.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="flex items-center gap-2 px-6 py-2.5 bg-border hover:bg-border/80 text-text rounded-xl transition-colors font-medium whitespace-nowrap"
      >
        <RefreshCcw size={18} />
        Reset
      </button>
    </div>
  );
};

export default FilterPanel;
