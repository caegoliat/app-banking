// TransactionForm.tsx
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../store/accountSlice';
import { depositMock, withdrawMock } from '../mocks/mockApi';
import { RootState } from '../store/store';

const TransactionForm: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');
  const dispatch = useDispatch();
  const account = useSelector((state: RootState) => state.account);

  // React Query mutations to simulate backend calls for deposits and withdrawals
  const depositMutation = useMutation(depositMock, {
    onSuccess: (data) => {
      // Update Redux state with the simulated backend response
      dispatch(deposit(data.balance));
    },
  });

  const withdrawMutation = useMutation(withdrawMock, {
    onSuccess: (data) => {
      // Update Redux state with the simulated backend response
      dispatch(withdraw(data.balance));
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'deposit') {
      depositMutation.mutate(amount); // Trigger the simulated backend call for deposit
    } else {
      withdrawMutation.mutate(amount); // Trigger the simulated backend call for withdrawal
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
          disabled={!account.name || !account.accountNumber}
        />
      </div>
      <div>
        <label>Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          disabled={!account.name || !account.accountNumber}
        >
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
        </select>
      </div>
      <button type="submit" disabled={!account.name || !account.accountNumber}>Submit</button>
    </form>
  );
};

export default TransactionForm;
