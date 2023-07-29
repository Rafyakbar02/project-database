import React from "react";

const NotFound = ({ query }) => {
  return (
    <div className="my-4 mx-4 md:mx-20 text-center flex justify-center flex-col gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="60px"
        className="text-gray-600"
      >
        <path
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          fill="none"
          stroke="currentColor"
          strokeMterlimit="10"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M338.29 338.29L448 448"
        />
      </svg>
      <h3 className="text-2xl font-semibold break-words">
        No Results for "{query}"
      </h3>
      <p className="text-sm text-gray-600">
        Check the spelling or try a new search
      </p>
    </div>
  );
};

export default NotFound;
