'use client';

import React from 'react';
import Pill from './Pill';
import ToggleSwitch from '../ui/ToggleSwitch';
import Image from 'next/image';

const Table = () => {

  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full border border-gray-200">
        <thead className="text-subtle-small bg-light-6 text-gray-4">
          <tr>
            <th
              className="p-3 text-left hidden md:table-cell"
              onClick={() => handleSort('id')}
            >
              <div className="flex justify-bewteen">
                <input type="checkbox" className="form-checkbox mx-2" />
                ID
                <Image
                  src="/assets/arrow-down.svg"
                  alt="Refunded"
                  width={13}
                  height={13}
                  className="inline text-lg"
                />
              </div>
            </th>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left hidden md:table-cell">
              Message Content
            </th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Platform</th>
            <th className="p-3 text-left hidden md:table-cell">Viewing</th>
            <th
              className="p-3 text-left hidden md:table-cell"
              onClick={() => handleSort('date')}
            >
              Date
            </th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-subtle-small text-gray-4">
            <tr>
              <td className="p-3 hidden md:table-cell">
                <div className="flex justify-around text-subtle-semibold">
                  <input type="checkbox" className="form-checkbox" /> #
                  
                </div>
              </td>
              <td className="p-3">Amaka Umeh</td>
              <td className="p-3 hidden md:table-cell"></td>
              <td className="p-3 w-1">
                <Pill>rr</Pill>
              </td>
              <td className="p-3 hidden md:table-cell">
                <ToggleSwitch  />
              </td>
              <td className="p-3 hidden md:table-cell">
                {/* {item.date.toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })} */}
              </td>
              <td className="p-3">
                <Pill
                  // type={item.status.toLowerCase()}
                  // bgColor={
                  //   item.status === 'Open' ? 'bg-green-500' : 'bg-red-500'
                  // }
                  textColor="text-white"
                >
                  {/* {item.status} */}
                </Pill>
              </td>
              <td className="p-3">
                <span className="text-red-500 cursor-pointer">Delete</span>
                <span className="text-purple-500 cursor-pointer ml-2">
                  View
                </span>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
