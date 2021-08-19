import Link from "next/link"

export default ({ state, setState, applicantInfo }) => {

    return (
        <>
            {
                applicantInfo.map((items, key) => {
                    return (
                        <div key={key} className={`${state ? 'fixed top-0 left-0 w-full h-full bg-white' : 'hidden sm:block'} flex-1 sm:sticky sm:top-2 sm:border sm:shadow`}>
                            <div>
                                <div className="overflow-y-auto max-h-screen pb-12 sm:max-h-full sm:pb-0">
                                    <div className="text-center space-y-4 p-4 sm:pt-3">
                                        <div className="h-8 sm:hidden">
                                            <button className="float-right text-red-600"
                                                onClick={() => setState(false)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="w-16 h-16 mx-auto rounded-full">
                                            <img src={items.applicant.avatar} className="w-full h-full rounded-full" />
                                        </div>
                                        <div className="">
                                            <span className="text-lg text-gray-800 font-semibold block">{items.applicant.username}</span>
                                            <span className="text-gray-500 block">{items.applicant.jobTitle}</span>
                                        </div>
                                        <div className="text-gray-500 text-sm mx-auto w-full leading-7 md:w-10/12">
                                            <p>
                                                {items.about}
                                            </p>
                                        </div>
                                        <div className="flex justify-center flex-wrap p-1">
                                        {
                                            items.skills  ? (
                                                items.skills.skills.map((items, key) => {
                                                    return (
                                                            <span key={key} className="inline-block mr-3 mt-3 px-3 py-2 rounded bg-gray-100 text-gray-700">
                                                                {items}
                                                            </span>
                                                    )
                                                })
                                                ) : ''
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-center py-2">
                                            <Link href={`/job/${items.job}`}>
                                                <a className="p-2 px-8 mx-auto text-white bg-cyan-500 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                                                    View job
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex justify-between absolute left-0 right-0 bottom-0 bg-white sm:static">
                                    <a href={`mailto:${items.email}`} className="flex items-center justify-center flex-1 border p-4 sm:border-b-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        Email
                                    </a>
                                    <a href={`tel:${items.applicant.number}`} className="flex items-center justify-center flex-1 border p-4 sm:border-b-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        Call
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}