import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { createAccount } from '../store/accountSlice';
import { createAccountMock } from '../mocks/mockApi';

const AccountForm: React.FC = () => {
  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const dispatch = useDispatch();

  // React Query mutation to simulate backend call
  const { mutate } = useMutation(createAccountMock, {
    onSuccess: (data) => {
      // Update Redux state with the simulated backend response
      dispatch(createAccount({ name: data.name, accountNumber: data.accountNumber }));
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ name, accountNumber }); // Trigger the simulated backend call
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Account Number:</label>
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default AccountForm;
