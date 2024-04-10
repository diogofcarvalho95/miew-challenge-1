import React from 'react';
import './input.scss';

interface SelectOptionsProps {
  options: { value: string | number, label: string }[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectOptions: React.FC<SelectOptionsProps> = ({ options, value, onChange }) => {
  return (
    <div className='select-options'>
      <select value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;
