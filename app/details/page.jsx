"use client";

import Accordion from "@/components/Accordion";
import React, { useState } from "react";
import { projects } from "@/constants";
import FiltersPanel from "@/components/FiltersPanel";

function Details() {
  const [query, setQuery] = useState("");

  return (
    <div>
      {/* <FiltersPanel /> */}
      <div className="flex flex-col gap-4 my-4">
        <input
          type="text"
          placeholder="Search Project or Project Owner"
          className="bg-gray-100 hover:bg-gray-200 mb-0 md:mx-20 mx-4 px-4 py-2 rounded-lg"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        {projects
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .filter(
            (p) =>
              p.title.toLowerCase().includes(query) ||
              p.division.toLowerCase().includes(query)
          )
          .map((p, i) => (
            <Accordion
              i={i + 1}
              key={p.id}
              title={p.title}
              division={p.division}
              totalInvestment={p.totalInvestment}
              signingDate={p.signingDate}
              totalExposure={p.totalExposure}
              effectiveDate={p.effectiveDate}
            />
          ))}
      </div>
    </div>
  );
}

export default Details;
