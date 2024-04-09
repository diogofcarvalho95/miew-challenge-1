import React from 'react';
import './intro.scss';

interface IntroProps {
  text: string;
}

const Intro: React.FC<IntroProps> = ({ text }) => {
  return <span className="intro">{text}</span>;
};

export default Intro;
