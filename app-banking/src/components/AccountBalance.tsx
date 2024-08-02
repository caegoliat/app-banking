// AccountBalance.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import { RootState } from '../store/store';
import { getAccountMock } from '../mocks/mockApi';
import { createAccount } from '../store/accountSlice';

const AccountBalance: React.FC = () => {
  const balance = useSelector((state: RootState) => state.account.balance);
  const dispatch = useDispatch();

  // React Query query to simulate backend call for getting account state
  const { data } = useQuery('account', getAccountMock);

  useEffect(() => {
    if (data) {
      // Update Redux state with the simulated backend response
      dispatch(createAccount({ name: data.name, accountNumber: data.accountNumber }));
    }
  }, [data, dispatch]);

  return (
    <div>
      <h2>Account Balance: ${balance}</h2>
    </div>
  );
};

export default AccountBalance;
