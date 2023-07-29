import React from "react";

const Panel = ({ query, handleClear, handleQuery, handleShowModal }) => {
  return (
    <div className="flex mb-0 md:mx-20 mx-4 gap-4">
      <div className="absolute my-2.5 mx-4">
        {query === "" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="20px"
            className="text-gray-400"
          >
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
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
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400 cursor-pointer"
            onClick={handleClear}
            height="20px"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        )}
      </div>
      <input
        type="text"
        placeholder="Search Project or PJPK"
        className="bg-gray-100 hover:bg-gray-200 pr-4 pl-12 py-2 rounded-lg inline-block w-full"
        onChange={(e) => handleQuery(e)}
        value={query}
      />
      <button
        className="bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2 flex gap-1 items-center"
        onClick={handleShowModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          className="m-1"
          viewBox="0 0 512 512"
        >
          <path
            d="M35.4 87.12l168.65 196.44A16.07 16.07 0 01208 294v119.32a7.93 7.93 0 005.39 7.59l80.15 26.67A7.94 7.94 0 00304 440V294a16.07 16.07 0 014-10.44L476.6 87.12A14 14 0 00466 64H46.05A14 14 0 0035.4 87.12z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="50"
          />
        </svg>
        <h3 className="hidden sm:block font-medium">Filters</h3>
      </button>
    </div>
  );
};

export default Panel;
