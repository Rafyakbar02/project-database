import { product, sector, phase, pjkp, priority } from "@/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseButton from "./CloseButton";
import Button from "./Button";

const titles = ["Product", "Sector", "Priority", "Phase", "PJKP"];
const categories = [product, sector, priority, phase, pjkp];

const Checkbox = ({
    categoryIndex,
    subCategory,
    subCategoryIndex,
    handleCheck,
}) => {
    return (
        <div className="flex gap-4 ml-4 items-center">
            <input
                type="checkbox"
                value={subCategory.label}
                id={subCategory.value}
                className="scale-125"
                onChange={(e) =>
                    handleCheck(e, categoryIndex, subCategoryIndex)
                }
                checked={subCategory.checked}
            />
            <label htmlFor={subCategory.value} className="">
                {subCategory.label}
            </label>
        </div>
    );
};

const Modal = ({
    title = "Modal",
    checkList,
    showModal,
    setShowModal,
    handleCheck,
    resetCheckList,
    submitFilter,
}) => {
    const modalVariants = {
        show: { opacity: 1 },
        hide: { opacity: 0 },
    };

    const handleSubmit = () => {
        submitFilter();
        setShowModal(false);
    };

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    className={
                        "fixed inset-0 bg-black bg-opacity-30 flex " +
                        "justify-center items-center z-50"
                    }
                    variants={modalVariants}
                    initial="hide"
                    animate="show"
                    exit="hide"
                >
                    <div
                        className={
                            "bg-white h-5/6 w-5/6 sm:w-4/5 sm:max-w-3xl " +
                            "rounded-3xl flex flex-col"
                        }
                    >
                        <div
                            className={
                                "flex justify-between items-center py-4 px-6"
                            }
                        >
                            <h2 className="text-2xl font-semibold">{title}</h2>
                            <CloseButton
                                handleClose={() => setShowModal(false)}
                            />
                        </div>
                        <hr className="h-px w-full bg-gray-200"></hr>
                        <div className="h-full overflow-y-auto">
                            {checkList.map((category, i) => (
                                <div
                                    className="m-8 mb-14"
                                    key={`${titles[i]}${i}`}
                                >
                                    <h2 className="text-2xl font-semibold mb-6">
                                        {titles[i]}
                                    </h2>
                                    <div
                                        className={
                                            "flex flex-col gap-y-8 " +
                                            "md:grid md:grid-cols-2"
                                        }
                                    >
                                        {category.map((subCategory, index) => (
                                            <Checkbox
                                                key={`${subCategory}-${index}`}
                                                categoryIndex={i}
                                                subCategory={subCategory}
                                                subCategoryIndex={index}
                                                handleCheck={handleCheck}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr className="h-px w-full bg-gray-200"></hr>
                        <div
                            className={
                                "flex justify-between py-4 px-6 items-center"
                            }
                        >
                            <button
                                className={
                                    "cursor-pointer underline font-medium " +
                                    "hover:bg-gray-200 py-2 px-4 rounded-xl"
                                }
                                onClick={resetCheckList}
                            >
                                Clear All
                            </button>
                            <Button
                                type="submit"
                                label="Show Projects"
                                size="sm"
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
