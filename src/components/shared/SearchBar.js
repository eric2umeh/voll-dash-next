"use client"

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Input } from '../ui/SearchInput';

function Searchbar({
  width,
  height,
  backgroundColor,
  borderColor,
  textColor,
  placeholderColor,
  iconSize,
  iconColor,
  inputBackgroundColor,
}) {
  const [search, setSearch] = useState('');

  const iconStyles = {
    width: iconSize,
    height: iconSize,
  };

  const inputStyles = {
    backgroundColor: inputBackgroundColor,
  };

  return (
    <div
      className={`searchbar flex items-center gap-2 bg-${backgroundColor} border-${borderColor} w-${width} h-${height} rounded-md p-1`}
    >
      <Image
        src='/assets/search.svg'
        alt='search'
        width={24}
        height={24}
        className='object-contain'
        style={{ ...iconStyles, color: iconColor }}
      />
      <Input
        id='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search'
        className='no-focus searchbar_inputs'
        style={{ ...inputStyles, color: textColor, placeholderColor: placeholderColor }}
      />
    </div>
  );
}

Searchbar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  placeholderColor: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  inputBackgroundColor: PropTypes.string,
};

export default Searchbar;