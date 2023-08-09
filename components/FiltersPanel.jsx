import React from "react";
import Filter from "./Filter";
import { produk, sektor, tahapan, pemilik } from "@/constants";
import Button from "./Button";

const FiltersPanel = () => {
    return (
        <section className="p-4 flex gap-4 overflow-x-auto">
            <Filter type={produk} name={"Produk"} />
            <Filter type={sektor} name={"Sektor"} />
            <Filter type={tahapan} name={"Tahapan"} />
            <Filter type={pemilik} name={"Pemilik"} />
            <Button type="submit" label="Confirm" size="xs" />
        </section>
    );
};

export default FiltersPanel;
