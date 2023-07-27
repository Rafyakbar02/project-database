"use client";
import React, { useState } from "react";

const Segment = ({ title, content }) => {
    return (
        <div className="p-3">
            <p className="font-light text-xs md:text-sm">{title}</p>
            <p className="font-normal text-sm md:text-base">{content}</p>
        </div>
    );
};

const Accordion = ({
    i,
    title,
    division,
    totalInvestment,
    signingDate,
    totalExposure,
    effectiveDate,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={"mx-7 md:mx-20 mt-7"}>
            <div
                className={
                    "rounded-lg grid grid-cols-12 p-5 cursor-pointer z-10 " +
                    `${i % 2 == 0 ? "bg-gray-200 " : "bg-gray-100 "}`
                }
                onClick={() => setOpen((p) => !p)}
            >
                <div className={"col-span-1 flex justify-center items-center"}>
                    {i}
                </div>
                <div className={"col-span-10 ps-5 md:ps-0"}>
                    <p className="font-semibold">{title}</p>
                    <p className="font-light">{division}</p>
                </div>
                <div className={"col-span-1 flex justify-center items-center"}>
                    {open ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                            className="h-6"
                        >
                            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                            className="h-6"
                        >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                    )}
                </div>
            </div>
            {/* {open && ( */}
            <div
                className={
                    "rounded-lg ps-10 py-3 md:grid md:grid-cols-12 md:p-5 " +
                    "-translate-y-2 -z-10 transition-all origin-top bg-slate-50 " +
                    `${
                        open
                            ? "scale-y-100 opacity-100 relative"
                            : "scale-y-0 opacity-0 absolute"
                    } `
                }
            >
                <div className={"col-span-1"}></div>
                <div className={"col-span-5"}>
                    <Segment
                        title="Total Investment"
                        content={totalInvestment}
                    />
                    <Segment title="Signing Date" content={signingDate} />
                </div>
                <div className={"col-span-5"}>
                    <Segment title="Total Exposure" content={totalExposure} />
                    <Segment
                        title="Tanggal Efektif Penjaminan"
                        content={effectiveDate}
                    />
                </div>
            </div>
            {/* )} */}
        </div>
    );
};

export default Accordion;
