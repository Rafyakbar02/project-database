"use client";

import React, { useEffect, useRef, useState } from "react";

const Filter = ({ type, name }) => {
  const [toggle, setToggle] = useState(false);

  {
    /* Function to close dropdown when another element outside the dropdown is clicked */
  }
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  {
    /* End of function*/
  }

  return (
    <div>
      <button
        className="bg-gray-100 rounded-2xl px-4 py-2.5 text-xs font-semibold shadow inline-flex items-center gap-1"
        onClick={() => setToggle((prev) => !prev)}
      >
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          height="18px"
          width="18px"
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
        ref={ref}
        className={`${
          toggle ? "" : "hidden"
        } bg-gray-100 rounded-lg shadow text-xs absolute mt-2`}
      >
        <ul className="space-y-3 p-3">
          {type.map((choice, index) => (
            <li>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  id={`${choice.title}${index}`}
                />
                <label
                  for={`${choice.title}${index}`}
                  className="ml-2 select-none"
                >
                  {choice.title}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
