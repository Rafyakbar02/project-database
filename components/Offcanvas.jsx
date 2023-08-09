import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

function Offcanvas({ show, handleClose }) {
    const variants = {
        show: { x: 0 },
        hide: { x: "-100%" },
    };

    return (
        <AnimatePresence initial="false">
            {show && (
                <motion.div
                    className={
                        "w-full h-full fixed top-0 left-0 shadow-xl bg-slate-100 z-10 pt-24 p-16"
                    }
                    variants={variants}
                    initial="hide"
                    animate="show"
                    exit="hide"
                    transition={{ type: "linear", duration: 0.5 }}
                >
                    <div className="bg-white w-full h-full rounded-xl shadow-xl">
                        <Button
                            type="button"
                            label="Close"
                            size="md"
                            onClick={handleClose}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Offcanvas;
