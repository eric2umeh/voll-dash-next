import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({
  value,
  setValue,
  options,
  label,
  colored
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(options[0].color);
  const dropdownRef = useRef(null);

  const handleOptionClick = (newValue, newColor) => {
    setValue(newValue);
    setSelectedColor(newColor);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`relative ${colored ? 'text-dark-2' : ''}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 rounded-md border-light-5 border-2 focus:outline-none focus:border-blue-1"
      >
        <div className="flex items-center">
          {selectedColor && <div
            className={`w-2 h-2 rounded-full ${selectedColor}`}
          ></div>}
          <div className="ml-2">{value}</div>
        </div>
        <Image
          src="/assets/chevron-downs.svg"
          alt="Search"
          width={20} height={20}
          className={`w-4 h-4 ml-1 ${
            isOpen ? 'rotate-180' : ''
          } transform transition-transform`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg">
          <div className="py-2">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value, option.color)}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              >
                <div className="flex items-center">
                  <div
                    className={`w-2 h-2 rounded-full ${option.color}`}
                  ></div>
                  <div className="ml-2">{option.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
