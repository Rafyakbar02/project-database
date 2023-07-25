"use client";

import React, { useEffect, useRef, useState } from "react";

const Filter = ({ type, name }) => {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  let dropRef = useRef();

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
        className="bg-gray-100 rounded-2xl px-4 py-2.5 text-xs font-semibold shadow inline-flex items-center gap-1"
        onClick={() => setOpen((prev) => !prev)}
      >
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          height="18px"
          width="18px"
          className="pointer-events-none"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M112 268l144 144 144-144M256 392V100"
          />
        </svg>
      </button>
      <div
        className={`${
          open ? "" : "hidden"
        } bg-gray-100 rounded-lg shadow text-xs absolute mt-2`}
      >
        <input
          type="text"
          placeholder="Select one or more"
          className="p-2 m-2 mb-0 rounded-md"
        />
        <ul className="space-y-1 p-2">
          {type.map((choice, index) => (
            <li className="hover:bg-gray-300 p-1 rounded-sm">
              <button className="flex items-center">
                <input
                  type="checkbox"
                  id={`${choice.title}${index}`}
                  className="cursor-pointer"
                />
                <label
                  for={`${choice.title}${index}`}
                  className="ml-2 select-none cursor-pointer"
                >
                  {choice.title}
                </label>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
