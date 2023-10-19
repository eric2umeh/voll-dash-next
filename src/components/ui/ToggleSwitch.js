import React from 'react';

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <span
        className={`w-11 h-6 rounded-full ${checked ? 'bg-purple-1' : 'bg-gray-300'}`}
        style={{ position: 'relative' }}
      >
        <span
          className="w-6 h-6 rounded-full bg-white"
          style={{
            position: 'absolute',
            transition: 'transform 0.3s',
            transform: checked ? 'translateX(100%)' : 'translateX(0)',
          }}
        ></span>
      </span>
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};

export default ToggleSwitch;
