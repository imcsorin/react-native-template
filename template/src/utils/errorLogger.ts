import {isRejectedWithValue, Middleware} from '@reduxjs/toolkit';

const rtkQueryErrorLogger: Middleware = () => next => action => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!
  const status = action.payload?.originalStatus || action.payload?.status;
  if (isRejectedWithValue(action) && status >= 500) {
    // pass
  } else if (status === 401 || status === 403) {
    // pass
  }

  return next(action);
};

export {rtkQueryErrorLogger};
