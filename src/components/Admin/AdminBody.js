import React from "react";
import "../../Adminbody.css";
import AllLands from "./AllLands";

const AdminBody = ({ lands, pending, accepted, decline }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 items-center">
        <div className="bg-[#ef6c00] lg:h-32 lg:w-32 md:h-32 md:w-32 sm:h-24 sm:w-24 flex justify-center items-center shadow-lg rounded-full hover:cursor-pointer">
          <p className="text-white text-center p-1.5 py-2">Pending {pending}</p>
        </div>

        <div className="bg-[#4caf50] lg:h-32 lg:w-32 md:h-32 md:w-32 sm:h-24 sm:w-24 flex justify-center items-center shadow-lg rounded-full hover:cursor-pointer">
          <p className="text-white text-center p-1.5 py-2">Accepted {accepted}</p>
        </div>

        <div className="bg-[#f44336] lg:h-32 lg:w-32 md:h-32 md:w-32 sm:h-24 sm:w-24 flex justify-center items-center shadow-lg rounded-full hover:cursor-pointer">
          <p className="text-white text-center p-1.5 py-2">Rejected {decline}</p>
        </div>
      </div>

      <div className="mt-10">
        <AllLands lands={lands} />
      </div>
    </>
  );
};

export default AdminBody;
