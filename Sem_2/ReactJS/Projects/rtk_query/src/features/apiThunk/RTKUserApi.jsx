import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',  // Unique key for store
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    // Different end points for same base url:
    // https://jsonplaceholder.typicode.com/users
    getUsers: builder.query({
      query: () => '/users'
    }),
    getUsersById: builder.query({
      query: (id) => `/users/${id}`
    }),
    getTodos: builder.query({
      query: () => '/todos'
    }),
    getPhotos: builder.query({
      query: () => '/photos'
    }),
    getComments: builder.query({
      query: () => '/comments'
    }),

  })
});

export const { useGetUsersQuery, useGetTodosQuery, useGetCommentsQuery, useGetPhotosQuery, useGetUsersByIdQuery } = usersApi;