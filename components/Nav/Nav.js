import Link from 'next/link'
import { useEffect, useState } from 'react'
import NavLink from '../Links/NavLink'
import LoggedInLink from '../Links/LoggedInLink'
import cookie from 'js-cookie'
import { useRouter } from 'next/dist/client/router'

const Nav = ({ data }) => {

    const [state, setState] = useState(false)
    const router = useRouter()

    const logout = () => {
        cookie.remove('token')
        router.replace('/')
    }

    useEffect(() => {
        window.onscroll = () => setState(false)
    }, [])

    return (
        <nav>
            <div className="flex justify-between items-center pt-6 mx-4 sm:mx-8">
                <div className="flex items-center space-x-6 md:space-x-12">
                    <a href="/" className="flex items-center h-8">
                        <div className="w-14 h-14 rounded-full">
                            <img src="/logo.png" className="w-full h-full rounded-full" alt="logo" />
                        </div>
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
                            {
                                data.loggedIn ? (
                                    <button className="flex items-center text-gray-700 px-1 rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        onClick={logout}
                                    >
                                        Loggout
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                ) : ''
                            }
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