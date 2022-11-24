import React, { useState } from 'react';
import Image from 'next/image';
import MainNav from 'components/MainNav';

export default function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav((nav) => !nav);
  };

  return (
    <header className="lg:flex mt-10 lg:justify-between lg:items-center lg:mx-24 xl:mx-48 ">
      <div className="flex justify-center">
        <Image src="/images/logo.svg" alt="Logo" width={24} height={24} />
        <h1 className="text-3xl font-bold ml-2">FitMe</h1>
        <div className="flex flex-row flex-nowrap md:hidden absolute right-7 top-[2.85rem]">
          <div onClick={handleNav} className="block md:hidden">
            {mobileNav ? (
              <Image
                className="cursor-pointer"
                src="/icons/close.svg"
                alt="Close"
                width={26}
                height={26}
              />
            ) : (
              <Image
                className="cursor-pointer"
                src="/icons/openMobilenav.svg"
                alt="Open nav"
                width={24}
                height={24}
              />
            )}
          </div>
        </div>
        <div className="flex flex-row flex-nowrap md:hidden absolute left-7 top-[2.85rem]">
          <div className="block md:hidden">
            <Image
              className="cursor-pointer"
              src="/icons/bag.svg"
              alt="Bag"
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
      <MainNav mobileNav={mobileNav} handleNav={handleNav} />
    </header>
  );
}
