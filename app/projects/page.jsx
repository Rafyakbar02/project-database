"use client";

import React, { useEffect, useState } from "react";
import ProjectAccordion from "./components/ProjectAccordion";
import SearchPanel from "./components/SearchPanel";
import NotFound from "./components/NotFound";
import InfoCard from "../global-components/InfoCard";
import FiltersModal from "./components/FiltersModal";
import {
  projects,
  product,
  sector,
  phase,
  pjpk,
  priority,
  formattterCompact,
} from "../../constants";

function Details() {
  const [checkList, setCheckList] = useState([
    product,
    sector,
    priority,
    phase,
    pjpk,
  ]);

  const [numOfFilters, setNumOfFilters] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const [totalInvestment, setTotalInvestment] = useState(0);
  const [totalExposure, setTotalExposure] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    filter();
  }, [searchQuery]);

  const handleCheck = (e, category, subcategory) => {
    checkList[category][subcategory].checked = e.target.checked;
    setCheckList([...checkList]);
  };

  const resetCheckList = () => {
    for (var category of checkList) {
      for (var subcategory of category) {
        subcategory.checked = false;
      }
    }
    setCheckList([...checkList]);
  };

  const findActiveFilters = () => {
    var selected = [];
    for (var category of checkList) {
      for (var subcategory of category) {
        if (subcategory.checked) {
          selected.push(subcategory.label);
        }
      }
    }
    return selected;
  };

  const filter = () => {
    var selected = findActiveFilters();
    var totalInv = 0;
    var totalExp = 0;
    const result = projects.filter((p) => {
      if (
        (selected.length == 0 ||
          selected.includes(p.product) ||
          selected.includes(p.sector) ||
          selected.includes(p.phase) ||
          selected.includes(p.priority) ||
          selected.includes(p.division)) &&
        (searchQuery === "" ||
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.division.toLowerCase().includes(searchQuery.toLowerCase()))
      ) {
        totalInv += p.totalInvestment;
        totalExp += p.totalExposure;
        return true;
      } else {
        return false;
      }
    });
    setTotalInvestment(totalInv);
    setTotalExposure(totalExp);
    setNumOfFilters(selected.length);
    setFilteredProjects(result);
  };

  return (
    <div className={"flex flex-col gap-4 mx-3 md:mx-20 my-4"}>
      <SearchPanel
        query={searchQuery}
        handleClear={() => setSearchQuery("")}
        handleQuery={(e) => {
          setSearchQuery(e.target.value);
        }}
        handleShowFiltersModal={() => setShowFiltersModal(true)}
        numOfFilters={numOfFilters}
      />
      <FiltersModal
        showModalState={showFiltersModal}
        handleClose={() => setShowFiltersModal(false)}
        checkList={checkList}
        handleCheck={handleCheck}
        resetCheckList={resetCheckList}
        submitFilter={() => filter()}
      />
      {filteredProjects.length > 0 ? null : <NotFound query={searchQuery} />}
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex flex-col flex-1 gap-4 lg:pe-3 h-[75vh] lg:overflow-y-scroll pb-10">
          {filteredProjects
            .sort((a, b) => (a.title > b.title ? 1 : -1))
            .map((p, i) => (
              <ProjectAccordion
                key={p.id}
                i={i + 1}
                id={p.id}
                title={p.title}
                division={p.division}
                totalInvestment={p.totalInvestment}
                signingDate={p.signingDate}
                totalExposure={p.totalExposure}
                effectiveDate={p.effectiveDate}
              />
            ))}
        </div>
        {filteredProjects.length > 0 ? (
          <div
            className={
              "flex order-first overflow-x-auto sm:grid sm:grid-cols-3 lg:flex lg:order-last lg:flex-col gap-3 pb-2 w-full lg:w-fit lg:justify-start"
            }
          >
            <InfoCard
              value={filteredProjects.length}
              label={`Total Project${filteredProjects.length > 1 ? "s" : ""}`}
              className={"w-48 sm:w-full lg:w-48 flex-shrink-0"}
            />
            <InfoCard
              value={formattterCompact.format(totalInvestment)}
              label={"Total Investment"}
              className={"w-48 sm:w-full lg:w-48 flex-shrink-0"}
            />
            <InfoCard
              value={formattterCompact.format(totalExposure)}
              label={"Total Exposure"}
              className={"w-48 sm:w-full lg:w-48 flex-shrink-0"}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Details;
