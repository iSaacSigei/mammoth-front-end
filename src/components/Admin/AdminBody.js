import React from "react";
import "../../Adminbody.css";
import AllLands from './AllLands'
const AdminBody = ({lands}) => {
  return (
    <>
      <div className=" c1 lg:grid lg:grid-cols-3 gap-10 items-center sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">
        <div className="bg-[#ef6c00] h-32 md:h-24">
          <p className="text-white">Pending</p>
        </div>
        <div className="bg-[#4caf50] h-32 md:h-24">
          <p className="text-white">Accepted</p>
        </div>
        <div className="bg-[#f44336] h-32 md:h-24">
          <p className="text-white">Rejected</p>
        </div>
      </div>
      <div className="mt-10">
        <AllLands lands={lands}/>
      </div>
    </>
  );
};

export default AdminBody;
