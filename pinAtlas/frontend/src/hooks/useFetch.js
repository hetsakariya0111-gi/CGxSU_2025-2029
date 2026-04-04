import { useState, useEffect, useMemo } from 'react';
import api from '../api';

export function useFetch(url, params = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const serialized = useMemo(() => JSON.stringify(params ?? null), [params]);

  useEffect(() => {
    const controller = new AbortController();
    const requestParams = JSON.parse(serialized);

    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get(url, {
          params: requestParams ?? undefined,
          signal: controller.signal,
        });
        if (!controller.signal.aborted) {
          setData(res.data);
        }
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(err.response?.data?.message || err.message || 'Request failed');
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    run();

    return () => controller.abort();
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
