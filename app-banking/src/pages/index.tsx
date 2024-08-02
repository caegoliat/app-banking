import React from 'react';
import AccountForm from '../components/AccountForm';
import TransactionForm from '../components/TransactionForm';
import AccountBalance from '../components/AccountBalance';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Banking App</h1>
      <AccountForm />
      <TransactionForm />
      <AccountBalance />
    </div>
  );
};

export default Home;
