import React from 'react';
import Carousel from 'components/Carousel';
import NavSearch from 'components/NavSearch';
import Button from 'components/Button';
import { cardData, citiesData } from 'mock/mock-data';
import PopularCities from 'components/PopularCities/PopularCities';
import RelatedContent from 'components/RelatedContent';

const HomepageHero = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="py-48 pl-48 max-w-4xl">
          <div className="text-5xl font-medium leading-19">
            <h1>
              Premium <span className="text-primary-orange">quality</span>
            </h1>
            <h1>
              Food for your{' '}
              <img
                className="inline-block px-2"
                src="/assets/BananaToggle.png"
              />
              <span className="text-primary-orange">healthy</span>
            </h1>
            <h1>
              <img
                className="inline-block px-2"
                src="/assets/AppleToggle.png"
              />
              <span className="text-primary-orange font-normal ">
                & Daily Life
              </span>
            </h1>
          </div>
          <p className="text-base py-8 font-inter font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            numquam corrupti labore suscipit possimus similique tempore harum
            hic, id, doloremque reiciendis soluta culpa impedit quibusdam ipsam
            alias? Asperiores, totam earum!
          </p>
          <div className="pb-8 flex w-full">
            <NavSearch
              hasIcon={false}
              placeholder="Enter your delivery location"
            />
            <Button className="ml-6 whitespace-nowrap" text="Get Started" />
          </div>
          {/* Country/cities could be dynamic based on the user's location */}
          <PopularCities cities={citiesData} country="India" />
        </div>
        <Carousel items={cardData} />
      </div>
      <RelatedContent />
    </>
  );
};

export default HomepageHero;
