import React from "react";
import Profile from "./Profile";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white w-full px-4 md:px-0 py-4 shadow fixed z-50 top-0 left-0">
      <div className="flex flex-row justify-between items-center md:mx-20">
        <Link href="/">
          <h1 className="text-black text-xl font-bold">Executive Dashboard</h1>
        </Link>
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
