import React from "react";

function CloseButton({ handleClose }) {
    return (
        <div
            className={
                "cursor-pointer hover:bg-gray-200 rounded-full p-1 h-11 w-11 " +
                "flex justify-center items-center"
            }
            onClick={handleClose}
            type="button"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-10 md:h-20"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M368 368L144 144M368 144L144 368"
                />
            </svg>
        </div>
    );
}

export default CloseButton;
