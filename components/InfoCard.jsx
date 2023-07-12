import React from "react";

const InfoCard = ({ number, type }) => {
  return (
    <div className="bg-gray-100 rounded-2xl flex flex-col items-start justify-center gap-1 p-4 h-24 min-w-fit">
      <h2 className="text-4xl font-bold">{number}</h2>
      <h3 className="text-sm">{type}</h3>
    </div>
  );
};

export default InfoCard;
