import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="bg-primary-grey p-6 rounded-xl">{children}</div>;
};

export default Card;
