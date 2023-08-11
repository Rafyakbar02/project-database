"use client";
import React, { useState } from "react";
import Button from "../../global-components/Button";
import { motion, AnimatePresence } from "framer-motion";
import SVG from "../../global-components/SVG";
import Link from "next/link";
import { formatToIDR } from "../../../constants";

const Segment = ({ title, content }) => {
    return (
        <div className="p-3">
            <p className="font-light text-xs md:text-sm">{title}</p>
            <p className="font-normal text-sm md:text-base">{content}</p>
        </div>
    );
};

const ProjectAccordion = ({
    i,
    id,
    title,
    division,
    totalInvestment,
    signingDate,
    totalExposure,
    effectiveDate,
}) => {
    const [open, setOpen] = useState(false);

    const collapsedDivVariants = {
        show: { y: -10, opacity: 1 },
        hide: { y: -100, opacity: 0 },
    };

    return (
        <div className={"z-10"} key={id}>
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
                <div className={"col-span-10 ps-4 pe-4 md:ps-0"}>
                    <p className="font-semibold">{title}</p>
                    <p className="font-light">{division}</p>
                </div>
                <div className={"col-span-1 flex justify-center items-center"}>
                    {open ? (
                        <SVG icon="chevronUp" className={"h-6"} />
                    ) : (
                        <SVG icon="chevronDown" className={"h-6"} />
                    )}
                </div>
            </div>
            <AnimatePresence initial="false">
                {open && (
                    <motion.div
                        variants={collapsedDivVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        transition={{
                            type: "tween",
                        }}
                        style={{ originY: 0 }}
                        className={
                            "rounded-lg ps-10 py-3 " +
                            "md:grid md:grid-cols-12 md:p-5 " +
                            "bg-slate-50 -z-10 relative"
                        }
                    >
                        <div className={"col-span-1"}></div>
                        <div className={"col-span-5"}>
                            <Segment
                                title="Total Investment"
                                content={formatToIDR(totalInvestment)}
                            />
                            <Segment
                                title="Signing Date"
                                content={signingDate}
                            />
                        </div>
                        <div className={"col-span-6 lg:col-span-4"}>
                            <Segment
                                title="Total Exposure"
                                content={formatToIDR(totalExposure)}
                            />
                            <Segment
                                title="Tanggal Efektif Penjaminan"
                                content={effectiveDate}
                            />
                        </div>
                        <div className="col-span-1 lg:hidden"></div>
                        <div
                            className={
                                "col-span-11 lg:col-span-2 p-3 h-full flex items-center z-20"
                            }
                        >
                            <Link href={`/projects/${id}`}>
                                <Button
                                    type="button"
                                    label="View Project"
                                    size="sm"
                                />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectAccordion;
