import Image from 'next/image';
import React from 'react';

const StatisticsCard = ({ icon, name, value }) => {
  return (
    <div className="flex flex-col border-2 p-4 rounded-lg">
      <div className="flex justify-start items-center mb-2 ">
        <Image
          src={icon.src}
          alt={icon.alt}
          width={20}
          height={20}
          className="w-14"
        />
        <h3 className="text-base-regular ml-3">{name}</h3>
      </div>
      <p className="text-heading1-semibold">{value}</p>
    </div>
  );
};

export default StatisticsCard;
