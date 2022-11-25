import React from 'react';
import Content from './Content';
import { dishesData } from 'mock/mock-data';

const RelatedContent = () => {
  const firstChunk = dishesData.slice(0, 4);
  const secondChunk = dishesData.slice(4);
  return (
    <section className="flex flex-col w-full justify-between md:px-52 md:flex-row">
      <Content title="Nearby Restaurants" items={firstChunk} />
      <Content title="Recommended Food Items" items={secondChunk} />
    </section>
  );
};

export default RelatedContent;
