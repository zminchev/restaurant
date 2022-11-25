import React from 'react';
import Card from 'components/Card';
import Image from 'next/image';
import { DishProps } from 'types/Dish.types';

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
  const decimalRating = rating ? rating.toFixed(1) : 0;
  const starSrc =
    rating && rating < 4 ? '/icons/star_low.svg' : '/icons/star.svg';

  return (
    <Card>
      <Image
        className="rounded-xl pb-4"
        width={256}
        height={256}
        src={src}
        alt={name}
      />
      <h1 className="pb-6">{name}</h1>
      <div className="flex w-full justify-between pb-6">
        <p className="text-base text-primary-grey font-normal">
          {descriptionLowerCase}
        </p>
        {rating && (
          <div className="flex items-center">
            <Image src={starSrc} width={16} height={16} alt="rating" />
            <p className="text-base font-normal ml-1">{decimalRating}</p>
          </div>
        )}
      </div>
      {estimatedPrepTime && availableSeatsForTwo && (
        <div className="flex w-full justify-between">
          <div className="flex items-center">
            <Image
              src="/icons/estimated_delivery_icon.svg"
              width={16}
              height={16}
              alt="est delivery"
            />
            <p className="ml-1">{estimatedPrepTime} Mins</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/icons/available_seats.svg"
              width={16}
              height={16}
              alt="available seats"
            />
            <p className="text-base font-normal ml-1">
              {availableSeatsForTwo} for two
            </p>
          </div>
        </div>
      )}
      {price && estimatedPrepTime && (
        <div className="flex w-full justify-between">
          <div className="flex items-center">
            <Image
              src="/icons/price_icon.svg"
              width={16}
              height={16}
              alt="price"
            />
            <p className="text-base font-normal ml-1">${price}</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/icons/estimated_delivery_icon.svg"
              width={16}
              height={16}
              alt="est delivery"
            />
            <p className="ml-1">{estimatedPrepTime} Mins</p>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Dish;
