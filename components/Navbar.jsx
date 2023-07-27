import React from "react";
import Profile from "./Profile";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white w-full px-4 sm:px-0 py-4 shadow">
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
