"use client";

import React from "react";

const InfoCard = ({ label, value, className }) => {
    return (
        <div
            className={
                "bg-gray-100 hover:bg-gray-200 rounded-2xl flex flex-col " +
                "items-center justify-center gap-1 p-4 h-24 " +
                className
            }
        >
            <h2 className="text-4xl font-bold">{value}</h2>
            <h3 className="text-xs sm:text-sm text-center">{label}</h3>
        </div>
    );
};

export default InfoCard;
