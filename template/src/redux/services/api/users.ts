import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {fetchBaseQueryOptions} from './options';

const USERS_TAGS = {
  PROFILE: 'profile',
};

const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    ...fetchBaseQueryOptions,
    baseUrl: `${fetchBaseQueryOptions.baseUrl}v1/users/`,
  }),
  tagTypes: Object.values(USERS_TAGS),
  endpoints: builder => ({
    login: builder.mutation<{token: string}, {email: string; password: string}>(
      {
        query: body => {
          return {
            url: 'token/',
            method: 'POST',
            body: {
              username: body.email,
              password: body.password,
            },
          };
        },
        invalidatesTags: Object.values(USERS_TAGS),
      },
    ),
  }),
});

export default usersApi;
