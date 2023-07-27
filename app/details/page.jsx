import Accordion from "@/components/Accordion";
import React from "react";
import { projects } from "@/constants";

function Details() {
    return (
        <div>
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
    );
}

export default Details;
