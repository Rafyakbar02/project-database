import React from "react";
import Filter from "./Filter";
import { produk, sektor, tahapan, pemilik } from "@/constants";

const FiltersPanel = () => {
  return (
    <section className="py-4 px-4 sm:px-0 flex gap-4 overflow-x-auto md:mx-20">
      <Filter type={produk} name={"Produk"} />
      <Filter type={sektor} name={"Sektor"} />
      <Filter type={tahapan} name={"Tahapan"} />
      <Filter type={pemilik} name={"Pemilik"} />
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
