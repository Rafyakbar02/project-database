import React from "react";

const Profile = () => {
  return (
    <div className="text-black flex gap-2.5 items-center">
      <div className="bg-gray-500 rounded-full h-10 w-10 justify-center flex items-center">
        <span className="text-gray-100">RA</span>
      </div>
      <div className=" hidden sm:flex sm:flex-col sm:gap-1">
        <h5 className="text-sm font-medium">Rafy Akbar</h5>
        <p className="text-xs">Admin</p>
      </div>
    </div>
  );
};

export default Profile;
