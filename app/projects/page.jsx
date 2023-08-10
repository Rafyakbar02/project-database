"use client";

import Accordion from "@/components/Accordion";
import Modal from "@/components/Modal";
import Panel from "@/components/Panel";
import NotFound from "@/components/NotFound";
import React, { useState } from "react";
import { projects, product, sector, phase, pjkp, priority } from "@/constants";
import Offcanvas from "@/components/Offcanvas";

const categories = [product, sector, priority, phase, pjkp];

function Details() {
    const [query, setQuery] = useState("");
    const [checkList, setCheckList] = useState(categories);
    const [showModal, setShowModal] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
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

    const handleViewProject = () => {
        setShowOffcanvas(true);
        if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
        }
    };

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
        document.body.style.overflow = "unset";
    };

    return (
        <div>
            <div className="flex flex-col gap-4 my-4 mb-20">
                <Panel
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
                            <Accordion
                                i={i + 1}
                                id={p.id}
                                title={p.title}
                                division={p.division}
                                totalInvestment={p.totalInvestment}
                                signingDate={p.signingDate}
                                totalExposure={p.totalExposure}
                                effectiveDate={p.effectiveDate}
                                handleViewProject={handleViewProject}
                            />
                        ))}
                </div>
                {showResult(query).length == 0 ? (
                    <NotFound query={query} />
                ) : null}
            </div>
            <Modal
                title="Filters"
                checkList={checkList}
                showModal={showModal}
                setShowModal={setShowModal}
                handleCheck={handleCheck}
                resetCheckList={resetCheckList}
                submitFilter={submitFilter}
            />
            <Offcanvas
                show={showOffcanvas}
                handleClose={handleCloseOffcanvas}
            ></Offcanvas>
        </div>
    );
}

export default Details;
