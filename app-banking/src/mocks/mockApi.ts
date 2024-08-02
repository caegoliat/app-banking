import { AccountState } from '../store/accountSlice';

let account: AccountState = {
  name: '',
  accountNumber: '',
  balance: 0,
};

export const createAccountMock = async ({ name, accountNumber }: { name: string; accountNumber: string }): Promise<AccountState> => {
  account = { name, accountNumber, balance: 0 };
  return account;
};

export const depositMock = async (amount: number): Promise<AccountState> => {
  account.balance += amount;
  return account;
};

export const withdrawMock = async (amount: number): Promise<AccountState> => {
  account.balance -= amount;
  return account;
};

export const getAccountMock = async (): Promise<AccountState> => {
  return account;
};
