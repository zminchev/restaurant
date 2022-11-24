import React, { useState } from 'react';
import Image from 'next/image';
import NavSearch from 'components/NavSearch';
import Button from 'components/Button';

interface MainNavProps {
  mobileNav: boolean;
  handleNav: () => void;
}

export default function MainNav({ mobileNav, handleNav }: MainNavProps) {
  return (
    <nav>
      <ul
        className="flex flex-col-reverse flex-wrap justify-center mt-5 md:mt-7 lg:mt-0
       md:flex-row md:flex-nowrap md:items-center ">
        <li className="md:mr-4">
          <NavSearch />
        </li>
        <ul className="hidden md:flex items-center">
          <li className="mr-4">
            <Image
              className="cursor-pointer"
              src="/icons/bag.svg"
              alt="Bag"
              width={25}
              height={25}
            />
          </li>
          <li className="">
            <Button text="Sign in" />
          </li>
        </ul>
      </ul>
      {/** Mobile nav */}
      <div
        className={
          mobileNav
            ? 'md:hidden fixed left-0 top-0 w-[60%] border-r border-r-primary-orange h-full bg-primary-white ease-in-out duration-500 z-20 flex flex-col justify-between'
            : 'fixed left-[-100%] top-0 w-[60%] border-r border-r-primary-orange h-full bg-primary-white ease-out duration-1000 z-20'
        }>
        <ul className="pt-8 uppercase w-full">
          <li
            onClick={handleNav}
            className="p-4 border-b border-b-primary-orange">
            Placeholder 1
          </li>
          <li
            onClick={handleNav}
            className="p-4 border-b border-b-primary-orange">
            Placeholder 2
          </li>
          <li
            onClick={handleNav}
            className="p-4 border-b border-b-primary-orange">
            Placeholder 3
          </li>
        </ul>
        <div className="flex justify-around items-center px-4 py-6">
          {/** This is a placeholder for icons (logout, login, settings etc) */}
          <Image
            className="cursor-pointer"
            src="/icons/bag.svg"
            alt="Bag"
            width={25}
            height={25}
          />
          <Image
            className="cursor-pointer"
            src="/icons/bag.svg"
            alt="Bag"
            width={25}
            height={25}
          />
          <Image
            className="cursor-pointer"
            src="/icons/bag.svg"
            alt="Bag"
            width={25}
            height={25}
          />
        </div>
      </div>
    </nav>
  );
}
