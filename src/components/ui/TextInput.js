import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const TextInput = ({
  onChange,
  iconImage,
  placeholder = '',
  width = 'w-full',
  height = 'h-12',
  name = '',
  type = 'text',
  required = false,
  disabled = false,
}) => {
  const textColor = 'text-gray-300';

  return (
    <div className={`relative ${width} ${height}`}>
      {iconImage && (
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
          {iconImage && <Image src={iconImage.src} alt={iconImage.alt} width={20} height={24} />}
        </div>
      )}
      <input
  className={`block text-small-regular w-full py-3 px-4 ${textColor} rounded border-light-5 border-2 focus:outline-blue-1 ${
    disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
  } ${disabled ? 'text-gray-500' : ''}`}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        required={required}
        disabled={disabled}
        style={{ paddingLeft: iconImage ? '32px' : '12px' }}
      />
    </div>
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  iconImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default TextInput;
