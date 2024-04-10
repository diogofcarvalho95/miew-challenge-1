import React from 'react';
import './HistoryItem.scss';

interface HistoryItemProps {
  id: number;
  amount: number;
  description: string;
  category: string;
  type: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ id, amount, description, category, type }) => {
  const sign = type === 'expense' ? '-' : '+';
  const formattedAmount = `${sign}${amount}€`;
  return (
    <li className="transactions__item" key={id}>
        <div className='transactions__item__details'>
            <span className='transactions__item__details__description'>{description}</span>
            <span className='transactions__item__details__category'>{category}</span>
        </div>
        <div className={`transactions__item__amount ${type === 'expense' ? 'expense' : 'income'}`}>{formattedAmount}</div>
    </li>
  );
};

export default HistoryItem;
