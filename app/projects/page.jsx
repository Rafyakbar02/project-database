"use client";

import ProjectAccordion from "./components/ProjectAccordion";
import SearchPanel from "./components/SearchPanel";
import NotFound from "./components/NotFound";
import React, { useState } from "react";
import { projects, product, sector, phase, pjkp, priority } from "@/constants";
import InfoCard from "../global-components/InfoCard";
import FiltersModal from "./components/FiltersModal";

const categories = [product, sector, priority, phase, pjkp];

function Details() {
    const [query, setQuery] = useState("");
    const [checkList, setCheckList] = useState(categories);
    const [showModal, setShowModal] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [numOfFilters, setNumOfFilters] = useState(0);

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    const handleCheck = (event, categoryIndex, subCategoryIndex) => {
        checkList[categoryIndex][subCategoryIndex].checked =
            event.target.checked;
        setCheckList([...checkList]);
    };

    const resetCheckList = () => {
        for (var category of checkList) {
            for (var subCategory of category) {
                subCategory.checked = false;
            }
        }
        setCheckList([...checkList]);
    };

    const handleClear = () => {
        setQuery("");
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const showResult = (value) => {
        const result = filteredProjects.filter(
            (p) =>
                p.title.toLowerCase().includes(value.toLowerCase()) ||
                p.division.toLowerCase().includes(value.toLowerCase())
        );
        return result;
    };

    const submitFilter = () => {
        var selected = groupSelected();
        if (selected.length > 0) {
            const result = projects.filter(
                (p) =>
                    selected.includes(p.product) ||
                    selected.includes(p.sector) ||
                    selected.includes(p.phase) ||
                    selected.includes(p.priority) ||
                    selected.includes(p.division)
            );
            setNumOfFilters(selected.length);
            setFilteredProjects(result);
        } else {
            setNumOfFilters(0);
            setFilteredProjects(projects);
        }
    };

    const groupSelected = () => {
        var selected = [];
        for (var category of checkList) {
            for (var subCategory of category) {
                if (subCategory.checked) {
                    selected.push(subCategory.label);
                }
            }
        }
        return selected;
    };

    return (
        <div className="flex flex-row">
            <div className="flex flex-col gap-4 mx-6 md:mx-10 lg:me-0 my-4 mb-20 w-full">
                <SearchPanel
                    query={query}
                    handleClear={handleClear}
                    handleQuery={handleQuery}
                    handleShowModal={handleShowModal}
                    numOfFilters={numOfFilters}
                />
                {showResult(query).length > 0 ? (
                    <h5 className="mb-0 md:mx-20 mx-4">{`Showing ${
                        showResult(query).length
                    } projects`}</h5>
                ) : null}
                <div className="flex flex-col gap-4">
                    {showResult(query)
                        .sort((a, b) => (a.title > b.title ? 1 : -1))
                        .map((p, i) => (
                            <ProjectAccordion
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
                {showResult(query).length == 0 ? (
                    <NotFound query={query} />
                ) : null}
            </div>
            <div
                className={
                    "hidden lg:flex flex-col items-center w-1/6 gap-5 px-10"
                }
            >
                <InfoCard number={5} type={"Total Projects"} />
                <InfoCard number={5} type={"Total Projects"} />
            </div>
            <FiltersModal
                showModalState={showModal}
                handleClose={() => setShowModal(false)}
                checkList={checkList}
                handleCheck={handleCheck}
                resetCheckList={resetCheckList}
                submitFilter={submitFilter}
            />
        </div>
    );
}

export default Details;
