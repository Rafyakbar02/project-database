import React from "react";
import Filter from "./Filter";
import { product, sector, phase, pjkp } from "@/constants";

const FiltersPanel = () => {
  return (
    <section className="py-4 px-4 md:px-0 flex gap-4 overflow-x-auto md:mx-20">
      <Filter type={product} name={"Product"} />
      <Filter type={sector} name={"Sector"} />
      <Filter type={phase} name={"Phase"} />
      <Filter type={pjkp} name={"PJPK"} />
      <button
        type="submit"
        className="bg-green-400 rounded-2xl px-4 py-2.5 text-xs font-semibold shadow text-white"
      >
        Confirm
      </button>
    </section>
  );
};

export default FiltersPanel;
