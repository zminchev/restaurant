import React from 'react';
import CarouselItem from 'components/Carousel/CarouselItem';

interface CarouselProps {
  items: any[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="ml-20 py-44 w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap hide-scrollbar">
      {items.map((item, index) => (
        <CarouselItem key={index} index={index} item={item}/>
      ))}
    </div>
  );
};

export default Carousel;
