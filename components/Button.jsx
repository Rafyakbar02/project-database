import React from "react";

function Button({ type = "button", label = "Click Me", size = "xs" }) {
    return (
        <button
            type={type}
            className={
                "rounded-2xl font-semibold shadow text-white " +
                "border-2 border-transparent transition-all " +
                "active:bg-slate-100 active:text-slate-600 active:scale-105 " +
                `${
                    type === "reset"
                        ? "bg-red-600"
                        : type === "submit"
                        ? "bg-green-500"
                        : "bg-sky-500"
                } ` +
                `${
                    type === "reset"
                        ? "active:border-red-600"
                        : type === "submit"
                        ? "active:border-green-500"
                        : "active:border-sky-500"
                } ` +
                `${
                    type === "reset"
                        ? "hover:bg-red-500"
                        : type === "submit"
                        ? "hover:bg-green-400"
                        : "hover:bg-sky-400"
                } ` +
                `${
                    size === "xs"
                        ? "px-4 py-2 text-xs"
                        : size === "sm"
                        ? "px-5 py-2.5 text-sm"
                        : size === "md"
                        ? "px-6 py-3 text-md"
                        : size === "lg"
                        ? "px-8 py-3 text-lg"
                        : "px-10 py-3 text-xl"
                }`
            }
        >
            {label}
        </button>
    );
}

export default Button;
