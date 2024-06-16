import React from 'react';
import coalcity from '../../resources/coalcity.png';

const DashCards = () => {
  return (
    <div className="mt-20">
      <h1 className="text-green-600 font-semibold text-left text-4xl mb-4 xsm-max:text-xl">
        Welcome Jonah
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-1">
          <div className="bg-green-600 p-6 lg:p-10 rounded-lg text-white flex flex-col items-start h-full">
            <p className="text-2xl lg:text-3xl font-semibold">Apply for</p>
            <p className="text-2xl lg:text-3xl font-semibold">Card</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-green-600 p-6 lg:p-10 rounded-lg text-white flex flex-col items-start h-full">
            <p className="text-2xl lg:text-3xl font-semibold">Track</p>
            <p className="text-2xl lg:text-3xl font-semibold">Application</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-green-600 p-6 lg:p-10 rounded-lg text-white flex flex-col items-start h-full">
            <p className="text-2xl lg:text-3xl font-semibold">Card</p>
            <p className="text-2xl lg:text-3xl font-semibold">Status</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <img src={coalcity} alt="" className="inline-block" />
      </div>
    </div>
  );
};

export default DashCards;
