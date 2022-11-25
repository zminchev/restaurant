import React from 'react';
import Dish from './Dish';
import { DishProps } from 'types/Dish.types';

interface ContentProps {
  title: string;
  items: DishProps[];
}

const Content: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <div className="w-full px-2 font-medium">
      <h1 className="text-2xl pb-6 pt-6 md:pt-0">{title}</h1>
      <div className="flex gap-6 flex-wrap">
        {items.map((dish) => (
          <Dish {...dish} />
        ))}
      </div>
    </div>
  );
};

export default Content;
