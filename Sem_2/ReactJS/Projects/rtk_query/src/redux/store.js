import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from '../features/apiThunk/RTKUserApi.jsx';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware)

  // getDefaultMiddleware() -> provide base common redux function...
  // userApi.middleware -> actual rtk query run.......
});