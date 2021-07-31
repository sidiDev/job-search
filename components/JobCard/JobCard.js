import Link from "next/link"

export default () => {
    return (
        <li className="shadow-md p-3 rounded-md border duration-300 hover:shadow-none hover:border-indigo-600">
            <Link href="/product">
                <a className="flex space-x-4">
                    <div className="w-22 h-22">
                        <div className="w-20 h-20">
                            <img src="/logo.png" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="flex-1 items-center justify-between lg:flex">
                        <div className="lg:w-8/12">
                            <div>
                                <span className="text-xl font-semibold">GoogleInc.</span>
                            </div>
                            <div>
                                <p className="text-gray-500 mt-1 break-words">
                                    product manager- Operating systems (Facebook Reality labs)
                                </p>
                            </div>
                            <div className="flex items-center space-x-2 mt-1 text-gray-500 text-sm sm:text-base">
                                <span className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                    </svg>
                                    Paris
                                </span>
                                <span className="text-4xl">&#8729;</span>
                                <span>
                                    Full-time
                                </span>
                            </div>
                        </div>
                        <div className="items-center text-gray-500 space-y-1 sm:space-y-0 sm:flex sm:space-x-2 lg:text-base lg:space-y-1 lg:block lg:space-x-0">
                            <span className="font-semibold text-gray-900">$100K<span className="text-sm font-normal"> / year</span></span>
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                </svg>
                                3 days ago
                            </span>
                        </div>
                    </div>
                </a>
            </Link>
        </li>
    )
}