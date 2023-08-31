import { configureStore } from '@reduxjs/toolkit';
import { chuckApi } from './chuckapi/chuckapi.api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { searchReducer } from './chuckapi/search.slice';

export const store = configureStore({
  reducer: {
    [chuckApi.reducerPath]: chuckApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chuckApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
