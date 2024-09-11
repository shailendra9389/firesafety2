

// import React from "react";

// function TruckManagement() {
//   const trucks = [
//     { number: 1, plateNumber: "WB124**", location: "L1", status: "On Service" },
//     { number: 1, plateNumber: "WB224**", location: "L3", status: "Returned" },
//     { number: 3, plateNumber: "WB134**", location: "L2", status: "On Service" },
//   ];

//   return (
//     <section className="flex flex-col py-8 px-4  rounded-3xl bg-slate-100 w-full mx-auto overflow-auto">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6">Truck Management</h2>
//       <div className="flex flex-col bg-white rounded-3xl shadow-md">
        
//         <div className="flex text-lg font-semibold text-black bg-gray-200 p-4 rounded-t-3xl">
//           <div className="flex-1 text-center px-4">Truck No.</div>
//           <div className="flex-1 text-center px-4">Truck PL No.</div>
//           <div className="flex-1 text-center px-4">Last Location</div>
//           <div className="flex-1 text-center px-4">Status</div>
//         </div>

       
//         <div className="flex flex-col">
//           {trucks.map((truck, index) => (
//             <div key={index} className="flex flex-row border-b border-slate-200 p-4">
//               <div className="flex-1 text-base text-center text-black  px-4">{truck.number}</div>
//               <div className="flex-1 text-base text-center text-black px-4">{truck.plateNumber}</div>
//               <div className="flex-1 text-base text-center text-black px-4">{truck.location}</div>
//               <div
//                 className={`flex-1 text-base text-center font-medium px-4 ${
//                   truck.status === "Returned" ? "text-blue-700" : "text-green-500"
//                 }`}
//               >
//                 {truck.status}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TruckManagement;


import React from "react";

function TruckManagement() {
  const trucks = [
    { number: 1, plateNumber: "WB124**", location: "L1", status: "On Service" },
    { number: 1, plateNumber: "WB224**", location: "L3", status: "Returned" },
    { number: 3, plateNumber: "WB134**", location: "L2", status: "On Service" },
  ];

  return (
    <section className="flex flex-col py-8 px-4 rounded-3xl bg-slate-100 w-full mx-auto overflow-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Truck Management</h2>
      <div className="flex flex-col bg-white rounded-3xl shadow-md">
        {/* Table Header */}
        <div className="hidden md:flex text-lg font-semibold text-black bg-gray-200 p-4 rounded-t-3xl">
          <div className="flex-1 text-center px-4">Truck No.</div>
          <div className="flex-1 text-center px-4">Truck PL No.</div>
          <div className="flex-1 text-center px-4">Last Location</div>
          <div className="flex-1 text-center px-4">Status</div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col">
          {trucks.map((truck, index) => (
            <div
              key={index}
              className="md:flex md:flex-row flex flex-col border-b border-slate-200 p-4"
            >
              <div className="flex md:flex-1 text-base md:text-lg text-center text-black px-4">
                <span className="md:hidden font-semibold">Truck No: </span>
                {truck.number}
              </div>
              <div className="flex md:flex-1 text-base md:text-lg text-center text-black px-4">
                <span className="md:hidden font-semibold">Truck PL No: </span>
                {truck.plateNumber}
              </div>
              <div className="flex md:flex-1 text-base md:text-lg text-center text-black px-4">
                <span className="md:hidden font-semibold">Last Location: </span>
                {truck.location}
              </div>
              <div
                className={`flex md:flex-1 text-base md:text-lg text-center font-medium px-4 ${
                  truck.status === "Returned" ? "text-blue-700" : "text-green-500"
                }`}
              >
                <span className="md:hidden font-semibold">Status: </span>
                {truck.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TruckManagement;








