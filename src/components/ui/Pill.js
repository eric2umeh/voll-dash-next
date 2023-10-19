import Image from 'next/image';
import React from 'react';

const Pill = ({ bgColor, borderColor, textColor, icon, children }) => {
  return (
    <div
      className={`flex text-subtle-medium items-center px-2 rounded-full ${bgColor} border-2 ${borderColor} ${textColor}`}
    >
      {icon && (
        <Image
          src={icon.src}
          alt={icon.alt}
          width={20}
          height={20}
          className="w-4 h-4 mr-1"
        />
      )}
      <span>{children}</span>
    </div>
  );
};

Pill.defaultProps = {
  borderColor: 'border-none',
  textColor: 'text-gray-5', 
};

export default Pill;
