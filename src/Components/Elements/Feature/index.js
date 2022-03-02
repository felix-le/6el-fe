import React from 'react';
import { CogIcon } from '@heroicons/react/outline';

const Feature = ({ id, title, description }) => {
  return (
    <div key={id} className="pt-6">
      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r  bg-orange-600 rounded-md shadow-lg">
              <div className="h-6 w-6 text-white" aria-hidden="true">
                <CogIcon />
              </div>
            </span>
          </div>
          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
            {title}
          </h3>
          <p className="mt-5 text-base text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Feature;
