import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

interface ButtonProps {
    text: string;
    to: string;
    invert?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, to, invert }) => {
    const buttonClass = `button ${invert ? 'button--secondary' : 'button--primary'}`;
    return (
      <Link to={to} className={buttonClass}>{text}</Link>
    );
}

export default Button;
