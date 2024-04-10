import React from 'react';
import HistoryItem from './HistoryItem';
import Title from '../../Title';

interface Transaction {
  id: number;
  amount: number;
  description: string;
  category: string;
  type: string;
}

interface HistoryProps {
  transactions: { id: number; amount: number; description: string, category: string, type: string }[];
}

const History: React.FC<HistoryProps> = ({ transactions }) => {
  return (
    <div className="d-flex flex-col gap-5 w-100">
      <Title text="Transactions"/>
      <ul className="transactions">
        {transactions.map((transaction) => (
          <HistoryItem
            key={transaction.id}
            id={transaction.id}
            amount={transaction.amount}
            description={transaction.description}
            category={transaction.category}
            type={transaction.type}
          />
        ))}
      </ul>
    </div>
  );
};

export default History;
