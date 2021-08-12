import Link from "next/link"
import { useEffect, useState } from "react"
import CompleteAccountInfo from '../../../components/Modals/CompleteAccountInfo'

export default ({ data }) => {

    const [state, setState] = useState(false)
    const [model, setModel] = useState(false)
    useEffect(() => {
        window.onscroll = () => setState(false)
    }, [])

    return (
        <>
            <div className={`${state ? '' : 'sidebar'} fixed left-0 flex items-center z-10 w-64 duration-200 sm:w-full sm:h-64 sm:block sm:sticky sm:top-4 sm:translate-x-0`} style={state ? {transform: 'translateX(0px)'} : {}}>
                <ul className="flex-1 divide-y bg-white shadow-sm border rounded-md">
                    <li className="p-4 hover:bg-gray-50">
                        <Link href="/dashboard/company">
                            <a className="flex items-center text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                                Profile
                            </a>
                        </Link>
                    </li>
                    <li className="p-4 hover:bg-gray-50">
                        <Link href={`/dashboard/company/jobs/${data.userData._id}`}>
                            <a className="flex items-center text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                                Jobs
                            </a>
                        </Link>
                    </li>
                    <li className="p-4 hover:bg-gray-50">
                        {
                            data.userData.completed ? ( 
                                <Link href="/dashboard/company/new">
                                    <a className="flex items-center text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        New Job
                                    </a>
                                </Link>
                            ) : (
                                <button className="flex items-center text-gray-500 focus:outline-none"
                                    onClick={() => setModel(true)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    New Job
                                </button>
                            )
                        }
                    </li>
                    <li className="p-4 hover:bg-gray-50">
                        <Link href="/dashboard/company/applicants">
                            <a className="flex items-center text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                Applicants
                            </a>
                        </Link>
                    </li>
                </ul>
                <button className="p-1 rounded-r-md text-white bg-cyan-600 outline-none sm:hidden"
                    onClick={() => setState(!state)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {
                model ? (
                        <CompleteAccountInfo 
                            p="Please Complete your account information to be able to publish a job offer"
                            setState={setModel}
                            data={data}
                        />
                ) : ''
            }
        </>
    )
}