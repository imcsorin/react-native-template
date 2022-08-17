import {FetchBaseQueryArgs} from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import {ENVIRONMENT} from '../../../../env';

const fetchBaseQueryOptions: FetchBaseQueryArgs = {
  baseUrl: `${ENVIRONMENT.API_URL}/api/`,
  prepareHeaders: (headers, {}) => {
    return headers;
  },
};

export {fetchBaseQueryOptions};
