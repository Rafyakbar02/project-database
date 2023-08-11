import { motion, AnimatePresence } from "framer-motion";
import CloseButton from "./CloseButton";

const Modal = ({
    title = "Modal",
    showModalState,
    handleClose,
    modalContent,
    actionBarContent,
}) => {

    const modalVariants = {
        show: { opacity: 1 },
        hide: { opacity: 0 },
    };

    return (
        <AnimatePresence>
            {showModalState && (
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
                            "bg-white h-2/3 md:h-5/6 w-5/6 sm:w-4/5 sm:max-w-3xl " +
                            "rounded-3xl flex flex-col"
                        }
                    >
                        <div
                            className={
                                "flex justify-between items-center py-4 px-6"
                            }
                        >
                            <h2 className="text-2xl font-semibold">{title}</h2>
                            <CloseButton handleClose={handleClose} />
                        </div>
                        <hr className="h-px w-full bg-gray-200"></hr>
                        <div className="h-full overflow-y-auto">
                            {modalContent}
                        </div>
                        <hr className="h-px w-full bg-gray-200"></hr>
                        <div
                            className={
                                "flex justify-between py-4 px-6 items-center"
                            }
                        >
                            {actionBarContent}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
