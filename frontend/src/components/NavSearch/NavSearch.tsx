import React from 'react';
import Image from 'next/image';

interface NavSearchProps {
  hasIcon?: boolean;
  placeholder?: string;
}

export const NavSearch: React.FC<NavSearchProps> = ({
  hasIcon = true,
  placeholder,
}) => {
  const placeholderValue =
    placeholder || 'Search for a restaurant or a meal...';

  return (
    <span className="w-full max-w-xs mx-auto md:max-w-none px-6 py-2 flex justify-between border border-primary-grey rounded-md">
      <input
        type="text"
        placeholder={placeholderValue}
        className="w-full text-sm lg:text-base placeholder:text-primary-grey placeholder:font-inter placeholder:text-sm focus:outline-none"
      />
      {hasIcon && (
        <Image
          className="cursor-pointer"
          src="/icons/search.svg"
          alt="Search"
          width={19}
          height={19}
        />
      )}
    </span>
  );
};

export default NavSearch;
