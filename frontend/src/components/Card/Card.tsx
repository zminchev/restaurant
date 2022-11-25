import React from 'react';

interface CardProps {
  className?:string,
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className,children }) => {
  return <div className={`${className} bg-primary-white p-6 rounded-xl`}>{children}</div>;
};

export default Card;
