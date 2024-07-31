import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_BASE_TMDB_URL;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<any, number>({
      query: (page = 1) => `movie/popular?api_key=${API_KEY}&page=${page}`,
    }),
    searchMovies: builder.query<any, string>({
      query: (query) => `search/movie?api_key=${API_KEY}&query=${query}`,
    }),
  }),
});

export const { useGetPopularMoviesQuery, useSearchMoviesQuery } = tmdbApi;
