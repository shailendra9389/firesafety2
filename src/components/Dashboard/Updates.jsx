

import React from "react";

const validColors = {
  rose: "bg-rose-100",
  yellow: "bg-yellow-100",
  green: "bg-green-100",
};

function Updates() {
  const updates = [
    { text: "+917679****** Just Reported", type: "rose" },
    { text: "+917679****** Just Reported", type: "rose" },
    { text: "Fire Truck - WB1424** reached to L1", type: "green" },
    { text: "Fire Truck - WB1424** reached to L1", type: "yellow" },
    { text: "+917679****** Just Reported", type: "rose" },
    { text: "Fire Truck - WB1424** reached to L1", type: "yellow" },
    { text: "Fire Truck - WB1424** reached to L1", type: "yellow" },
    { text: "Fire Truck - WB1424** reached to L1", type: "green" },
  ];

  return (
    <div className="flex flex-col ml-0 mr-12 w-[50%] max-md:ml-0 max-md:mr-4 max-md:w-full">
      <div className="flex flex-col grow px-8 pt-0 pb-16 w-full text-sm font-bold text-black bg-white rounded-2xl max-md:px-5 max-md:mt-0"> 
        <h2 className="self-center text-2xl text-gray-900">Updates</h2>
        {updates.map((update, index) => {
          
          const bgColor = validColors[update.type] || "bg-gray-100";

          return (
            <div
              key={index}
              className={`whitespace-nowrap overflow-hidden px-12 py-2 mt-4 leading-9 text-center ${bgColor} rounded-3xl max-md:px-5`} 
              style={{ textOverflow: 'ellipsis' }}
            >
              {update.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Updates;




