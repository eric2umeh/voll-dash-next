import Image from 'next/image';
import React from 'react';

const Pill = ({ type, status, children }) => {
  let bgColor = '';
  let textColor = '';
  let borderColor = '';

  if (type === 'error') {
    bgColor = 'bg-red-500';
    textColor = 'text-white';
    borderColor = 'border-red-500';
  } else if (type === 'success') {
    bgColor = 'bg-green-500';
    textColor = 'text-white';
    borderColor = 'border-green-500';
  } else if (type === 'withdraw') {
    bgColor = 'bg-blue-500';
    textColor = 'text-white';
    borderColor = 'border-blue-500';
  }

  if (status === 'Read') {
    bgColor = 'bg-green-500';
    textColor = 'text-white';
    borderColor = 'border-transparent';
  } else if (status === 'Unread') {
    bgColor = 'bg-gray-300';
    textColor = 'text-black';
    borderColor = 'border-transparent';
  } else if (status === 'Refunded') {
    bgColor = 'bg-yellow-500';
    textColor = 'text-black';
    borderColor = 'border-yellow-500';
  }

  const pillClasses = `px-2 py-1 rounded-full ${bgColor} ${borderColor} ${textColor}`;

  return (
    <span className={pillClasses}>
      {type === 'success'}
      {type === 'error' && (
        <Image
          src="/assets/reverse-left.svg"
          alt="Refunded"
          width={10}
          height={10}
          className="inline mr-1 text-lg"
        />
      )}
      {type === 'withdraw'}
      {type === 'Refunded'}
      {children}
    </span>
  );
};

export default Pill;
