import React from "react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import TextButton from "../../../components/TextButton";

const titles = ["Product", "Sector", "Priority", "Phase", "PJKP"];

function FiltersModal({
    showModalState,
    handleClose,
    checkList,
    handleCheck,
    resetCheckList,
    submitFilter,
}) {
    const Checkbox = ({ categoryIndex, subCategory, subCategoryIndex }) => {
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

    const ModalContent = () => {
        return (
            <>
                {checkList.map((category, i) => (
                    <div className="m-8 mb-14" key={`${titles[i]}${i}`}>
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
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </>
        );
    };

    const ActionBarContent = () => {
        const handleSubmit = () => {
            submitFilter();
            handleClose();
        };

        return (
            <>
                <TextButton label="Clear All" onClick={resetCheckList} />
                <Button
                    type="submit"
                    label="Show Projects"
                    size="sm"
                    onClick={handleSubmit}
                />
            </>
        );
    };

    return (
        <Modal
            title="Filters"
            showModalState={showModalState}
            handleClose={handleClose}
            modalContent={<ModalContent />}
            actionBarContent={<ActionBarContent />}
        />
    );
}

export default FiltersModal;
