import Link from 'next/link'
import { useEffect, useState } from 'react'
import NavLink from '../Links/NavLink'
import LoggedInLink from '../Links/LoggedInLink'

const Nav = ({ data }) => {

    const [state, setState] = useState(false)

    useEffect(() => {
        window.onscroll = () => setState(false)
    }, [])

    return (
        <nav>
            <div className="flex justify-between items-center pt-6 mx-4 sm:mx-8">
                <div className="flex items-center space-x-6 md:space-x-12">
                    <a href="/" className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                        </svg>
                        <span className="font-medium text-xl"><span className="text-cyan-500">USA</span>Jobs</span>
                    </a>
                    <div className="text-gray-700 hover:text-gray-900">
                        <Link exact href="/">
                            <a>
                                Find jobs
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <button className="block text-gray-500 p-1 rounded-md outline-none focus:ring-2 focus:ring-inset-2 focus:ring-gray-500 sm:hidden"
                        onClick={() => setState(!state)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                    <div className={`${state ? 'block' : 'hidden'} absolute z-10 top-12 right-5 p-4 w-60 border rounded-md shadow-md bg-white sm:bg-transparent sm:relative sm:w-auto sm:p-0 sm:shadow-none sm:border-0 sm:top-0 sm:right-0 sm:block`}>
                        <ul className="space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                            <LoggedInLink data={data} name="Dashboard" pathname={`/dashboard/${data.userData.role}`} />
                            <NavLink data={data} name="Login" pathname="/login" />
                            <NavLink data={data} name="Sign up" pathname="/signup" />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav