export default ({ company }) => {

    console.log(company);

    return (
        <header className="pb-8 border-b-2 border-gray-100">
            <div className="max-w-xl">
                <div className="flex">
                    <div className="flex items-center space-x-3">
                        <div className="w-16 h-16">
                            <img src={company.avatar} className="w-full h-full rounded-full" />
                        </div>
                        <span className="font-medium text-xl job-brand">{company.companyName}</span>
                    </div>
                </div>
                <div className="flex mt-2 text-gray-500 space-x-3">
                    <div className="flex items-center space-x-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
                        </svg>
                        <span>{company.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        <span>{company.members} people</span>
                    </div>
                </div>
                <div className="mt-3 text-sm text-gray-500">
                    <p>
                        {company.about}
                    </p>
                </div>
            </div>
        </header>
    )
}