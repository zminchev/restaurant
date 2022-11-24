import React from 'react';
import Image from 'next/image';

export default function NavSearch() {
  return (
    <span className="w-fit max-w-xs mx-auto md:max-w-none px-6 py-3 flex border border-primary-grey rounded-md">
      <input
        type="text"
        placeholder="Search for a restaurant or a meal..."
        className="w-64 lg:w-96 text-sm lg:text-base placeholder:text-primary-grey focus:outline-none"
      />
      <Image
        className="cursor-pointer"
        src="/icons/search.svg"
        alt="Search"
        width={19}
        height={19}
      />
    </span>
  );
}
