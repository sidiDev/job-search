import moment from "moment"
import Link from "next/link"

export default ({ jobs }) => {

    return (
            <>
                {
                    jobs.map((items, key) => {
                        return (
                            <li key={key} className="shadow-md p-3 rounded-md border duration-300 hover:shadow-none hover:border-cyan-600 lg:p-5">
                                <Link href={`/job/${items._id}`}>
                                    <a className="flex">
                                        <div className="w-20 h-20 md:w-22 sm:h-22">
                                            <div className="w-16 h-16 rounded-full border-2">
                                                <img src={items.company.avatar} className="w-full h-full rounded-full" />
                                            </div>
                                        </div>
                                        <div className="flex-1 items-center justify-between xl:flex">
                                            <div className="">
                                                <div>
                                                    <span className="text-xl font-semibold">{items.company.companyName}</span>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600 font-medium mt-1">
                                                        {items.jobTitle}
                                                    </p>
                                                </div>
                                                <div className="items-center space-y-2 mt-2 text-gray-500 sm:flex sm:space-x-2 sm:space-y-0 md:block md:space-y-2 md:space-x-0 lg:flex lg:space-x-2 lg:space-y-0">
                                                    <span className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                        </svg>
                                                        {items.location}
                                                    </span>
                                                    <span className="text-4xl hidden sm:inline-block md:hidden lg:inline-block">&#8729;</span>
                                                    <span className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                                        </svg>
                                                        {items.jobType}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-2 space-y-2 items-center text-gray-500 sm:space-y-0 sm:flex sm:space-x-2 md:block md:space-x-0 md:space-y-2 lg:space-x-4 lg:flex lg:space-y-0 xl:block xl:space-x-0 xl:space-y-2">
                                                {
                                                    items.salary ? (
                                                        <div className="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                                            </svg>
                                                            <span>
                                                                ${items.salary}K USD
                                                            </span>
                                                        </div>
                                                    ) : ''
                                                }
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                                    </svg>
                                                    {moment(items.date).fromNow()}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        )
                    })
                }
            </>
    )
}