"use client";

import React from "react";
import { useRouter } from "next/navigation";

const InfoCard = ({ number, type }) => {
  const router = useRouter();

  return (
    <div
      className="bg-gray-100 hover:bg-gray-200 rounded-2xl flex flex-col items-center sm:items-start justify-center gap-1 p-4 h-24 min-w-fit cursor-pointer"
      onClick={() => router.push("/details")}
    >
      <h2 className="text-4xl font-bold">{number}</h2>
      <h3 className="text-xs sm:text-sm text-center">{type}</h3>
    </div>
  );
};

export default InfoCard;
