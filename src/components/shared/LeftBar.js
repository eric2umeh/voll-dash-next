'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '../../constants';
import Searchbar from './SearchBar';
import DropdownMenu from '../ui/DropdownMenu';

const LeftBar = () => {
  const pathname = usePathname();

  const [openMenus, setOpenMenus] = useState({});

  const handleMenuClick = (label) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [label]: !prevOpenMenus[label],
    }));
  };

  return (
    <section className="custom-scrollbar leftsidebar cursor-pointer">
      <div className="flex w-full flex-1 flex-col px-4">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.svg" alt="logo" width={28} height={28} />
          <p className="text-heading3-semibold text-light-1 max-xs:hidden">
            Volla
          </p>
        </Link>

        <div className="mt-2 mb-5">
          <Searchbar width="32" height="10" backgroundColor="bg-gray-2" />
        </div>

        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          const isMenuOpen = openMenus[link.label];

          return (
            <div key={link.label}>
              {link.dropdown ? (
                <div className="relative">
                  <div
                    className={`leftsidebar_link ${
                      isActive ? 'bg-gray-3' : ''
                    }`}
                    onClick={() => handleMenuClick(link.label)}
                  >
                    <Image
                      src={link.imgURL}
                      alt={link.label}
                      width={24}
                      height={24}
                    />
                    <p className="text-light-4">{link.label}</p>
                    <span className="ml-auto">
                      <Image
                        src="/assets/chevron-down.svg"
                        alt="chevron"
                        width={18}
                        height={18}
                        className={isMenuOpen ? 'rotate-180' : ''}
                      />
                    </span>
                  </div>
                  <DropdownMenu items={link.dropdown} isOpen={isMenuOpen} />
                </div>
              ) : (
                <Link
                  href={link.route}
                  key={link.label}
                  className={`leftsidebar_link ${isActive ? 'bg-gray-3' : ''}`}
                >
                  <Image
                    src={link.imgURL}
                    alt={link.label}
                    width={24}
                    height={24}
                  />
                  <p className="text-light-4">{link.label}</p>
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* Other Menus */}
      <div className="mb-3 px-2 hover:bg-gray-3">
        <div className="flex cursor-pointer gap-4 p-4">
          <Image
            src="/assets/settings.svg"
            alt="setting"
            width={24}
            height={24}
          />
          <p className="text-light-4">Account Settings</p>
        </div>
      </div>
      <div className="mx-3 border-b border-b-gray-3 max-sm:hidden"></div>

      <div className="px-2 hover:bg-gray-3">
        <div className="flex cursor-pointer justify-between p-4">
          <div className="flex text-light-4 max-md:hidden">
            <Image
              src="/assets/avatar.svg"
              alt="avatar"
              width={40}
              height={40}
            />
            <div className="flex flex-col ml-3">
              <p>Sani Chris</p>
              <p className="text-subtle-small">chris@vollapay.com</p>
            </div>
          </div>
          <Image
            className="max-sm:hidden"
            src="/assets/logout.svg"
            alt="logout"
            width={20}
            height={20}
          />
        </div>
      </div>
    </section>
  );
};

export default LeftBar;
