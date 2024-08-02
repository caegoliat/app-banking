import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AccountState {
  name: string;
  accountNumber: string;
  balance: number;
}

const initialState: AccountState = {
  name: '',
  accountNumber: '',
  balance: 0,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    createAccount(state, action: PayloadAction<{ name: string; accountNumber: string }>) {
      state.name = action.payload.name;
      state.accountNumber = action.payload.accountNumber;
    },
    deposit(state, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    withdraw(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
  },
});

export const { createAccount, deposit, withdraw } = accountSlice.actions;
export default accountSlice.reducer;
