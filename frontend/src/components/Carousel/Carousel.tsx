import Card from 'components/Card';
import React from 'react';

interface CarouselProps {
  items: any[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="ml-20 w-full flex justify-center items-center">
      {items.map((item, index) => (
        <Card key={index} index={index} item={item}/>
      ))}
    </div>
  );
};

export default Carousel;
