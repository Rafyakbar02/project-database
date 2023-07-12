import React from "react";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <nav className="bg-white w-full p-4 flex flex-row justify-between items-center shadow">
      <h1 className="text-black text-xl font-bold">project database</h1>
      <Profile />
    </nav>
  );
};

export default Navbar;
