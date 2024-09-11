

import React from "react";

function LiveFireReports() {
  return (
    <div className="flex flex-col w-6/12 max-w-4xl mx-auto px-4">
      <div className="flex flex-col items-start px-6 pt-5 pb-10 bg-white rounded-3xl leading-[66px] shadow-md">
        <h2 className="text-2xl font-bold text-gray-900">Live Fire Reports</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full mt-4 gap-4">
          <div className="text-base text-black font-bold">
            Reported Today - 11
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3459cd6e364d86d389b57d5d55161538eb2b1a027022482394fc31182146bc88?placeholderIfAbsent=true&apiKey=f2f1eca11c22487684e8fe7fa994306c"
            className="object-contain w-10 h-10 md:w-10 md:h-10"
            alt="Fire Report"
          />
        </div>
        <div className="mt-2 text-xs text-center text-green-500">
          Updated Just Now
        </div>
      </div>
    </div>
  );
}

export default LiveFireReports;


