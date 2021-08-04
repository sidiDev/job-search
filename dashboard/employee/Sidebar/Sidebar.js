import Link from "next/link"
import { useEffect, useState } from "react"

export default () => {

    const [state, setState] = useState(false)

    useEffect(() => {
        window.onscroll = setState(false)
    }, [])

    return (
        <div className={`${state ? '' : 'sidebar'} fixed left-0 flex items-center z-10 w-64 duration-200 sm:w-full sm:block sm:static sm:translate-x-0`} style={state ? {transform: 'translateX(0px)'} : {}}>
            <ul className="flex-1 divide-y bg-white shadow-sm border rounded-md">
                <li className="p-4 hover:bg-gray-50">
                    <Link href="/dashboard/employee">
                        <a className="flex items-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                            Profile
                        </a>
                    </Link>
                </li>
                <li className="p-4 hover:bg-gray-50">
                    <Link href="/dashboard/employee/jobs">
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
                    <Link href="/dashboard/employee/skills">
                        <a className="flex items-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            Skills
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
    )
}