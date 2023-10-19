import Image from 'next/image';
import React from 'react';

const Button = ({
  width,
  height,
  bgColor = 'bg-light-1',
  outline = 'border-light-5 border-2',
  textColor = 'text-gray-3',
  hoverColor = 'hover:bg-light-5',
  icon,
  onClick,
  children,
}) => {
  const buttonStyle = `
    w-${width}
    h-${height}
    ${bgColor}
    ${textColor}
    ${hoverColor}
    ${outline}
    inline-flex items-center justify-center px-3 py-2
    rounded-md
    transition duration-300
  `;

  return (
    <button className={buttonStyle} onClick={onClick}>
      {icon && <span className="mr-2"><Image src={icon.src} alt={icon.alt} width={20} height={20} /></span>}
      {children}
    </button>
  );
};

export default Button;
