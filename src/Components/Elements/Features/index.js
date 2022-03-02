import React from 'react';
import { CogIcon } from '@heroicons/react/outline';

const Feature = props => {
  return (
    <div key={props.id} className="pt-6">
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
            {props.title}
          </h3>
          <p className="mt-5 text-base text-gray-500">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Feature;
