import React from 'react';
import Link from 'next/link';

const DropdownMenu = ({ items, isOpen }) => {
  return (
    <div className={`leftsidebar-dropdown ${isOpen ? 'active' : ''}`}>
      {items.map((item) => (
        <Link href={item.url} key={item.title}>
          <div className="block px-12 py-2 text-sm hover:bg-gray-3 hover:text-white text-light-1 rounded-lg">
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  );
};
export default DropdownMenu;
