import axios from 'axios';

/** Live API (Render); override with VITE_API_BASE_URL for other deploys. */
const PROD_API_BASE = 'https://pinatlas-hetsakariya-xsnk.onrender.com/api'; 

function apiBaseURL() {
  if (import.meta.env.DEV) return '/api';
  const fromEnv = (import.meta.env.VITE_API_BASE_URL || '').trim().replace(/\/$/, '');
  return fromEnv || PROD_API_BASE;
}

const api = axios.create({
  baseURL: apiBaseURL(),
  timeout: 60_000,
});     

function isLikelyNetworkFailure(error) {
  if (!error || error.response) return false;
  const code = error.code;
  const msg = error.message || '';
  return (
    code === 'ERR_NETWORK' ||
    code === 'ECONNABORTED' ||
    msg === 'Network Error' ||
    Boolean(error.request || error.isAxiosError)
  );
}

function networkFailureMessage() {
  if (import.meta.env.DEV) {
    return 'Cannot reach the API. Start the backend on port 5000 (from pinAtlas: npm run dev, or cd backend && npm run dev). The Vite dev server proxies /api → localhost:5000.';
  }
  return `Cannot reach the API at ${PROD_API_BASE}. If the backend is on Render, wait for cold start (~1 min) and retry. Ensure the API service has MONGO_URI set, and CORS allows this site (CLIENT_URL or server default).`;
}

api.interceptors.response.use(
  (r) => r,
  (error) => {
    if (isLikelyNetworkFailure(error)) {
      error.userMessage = networkFailureMessage();
    }
    return Promise.reject(error);
  }
);

export function formatApiError(error) {
  if (!error) return 'Unknown error';
  if (error.userMessage) return error.userMessage;
  if (error.response?.data?.message) return String(error.response.data.message);
  if (isLikelyNetworkFailure(error)) return networkFailureMessage();
  const msg = error.message || '';
  if (msg) return msg;
  return 'Request failed';
}

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
