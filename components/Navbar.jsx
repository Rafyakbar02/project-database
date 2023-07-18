import React from "react";
import Profile from "./Profile";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white w-full p-4 flex flex-row justify-between items-center shadow">
      <Link href="/">
        <h1 className="text-black text-xl font-bold">Executive Dashboard</h1>
      </Link>
      <Profile />
    </nav>
  );
};

export default Navbar;
