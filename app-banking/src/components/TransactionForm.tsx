import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../store/accountSlice';
import { depositMock, withdrawMock } from '../mocks/mockApi';
import { RootState } from '../store/store';

const TransactionForm: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [type, setType] = useState('deposit');
  const dispatch = useDispatch();
  const { name, accountNumber } = useSelector((state: RootState) => state.account);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setAmount(value);
  };

  const depositMutation = useMutation(depositMock, {
    onSuccess: (data) => {
      dispatch(deposit(Number(amount)));
    },
  });

  const withdrawMutation = useMutation(withdrawMock, {
    onSuccess: (data) => {
      dispatch(withdraw(Number(amount)));
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericAmount = Number(amount); // Convert amount to number
    if (type === 'deposit') {
      depositMutation.mutate(numericAmount);
    } else {
      withdrawMutation.mutate(numericAmount);
    }
    setAmount(''); // Clear the input after submission
  };

  // Check if the account has been created
  const isAccountCreated = name !== '' && accountNumber !== '';

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Amount:</label>
        <input
          type="text"
          placeholder="$"
          value={amount}
          onChange={handleAmountChange}
          required
          disabled={!isAccountCreated} // Disable input if account not created
        />
      </div>
      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)} disabled={!isAccountCreated}>
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
        </select>
      </div>
      <button type="submit" disabled={!isAccountCreated}>
        Submit
      </button>
      {!isAccountCreated && (
        <p style={{ color: 'red' }}>You must create an account before making transactions.</p>
      )}
    </form>
  );
};

export default TransactionForm;
