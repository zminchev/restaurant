import React from 'react';
import Card from 'components/Card';
import Image from 'next/image';
import { DishProps } from 'types/Dish.types';
import DishInformation from './DishInformation';

const Dish: React.FC<DishProps> = ({
  src,
  name,
  description,
  rating,
  price,
  availableSeatsForTwo,
  estimatedPrepTime,
}) => {
  const descriptionLowerCase = description.toLowerCase();
  const decimalRating = rating.toFixed(1)

  return (
    <Card className="max-w-xs">
      <Image
        className="rounded-xl pb-4"
        width={256}
        height={256}
        src={src}
        alt={name}
      />
      <DishInformation
        availableSeatsForTwo={availableSeatsForTwo}
        estimatedPrepTime={estimatedPrepTime}
        price={price}
        name={name}
        description={descriptionLowerCase}
        rating={decimalRating}
      />
    </Card>
  );
};

export default Dish;
