"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const Profile = () => {
  const [open, setOpen] = useState(false);
  let dropRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!dropRef?.current?.contains(e.target)) {
        setOpen(false);
      }
    });
  });

  return (
    <div ref={dropRef}>
      <div
        className="bg-gray-500 rounded-full h-10 w-10 justify-center flex items-center cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-gray-100 select-none">RA</span>
      </div>
      <div
        className={`${
          open ? "" : "hidden"
        } bg-white rounded-lg shadow border-gray-200 absolute mt-5 right-4 sm:right-20 flex flex-col w-48 py-1 text-sm`}
      >
        <Link
          href="/details"
          className="p-3 hover:bg-gray-200"
          onClick={() => setOpen(false)}
        >
          Projects
        </Link>
        <Link
          href="/"
          className="p-3 hover:bg-gray-200"
          onClick={() => setOpen(false)}
        >
          Profile
        </Link>
        <Link
          href="/"
          className="p-3 hover:bg-gray-200"
          onClick={() => setOpen(false)}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Profile;
