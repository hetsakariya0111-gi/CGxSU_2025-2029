import { useState, useEffect, useMemo } from 'react';
import api from '../api';

export function useFetch(url, params = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const serialized = useMemo(() => JSON.stringify(params ?? null), [params]);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get(url, {
          params: params ?? undefined,
        });
        if (!cancelled) {
          setData(res.data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.response?.data?.message || err.message || 'Request failed');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [url, serialized]);

  const refetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get(url, { params: params ?? undefined });
      setData(res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Request failed');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
}
