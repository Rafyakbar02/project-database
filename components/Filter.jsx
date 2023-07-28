"use client";

import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";

const Filter = ({ type, name }) => {
  const [open, setOpen] = useState(false);
  const [userChoice, setUserChoice] = useState([]);
  let dropRef = useRef();

  const handleChange = (e) => {
    setUserChoice(Array.isArray(e) ? e.map((x) => x.label) : []);
    console.log(userChoice);
  };

  const truncate = (str) => {
    return str.length > 20 ? str.substring(0, 19) + "..." : str;
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!dropRef.current.contains(e.target)) {
        setOpen(false);
      }
    });
  });

  return (
    <div ref={dropRef}>
      <button
        className={`rounded-2xl px-4 py-2.5 text-xs font-medium shadow inline-flex items-center gap-1 truncate ${
          userChoice.length > 0 ? "bg-blue-500 text-white" : "bg-gray-100"
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {userChoice.length > 0
          ? `${name}: ${truncate(userChoice.join(", "))}`
          : name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="18px"
          width="18px"
          className="pointer-events-none"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M112 268l144 144 144-144M256 392V100"
          />
        </svg>
      </button>
      <div
        className={`${
          open ? "" : "hidden"
        } bg-gray-100 rounded-lg shadow text-xs absolute mt-2 w-64 p-2`}
      >
        <Select options={type} isMulti onChange={handleChange} />
      </div>
    </div>
  );
};

export default Filter;
