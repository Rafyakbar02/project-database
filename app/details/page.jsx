"use client";

import Accordion from "@/components/Accordion";
import Modal from "@/components/Modal";
import Panel from "@/components/Panel";
import NotFound from "@/components/NotFound";
import React, { useState, useEffect } from "react";
import { projects } from "@/constants";

function Details() {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleOnClose = () => setShowModal(false);
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const handleClear = () => {
    setQuery("");
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    setFilteredProjects(
      projects.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.division.toLowerCase().includes(query.toLowerCase())
      )
    );
  });

  return (
    <div>
      <div className="flex flex-col gap-4 my-4">
        <Panel
          query={query}
          handleClear={handleClear}
          handleQuery={handleQuery}
          handleShowModal={handleShowModal}
        />
        {filteredProjects
          .sort((a, b) => (a.title > b.title ? 1 : -1))
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
        {filteredProjects.length == 0 && <NotFound query={query} />}
      </div>
      <Modal showModal={showModal} onClose={handleOnClose} />
    </div>
  );
}

export default Details;
