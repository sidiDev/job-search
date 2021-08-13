export default () => {
    return (
        <>
        {
            [1,2,3,4,5,6,7,8].map(items => {
                return (
                    <li className="shadow-md p-5 rounded-md border duration-300 hover:shadow-none hover:border-cyan-600">
                        <div className="flex animate-pulse">
                            <div className="w-20 h-20 md:w-22 sm:h-22">
                                <div className="w-16 h-16 rounded-full bg-gray-100">
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="mt-1 w-full h-3 bg-gray-100"></div>
                                <div className="mt-3 w-10/12 h-3 bg-gray-100"></div>
                                <div className="flex mt-4 space-x-2 w-10/12 sm:w-8/12 md:w-10/12 lg:w-8/12">
                                    <div className="block w-full h-3 bg-gray-100"></div>
                                    <div className="block w-full h-3 bg-gray-100"></div>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })

        }

        </>
    )
}