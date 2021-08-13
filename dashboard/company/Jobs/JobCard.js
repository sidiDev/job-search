import axios from "axios"
import moment from "moment"
import Link from "next/link"
import { useState } from "react"
import api from "../../../api/api"
import LoadingAlert from "../../../components/Alerts/LoadingAlert"

export default ({ jobs, setState }) => {

    const [deleted, setDeleted] = useState(false)
    const [idx, setIdx] = useState(false)

    const deleteJob = (id) => {

        setDeleted(true)
        setState(true)

        axios.delete(`${api}/api/company/jobs/${id}`).then(res => {
            if (res.data.deleted) {
                setState(false)
                setDeleted(false)
            }
        })
    }

    const deleteLoading = () => {
        if (deleted) {
            return (
                <LoadingAlert 
                    p="Removing job"
                    className="fixed top-28 right-12 z-10 bg-white"
                />
            )
        }
    }

    return (
        <>
            {
                jobs.map((items, key) => {
                    return (
                        <li key={key} className="shadow-md p-3 rounded-md border duration-300 relative hover:shadow-none hover:border-cyan-600">
                            <div className="absolute -top-4 right-2 flex space-x-3">
                                <button className="flex items-center justify-center w-8 h-8 text-red-600 bg-white rounded-full shadow border outline-none focus:ring-1 ring-cyan-600 ring-offset-1"
                                    onClick={() => deleteJob(items._id)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <Link href={`/dashboard/company/job/${items._id}`}>
                                    <a className="flex items-center justify-center w-8 h-8 text-cyan-600 bg-white rounded-full shadow border outline-none focus:ring-1 ring-cyan-600 ring-offset-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <Link href={`/job/${items._id}`}>
                                <a className="flex">
                                    <div className="w-20 h-20 md:w-22 sm:h-22">
                                        <div className="w-16 h-16">
                                            <img src={items.company.avatar} className="w-full h-full rounded-full" />
                                        </div>
                                    </div>
                                    <div className="flex-1 items-center justify-between lg:flex">
                                        <div className="">
                                            <div>
                                                <span className="text-xl font-semibold">{items.company.companyName}</span>
                                            </div>
                                            <div>
                                                <p className="text-cyan-600 text-lg mt-1 break-words">
                                                    {items.jobTitle}
                                                </p>
                                            </div>
                                            <div className="items-center mt-1 text-gray-500 space-y-2 text-base lg:text-sm lg:flex lg:space-x-3 lg:space-y-0">
                                                <div>
                                                    <span className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                        </svg>
                                                        {items.location}
                                                    </span>
                                                </div>
                                                <span className="text-4xl hidden lg:block">&#8729;</span>
                                                <div>
                                                    <span className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                                        </svg>
                                                        {items.jobType}
                                                    </span>
                                                </div>
                                                {
                                                    items.salary ? (
                                                        <div>
                                                            <span>${items.salary}K<span> / year</span></span>
                                                        </div>
                                                    ) : ''
                                                }
                                                <div>
                                                    <span className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                                        </svg>
                                                        {moment(items.date).fromNow()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-gray-500 hidden lg:block">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    )
                })
            }
            { deleteLoading() }
        </>
    )
}