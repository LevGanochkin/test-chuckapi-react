import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IJoke } from '../../models';

export const chuckApi = createApi({
  reducerPath: 'chuck/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/levganochkin/fake-chuck-jokes-api-json',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchJokes: build.query<IJoke[], string>({
      query: (search: string) => ({
        url: '/jokes',
        params: {
          q: search,
        },
      }),
    }),
  }),
});

export const { useLazySearchJokesQuery, useSearchJokesQuery } = chuckApi;
