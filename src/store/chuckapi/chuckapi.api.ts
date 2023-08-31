import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IJoke, ServerResponse } from '../../models';

export const chuckApi = createApi({
  reducerPath: 'chuck/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.chucknorris.io/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchJokes: build.query<ServerResponse<IJoke>, string>({
      query: (search: string) => ({
        url: 'jokes/search',
        params: {
          query: search,
        },
      }),
    }),
  }),
});

export const { useSearchJokesQuery } = chuckApi;
