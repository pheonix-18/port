import React from "react";
import { academics } from "../data";
import { experience } from "../data";
import { CodeIcon } from "@heroicons/react/solid";
export default function Academics() {
    return (
        <section id="academics" className="text-gray-400 bg-gray-900 body-font">
            <div className="container  space-y-5 px-5 py-10 mx-auto text-center lg:px-40"  >

                {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Academics
                </h1>

                <div className=" flex flex-col -m-4">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {
                            academics.map((education) => (
                                <li key={Math.random()} className="mb-10 ml-4">
                                    <div className="flex flex-row">
                                        <div>
                                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                            <p className="mb-1 text-sm font-normal leading-none text-gray-100 dark:text-gray-500">{education.timeline}</p>
                                            <h3 className="mb-1 text-bold text-white">{education.degree} - {education.university}</h3>
                                            <p className="text-base font-normal text-gray">{education.description}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p>GPA</p>
                                            <p className="font-normal w-auto h-auto rounded-full p-4 bg-green-400 text-white">{education.gpa}</p>
                                        </div>
                                    </div>
                                </li>

                            ))
                        }
                    </ol>
                </div>


                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Experience
                </h1>
                <div className=" flex flex-wrap -m-4">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {
                            experience.map((e) => (
                                <li key={Math.random()} className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <p className="mb-1 text-sm font-normal leading-none text-gray-100 dark:text-gray-500">{e.timeline}</p>
                                    <h3 className="mb-1 text-white dark:text-gray-500 font-bold">{e.title} - {e.company} - {e.location}</h3>
                                    <p className="text-base font-normal text-gray">{e.highlights}</p>
                                </li>

                            ))
                        }
                    </ol>
                </div>
            </div>
        </section>
    )
}
