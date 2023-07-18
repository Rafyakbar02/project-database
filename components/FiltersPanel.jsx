import React from "react";
import Filter from "./Filter";
import { produk, sektor, tahapan, pemilik } from "@/constants";

const FiltersPanel = () => {
  return (
    <section className="p-4 flex gap-4">
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
