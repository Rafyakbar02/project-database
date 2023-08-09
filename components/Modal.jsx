import { product, sector, phase, pjkp, priority } from "@/constants";
import { useState } from "react";

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
    const handleSubmit = () => {
        submitFilter();
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                    <div className="bg-white h-5/6 w-5/6 sm:w-4/5 sm:max-w-3xl rounded-3xl flex flex-col">
                        <div className="flex justify-between items-center py-4 px-6">
                            <h2 className="text-2xl font-semibold">{title}</h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer hover:bg-gray-200 rounded-full p-1"
                                viewBox="0 0 512 512"
                                height="35px"
                                onClick={() => setShowModal(false)}
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                    d="M368 368L144 144M368 144L144 368"
                                />
                            </svg>
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
                                    <div className="flex flex-col md:grid gap-y-8 md:grid-cols-2">
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
                        <div className="flex justify-between py-4 px-6 items-center">
                            <button
                                className="cursor-pointer underline font-medium hover:bg-gray-200 py-2 px-4 rounded-xl"
                                onClick={resetCheckList}
                            >
                                Clear All
                            </button>
                            <button
                                className="bg-green-500 hover:bg-green-600  py-2 px-4 text-white font-semibold rounded-xl"
                                onClick={handleSubmit}
                            >
                                {`Show Projects`}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
