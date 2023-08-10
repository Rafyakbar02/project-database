import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import SVG from "./SVG";
import CloseButton from "./CloseButton";

function Offcanvas({ show, handleClose, children }) {
    const variants = {
        show: { x: 0, opacity: 1 },
        hide: { x: "-100%", opacity: 0 },
    };

    return (
        <AnimatePresence initial="false">
            {show && (
                <motion.div
                    className={
                        "w-full h-full fixed top-0 left-0 shadow-xl bg-slate-100 z-10 pt-24 md:pt-28 lg:pt-24 p-5 md:p-10 lg:p-10"
                    }
                    variants={variants}
                    initial="hide"
                    animate="show"
                    exit="hide"
                    transition={{ type: "spring", duration: 1 }}
                >
                    <div className="bg-white w-full h-full rounded-xl shadow-xl">
                        <div className="border-b-2 py-5 px-5 flex flex-row justify-between items-center gap-5">
                            <h2 className="text-xl md:text-2xl font-semibold">
                                PPP Project for Jatiluhur Water Supply System 1
                            </h2>
                            <CloseButton handleClose={handleClose} />
                        </div>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Offcanvas;
