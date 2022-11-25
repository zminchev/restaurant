import Image from 'next/image';
import React from 'react';

interface CarouselItemProps {
  index: number;
  item: any;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item, index }) => {
  const isFirst = index === 0; 

  return (
    <div className='p-8 inline-block'>
      <Image className={`${!isFirst && 'scale-90'}`} src={item.src} alt={`Card-${index}`} width={300} height={500} />
    </div>
  );
};

export default CarouselItem;
