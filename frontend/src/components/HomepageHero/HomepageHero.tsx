import React from 'react';
import Carousel from 'components/Carousel';
import { cardData } from 'mock/mock-data';
import NavSearch from 'components/NavSearch';
import Button from 'components/Button';

const HomepageHero = () => {
  return (
    <div className="flex justify-between">
      <div className="py-52 pl-52 max-w-4xl">
        <div className="text-5xl font-medium leading-19">
          <h1>
            Premium <span className="text-primary-orange">quality</span>
          </h1>
          <h1>
            Food for your{' '}
            <img className="inline-block px-2" src="/assets/BananaToggle.png" />
            <span className="text-primary-orange">healthy</span>
          </h1>
          <h1>
            <img className="inline-block px-2" src="/assets/AppleToggle.png" />
            <span className="text-primary-orange font-normal ">
              & Daily Life
            </span>
          </h1>
        </div>
        <p className="text-base py-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          numquam corrupti labore suscipit possimus similique tempore harum hic,
          id, doloremque reiciendis soluta culpa impedit quibusdam ipsam alias?
          Asperiores, totam earum!
        </p>
        <div className='flex w-full justify-start'>
          <NavSearch />
          <Button text="Get Started"/>
        </div>
      </div>
      <Carousel items={cardData} />
    </div>
  );
};

export default HomepageHero;
