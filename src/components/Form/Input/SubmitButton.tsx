import React from 'react';
import '../../Button/button.scss';

interface SubmitButtonProps {
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
  return <button type="submit" className='button button--primary'>{label}</button>;
};

export default SubmitButton;
