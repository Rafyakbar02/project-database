import Accordion from "@/components/Accordion";
import React from "react";
import { projects } from "@/constants";
import FiltersPanel from "@/components/FiltersPanel";

function Details() {
  return (
    <div>
      <FiltersPanel />
      <div className="flex flex-col gap-4">
        {projects.map((p, i) => (
          <Accordion
            i={i + 1}
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
