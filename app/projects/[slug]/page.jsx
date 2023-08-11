import React from "react";
import { projects } from "@/constants";
import Link from "next/link";
import TextButton from "../../global-components/TextButton";

function Details({ params }) {
    const id = params.slug;
    const data = projects.find((p) => p.id === id);

    return (
        <div className="flex flex-col items-center w-full pb-20">
            <div className="w-full flex flex-start py-3 md:px-14 lg:w-5/6">
                <Link href={"/projects"}>
                    <TextButton label="Back to projects" />
                </Link>
            </div>
            <div className="flex flex-col gap-20 lg:gap-0 w-full md:px-14 lg:grid lg:grid-cols-2 lg:w-5/6">
                <div className="flex flex-col">
                    {/* <img
                        className="w-full object-cover"
                        src="http://ptpii.co.id/cfind/source/thumb/images/cover_w511_h420_patimban1.jpg"
                        alt="Tol"
                    /> */}

                    <div
                        className={
                            "bg-sky-600 text-center py-5 px-8 " +
                            "text-white text-lg flex flex-col mb-5"
                        }
                    >
                        <h2
                            className={
                                "text-2xl lg:text-3xl font-semibold " +
                                "drop-shadow-lg"
                            }
                        >
                            {data.title}
                        </h2>
                    </div>
                    <div className="grid divide-y-2 divide-slate-100/50 px-10 text-md md:text-lg lg:text-md">
                        <div className="grid grid-cols-2 py-3">
                            <h3 className="text-right font-semibold me-3">
                                Signing Project
                            </h3>
                            <h3 className="text-left ms-3">20 Sep 2020</h3>
                        </div>
                        <div className="grid grid-cols-2 py-3">
                            <h3 className="text-right font-semibold me-3">
                                Project Value (IDR)
                            </h3>
                            <h3 className="text-left ms-3">100 Billion</h3>
                        </div>
                        <div className="grid grid-cols-2 py-3">
                            <h3 className="text-right font-semibold me-3">
                                PJKP
                            </h3>
                            <h3 className="text-left ms-3">
                                Madiun Regency Government
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 py-3">
                            <h3 className="text-right font-semibold me-3">
                                Business Entity
                            </h3>
                            <h3 className="text-left ms-3">
                                PT Tri Tunggal Madiun Terang
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 py-3">
                            <h3 className="text-right font-semibold me-3">
                                Characteristics
                            </h3>
                            <h3 className="text-left ms-3">
                                7,400 points along 299.7 km of arterial roads
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 py-3">
                            <h3 className="text-right font-semibold me-3">
                                Duration Of Guarantee
                            </h3>
                            <h3 className="text-left ms-3">10 Years</h3>
                        </div>
                        <div className="grid grid-cols-2 py-3">
                            <h3 className="text-right font-semibold me-3">
                                Location
                            </h3>
                            <h3 className="text-left ms-3">Madiun</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full flex flex-col gap-5 leading-relaxed px-10 ">
                        <h4 className="text-lg uppercase text-teal-600">
                            Energy Conservation
                        </h4>
                        <p>
                            The APJ Project in Madiun Regency (the “Project”) is
                            a road lighting infrastructure development carried
                            out under the Public-Private Partnership (“PPP”)
                            scheme. The scope of the Project includes new
                            construction (without retrofit), operation, and
                            maintenance of 7,400 points on a 299.7 Km road with
                            a National Road (arterial) coverage of 70.4 km; Main
                            Regency Road (local) 221.7 Km; and Urban Roads
                            (neighborhood) 7.5 km. The investment value of the
                            Project is Rp 100,650,782,338 with a construction
                            period of 9 months and a cooperation period of up to
                            10 years from the date of commercial operation.
                        </p>
                        <p>
                            This project demonstrates the commitment of PT PII
                            in supporting the acceleration of infrastructure
                            development in Indonesia for various project scales.
                            We hope that this will increase the number of other
                            infrastructure projects to be implemented under the
                            PPP scheme. In addition, our support for this
                            project is also a commitment to support projects
                            with energy saving benefits in order to support
                            green infrastructure, and are able to have a
                            significant impact on the community, especially in
                            Madiun Regency, East Java. We appreciate the efforts
                            of Madiun Regency to implement alternative financing
                            through PPPs so that it succeeded in becoming the
                            first Regency to implement a PPP with the Regent as
                            the PJPK.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
