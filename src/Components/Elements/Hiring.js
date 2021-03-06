import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';

const Hiring = () => {
  return (
    <a
      href="#"
      className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
    >
      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r  bg-orange-600 rounded-full">
        We're hiring
      </span>
      <span className="ml-4 text-sm">Visit our careers page</span>
      <ChevronRightIcon
        className="ml-2 w-5 h-5 text-gray-500"
        aria-hidden="true"
      />
    </a>
  );
};
export default Hiring;
