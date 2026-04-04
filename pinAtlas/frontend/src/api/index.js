import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://pin-atlas.onrender.com/api',
});

export const getStates = () => api.get('/states').then((r) => r.data);

export const getDistricts = (state) =>
  api.get(`/states/${encodeURIComponent(state)}/districts`).then((r) => r.data);

export const getTaluks = (state, district) =>
  api.get(`/states/${encodeURIComponent(state)}/districts/${encodeURIComponent(district)}/taluks`)
    .then((r) => r.data);

export const getPincodes = (params) =>
  api.get('/pincodes', { params }).then((r) => r.data);

export const searchPincodes = (q) =>
  api.get('/search', { params: { q } }).then((r) => r.data);

export const getPincodeDetail = (pincode) =>
  api.get(`/pincode/${encodeURIComponent(pincode)}`).then((r) => r.data);

export const getStats = () => api.get('/stats').then((r) => r.data);

export const getStateDistribution = () =>
  api.get('/stats/state-distribution').then((r) => r.data);

export const getDeliveryDistribution = () =>
  api.get('/stats/delivery-distribution').then((r) => r.data);

export const exportCSV = (params) => {
  const qs = new URLSearchParams(
    Object.fromEntries(
      Object.entries(params || {}).filter(([, v]) => v != null && v !== '')
    )
  ).toString();
  window.open(
    `${import.meta.env.VITE_API_BASE_URL || 'https://pin-atlas.onrender.com/api'}/export?${qs}`,
    '_blank',
    'noopener,noreferrer'
  );
};

export default api;