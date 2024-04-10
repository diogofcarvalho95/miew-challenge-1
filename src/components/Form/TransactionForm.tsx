import React, { useState } from 'react';
import InputField from './Input/InputField';
import SubmitButton from './Input/SubmitButton';
import Title from '../Title';
import './form.scss';
import SelectOptions from './Input/SelectOptions';

interface Transaction {
  id: number;
  amount: number;
  description: string;
  category: string;
  type: 'income' | 'expense';
}

interface TransactionFormProps {
  onSubmit: (transaction: Transaction) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [type, setType] = useState<'income' | 'expense'>('expense');

  const handleAddTransaction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTransaction: Transaction = {
      id: Math.random(),
      amount,
      description,
      category,
      type
    };
    onSubmit(newTransaction);
    // Reset form
    setAmount(0);
    setDescription('');
    setCategory('');
    setType('expense');
  };

  return (
    <form className='transactionForm' onSubmit={handleAddTransaction}>
        <div className='transactionForm__container'>
            <Title text="New Transaction"/>
            <InputField
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
            />
            <InputField
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <InputField
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <SelectOptions
                options={[
                    { value: 'income', label: 'Income' },
                    { value: 'expense', label: 'Expense' },
                ]}
                value={type}
                onChange={(e) => setType(e.target.value as 'income' | 'expense')}
            />
            <SubmitButton label="Add" />
        </div>
    </form>
  );
}

export default TransactionForm;