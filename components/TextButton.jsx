import React from "react";

function TextButton({ label = "Click Me", onClick = undefined }) {
    return (
        <button
            className={
                "cursor-pointer underline font-medium " +
                "hover:bg-gray-200 py-2 px-4 rounded-xl"
            }
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default TextButton;
