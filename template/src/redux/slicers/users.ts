import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

export interface UserState {}

const initialState: UserState = {};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    doSomething: (_state: UserState, _action: PayloadAction<number>) => {
      // pass
    },
  },
});

export const {doSomething} = customerSlice.actions;
export default customerSlice;

export const selectNumCompletedOrders = (state: RootState) =>
  state[customerSlice.name];
