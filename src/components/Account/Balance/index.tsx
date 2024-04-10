import React from 'react';
import Title from '../../Title';
import './balance.scss';

interface CurrentBalanceProps {
  balance: number;
}

const CurrentBalance: React.FC<CurrentBalanceProps> = ({ balance }) => {
  return (
    <div className="d-flex flex-col">
      <Title text="Balance"/>
      <span className="balance">{balance}€</span>
    </div>
  );
};

export default CurrentBalance;
