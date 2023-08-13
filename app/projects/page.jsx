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
    pjkp,
    priority,
    formattterCompact,
} from "../../constants";

function Details() {
    const [checkList, setCheckList] = useState([
        product,
        sector,
        priority,
        phase,
        pjkp,
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
                    p.division
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()))
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
        <div className="flex flex-row gap-5">
            <div
                className={
                    "flex flex-col gap-4 mx-6 md:mx-10 lg:me-0 my-4 mb-20 w-full"
                }
            >
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
                {filteredProjects.length > 0 ? (
                    <h5 className="mb-0 mx-4">
                        {`Showing ${filteredProjects.length} project${
                            filteredProjects.length > 1 ? "s" : ""
                        }`}
                    </h5>
                ) : (
                    <NotFound query={searchQuery} />
                )}
                <div className="flex flex-col gap-4">
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
            </div>
            <div
                className={
                    "hidden lg:flex flex-col items-center w-1/6 gap-5 px-10"
                }
            >
                <InfoCard
                    value={filteredProjects.length}
                    label={`Total Project${
                        filteredProjects.length > 1 ? "s" : ""
                    }`}
                    className={"w-52"}
                />
                <InfoCard
                    value={formattterCompact.format(totalInvestment)}
                    label={"Total Investment"}
                    className={"w-52 text-lg"}
                />
                <InfoCard
                    value={formattterCompact.format(totalExposure)}
                    label={"Total Exposure"}
                    className={"w-52"}
                />
            </div>
        </div>
    );
}

export default Details;
