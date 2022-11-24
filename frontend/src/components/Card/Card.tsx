import Image from 'next/image';
import React from 'react';

interface CardProps {
  index: number;
  item: any;
}

const Card: React.FC<CardProps> = ({ item, index }) => {
  const isFirst = index === 0;

  return (
    <div>
      <Image src={item.src} alt={`Card-${index}`} width={400} height={600} className={`${!isFirst && 'scale-90'}`}/>
    </div>
  );
};

export default Card;
