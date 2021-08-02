import Link from 'next/link'
import { useEffect, useState } from 'react'

export default () => {

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
                            <li className="text-gray-700 hover:text-gray-900">
                                <Link href="/dashboard">
                                    <a>
                                        Dashboard
                                    </a>
                                </Link>
                            </li>
                            <li className="text-gray-700 hover:text-gray-900">
                                <Link exact href="/login">
                                    <a>
                                        Login
                                    </a>
                                </Link>
                            </li>
                            <li className="text-cyan-500 hover:text-cyan-700">
                                <Link exact href="/signup">
                                    <a className="flex items-center">
                                        Sign up
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}