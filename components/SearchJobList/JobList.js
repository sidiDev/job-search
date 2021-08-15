import axios from "axios"
import { useEffect, useState } from "react"
import api from "../../api/api"
import JobCard from "../JobCard/JobCard"
import LoadingJob from "../LoadingJob/LoadingJob"

export default ({ 
    count,
    loading,
    state,
    docsCount,
    jobs,
    increaseCount
}) => {


    return (
        <div className="flex-1 mt-5 mb-3 md:mt-0">
            {
                loading ? (
                    <ul className="space-y-4">
                        <LoadingJob />
                    </ul>
                ) : (
                    <>

                        <ul className="space-y-4">
                            {
                                !jobs ? (
                                    <div className="lg:ml-24">
                                        <p className="text-xl text-gray-500">
                                            The search did not match any jobs
                                        </p>
                                        <span className="block mt-3 text-xl text-gray-900">
                                            Tips to improve the search
                                        </span>
                                        <div className="mt-3 prose">
                                            <ul>
                                                <li>Try more general keywords</li>
                                                <li>Check your spelling</li>
                                                <li>Replace abbervisations with the entire word</li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <JobCard jobs={jobs} />
                                )
                            }
                        </ul>
                        {
                            docsCount > count ? (
                                <button className="flex items-center justify-center w-full text-white bg-cyan-600 p-2 px-4 mx-auto rounded-md outline-none ring-cyan-600 ring-offset-2 focus:ring-2 md:px-8 md:w-36 my-3"
                                    onClick={increaseCount}
                                >
                                    {
                                        state ? (
                                        <svg className="animate-spin mx-3 h-5 w-5 text-white md:mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        ) : ''
                                    }
                                    More
                                </button>
                            ) : ''
                        }
                    </>
                )
            }
        </div>
    )
}