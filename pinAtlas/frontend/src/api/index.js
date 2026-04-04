import axios from 'axios';

function apiBaseURL() {
  if (import.meta.env.DEV) return '/api';
  return import.meta.env.VITE_API_BASE_URL || 'https://pin-atlas.onrender.com/api';
}

const api = axios.create({
  baseURL: apiBaseURL(),
  timeout: 60_000,
});

function withSignal(config, signal) {
  if (!signal) return config || {};
  return { ...(config || {}), signal };
}

export const getStates = (config) => api.get('/states', config).then((r) => r.data);

export const getDistricts = (state, config) =>
  api.get(`/states/${encodeURIComponent(state)}/districts`, config).then((r) => r.data);

export const getTaluks = (state, district, config) =>
  api
    .get(
      `/states/${encodeURIComponent(state)}/districts/${encodeURIComponent(district)}/taluks`,
      config
    )
    .then((r) => r.data);

export const getPincodes = (params, config) =>
  api.get('/pincodes', { ...config, params }).then((r) => r.data);

export const searchPincodes = (q, config) =>
  api.get('/search', { ...config, params: { q } }).then((r) => r.data);

export const getPincodeDetail = (pincode, config) =>
  api.get(`/pincode/${encodeURIComponent(pincode)}`, config).then((r) => r.data);

export const getStats = (config) => api.get('/stats', config).then((r) => r.data);

export const getStateDistribution = (config) =>
  api.get('/stats/state-distribution', config).then((r) => r.data);

export const getDeliveryDistribution = (config) =>
  api.get('/stats/delivery-distribution', config).then((r) => r.data);

export const exportCSV = (params) => {
  const qs = new URLSearchParams(
    Object.fromEntries(Object.entries(params || {}).filter(([, v]) => v != null && v !== ''))
  ).toString();
  window.open(`${apiBaseURL()}/export?${qs}`, '_blank', 'noopener,noreferrer');
};

export { apiBaseURL, withSignal };
export default api;
