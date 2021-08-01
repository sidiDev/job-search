import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import data from '../../json/data.json'

export default () => {

    const [search, setSearch] = useState('')
    const [location, setLocation] = useState('')
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()

        let { jobType = '', salary = '', expLevel = '' } = router.query
        // jobType = jobType || { jobType: '' }
        // salary = salary || { salary: '' }
        // jobType = jobType || { jobType: '' }

        if (search) {
            router.push({
                // pathname: '/search',
                query: { search, location, jobType, salary, expLevel }
            })
        }
    }

    useEffect(() => {
        console.log(router.query);
    }, [router.query])

    return (
        <div className="mt-20 bg-white p-4 rounded-md shadow-md mx-4 sm:mx-auto sm:max-w-xl md:max-w-2xl">
            <form onSubmit={handleSubmit}>
                <div className="sm:flex flex-wrap items-center">
                    <div className="flex flex-1 items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" placeholder="Job title or keyword"
                            className="bg-transparent placeholder-gray-500 focus:outline-none"
                            onInput={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-1 items-center relative text-gray-500 mt-5 pl-10 sm:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-0 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <select className="bg-transparent appearance-none text-gray-500 outline-none border-0 w-full"
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option selected="true" disabled="true">Select Location</option>
                            {
                                data.locations.map(( items, idx ) => {
                                    return <option value={items} name={items} key={idx}>{ items }</option>
                                })
                            }
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-0 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="mt-5 w-full md:w-auto md:mt-0 md:ml-4">
                        <button className="w-full text-white bg-indigo-600 p-2 px-4 rounded-md outline-none ring-indigo-600 ring-offset-2 focus:ring-2 md:px-8">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}