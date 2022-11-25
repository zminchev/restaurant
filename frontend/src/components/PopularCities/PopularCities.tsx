import React from 'react';
import { City } from 'types/Location.types';

interface PopularCitiesProps {
  cities: City[];
  country: string;
}

const PopularCities: React.FC<PopularCitiesProps> = ({ cities, country }) => {
  return (
    <div>
      <h2 className="text-base font-medium font-poppins mb-4">
        Popular Cities in {country}
      </h2>
      <div>
        {cities.map((city, index) => (
          <span
            className={`${
              index % 2 === 1 ? 'text-primary-orange pl-0' : 'text-primary-grey pl-0'
            } px-6`}
          >
            {city.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
