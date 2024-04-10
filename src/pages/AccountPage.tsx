import React, { useState } from 'react';
import CurrentBalance from '../components/Account/Balance';
import History from '../components/Account/History';
import TransactionForm from '../components/Form/TransactionForm';
import '../components/Button/button.scss';

interface Transaction {
  id: number;
  amount: number;
  description: string;
  category: string;
  type: 'income' | 'expense';
}

const calculateBalance = (transactions: Transaction[]): number => {
  return transactions.reduce((total, transaction) => {
    return transaction.type === 'income' ? total + transaction.amount : total - transaction.amount;
  }, 0);
};

const AccountPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, amount: 100, description: 'Grocery', category: 'Shopping', type: 'expense' },
    { id: 2, amount: 50, description: 'Ramen', category: 'Food', type: 'expense' },
    { id: 3, amount: 200, description: 'HBO Max', category: 'Subscription', type: 'expense' },
    { id: 4, amount: 2200, description: 'Freelance', category: 'Salary', type: 'income' }
  ]);

  const [balance, setBalance] = useState(() => calculateBalance(transactions));

  const [showForm, setShowForm] = useState(false);

  const handleAddTransaction = (newTransaction: Transaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    setBalance(calculateBalance(updatedTransactions));
    setShowForm(false);
  };

  return (
    <div className='container gap-10'>
      <img width="300" src="undraw_investing_re_bov7.svg" alt="My account" loading='lazy'/>
      <CurrentBalance balance={balance} />
      <History transactions={transactions} />
      <div>
        <button className="button button--primary" onClick={() => setShowForm(!showForm)}>Add Transaction</button>
        {showForm && (
          <>
            <div className='transactionOverlay'></div>
            <TransactionForm onSubmit={handleAddTransaction} />
          </>
        )}
      </div>
    </div>
  );
}

export default AccountPage;
