import React from 'react';
import Image from 'next/image';

interface DishInformationProps {
  availableSeatsForTwo?: number;
  price?: number;
  name: string;
  description: string;
  rating?: number;
  estimatedPrepTime?: number;
}

const DishInformation: React.FC<DishInformationProps> = ({
  availableSeatsForTwo,
  estimatedPrepTime,
  price,
  name,
  description,
  rating,
}) => {
  const starSrc =
    rating && rating < 4 ? '/icons/star_low.svg' : '/icons/star.svg';

  return (
    <>
      <h1 className="pb-6">{name}</h1>
      <div className="flex w-full justify-between pb-6">
        <div className="w-1/2">
          <p className="text-base text-primary-grey font-normal truncate">
            {description}
          </p>
        </div>
        {rating && (
          <div className="flex items-center w-1/2 justify-end">
            <Image src={starSrc} width={16} height={16} alt="rating" />
            <p className="text-base font-normal ml-1">{rating}</p>
          </div>
        )}
      </div>
      <div className="flex w-full justify-between">
        {estimatedPrepTime && availableSeatsForTwo && (
          <>
            <div className="flex items-center w-1/2">
              <Image
                src="/icons/estimated_delivery_icon.svg"
                width={16}
                height={16}
                alt="est delivery"
              />
              <p className="ml-1">{estimatedPrepTime} Mins</p>
            </div>
            <div className="flex items-center w-1/2 justify-end">
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
          </>
        )}
        {price && estimatedPrepTime && (
          <>
            <div className="flex items-center w-1/2">
              <Image
                src="/icons/price_icon.svg"
                width={16}
                height={16}
                alt="price"
              />
              <p className="text-base font-normal ml-1">${price}</p>
            </div>
            <div className="flex items-center w-1/2 justify-end">
              <Image
                src="/icons/estimated_delivery_icon.svg"
                width={16}
                height={16}
                alt="est delivery"
              />
              <p className="ml-1">{estimatedPrepTime} Mins</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DishInformation;
