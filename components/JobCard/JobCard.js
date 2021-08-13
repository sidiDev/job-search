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
                                            <div className="w-16 h-16">
                                                <img src={items.company.avatar} className="w-full h-full rounded-full" />
                                            </div>
                                        </div>
                                        <div className="flex-1 items-center justify-between lg:flex">
                                            <div className="lg:w-8/12">
                                                <div>
                                                    <span className="text-xl font-semibold">{items.company.companyName}</span>
                                                </div>
                                                <div>
                                                    <p className="text-gray-600 text-lg font-medium mt-1 break-words">
                                                        {items.jobTitle}
                                                    </p>
                                                </div>
                                                <div className="items-center space-y-1 mt-1 text-gray-500 text-sm sm:text-base sm:flex sm:space-x-2">
                                                    <span className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                        </svg>
                                                        {items.location}
                                                    </span>
                                                    <span className="text-4xl hidden sm:inline-block">&#8729;</span>
                                                    <span className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                                        </svg>
                                                        {items.jobType}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="items-center text-gray-500 space-y-1 sm:space-y-0 sm:flex sm:space-x-2 lg:text-base lg:space-y-1 lg:block lg:space-x-0">
                                                {
                                                    items.salary ? (
                                                        <span className="font-semibold text-gray-900">${items.salary}<span className="text-sm font-normal"> / year</span></span>
                                                    ) : ''
                                                }
                                                <span className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                                    </svg>
                                                    {moment(items.date).fromNow()}
                                                </span>
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