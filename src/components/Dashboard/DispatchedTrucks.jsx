

import React from "react";

function DispatchedTrucks() {
  return (
    <div className="flex flex-col w-6/12 max-w-4xl mx-auto px-4">
      <div className="flex flex-col items-start px-6 pt-5 pb-10 bg-white rounded-3xl leading-[66px] shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 py-1.5">Dispatched Trucks</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full mt-3 gap-4">
          <div className="text-base text-black font-bold">
            WB134** Just Dispatched
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcba1dfc571c22c8062df839fc47b6df67cd6cb6090b9e4b2a09e18f2800079a?placeholderIfAbsent=true&apiKey=f2f1eca11c22487684e8fe7fa994306c"
            className="object-contain w-10 h-10 md:w-10 md:h-10"
            alt="Dispatched Truck"
          />
        </div>
        <div className="mt-2 text-xs text-center text-green-500">
          Updated Just Now
        </div>
      </div>
    </div>
  );
}

export default DispatchedTrucks;

