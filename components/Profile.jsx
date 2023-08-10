"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Profile = () => {
    const [open, setOpen] = useState(false);
    let dropRef = useRef();

    const dropdownVariants = {
        show: { opacity: 1 },
        hide: { opacity: 0 },
    };

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (!dropRef?.current?.contains(e.target)) {
                setOpen(false);
            }
        });
    });

    return (
        <div ref={dropRef}>
            <div
                className="bg-gray-500 rounded-full h-10 w-10 justify-center flex items-center cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="text-gray-100 select-none">RA</span>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className={
                            "bg-white rounded-lg shadow border-gray-200 absolute " +
                            "mt-5 right-4 top-10 sm:right-20 flex flex-col w-48 py-1 text-sm"
                        }
                        variants={dropdownVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                    >
                        <Link
                            href="/projects"
                            className="p-3 hover:bg-gray-200"
                            onClick={() => setOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/"
                            className="p-3 hover:bg-gray-200"
                            onClick={() => setOpen(false)}
                        >
                            Profile
                        </Link>
                        <Link
                            href="/"
                            className="p-3 hover:bg-gray-200"
                            onClick={() => setOpen(false)}
                        >
                            Logout
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Profile;
