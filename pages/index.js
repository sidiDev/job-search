import { useState } from 'react'
import Filter from '../components/Filter/Filter'
import JobList from '../components/JobList/JobList'
import Nav from '../components/Nav/Nav'
import UserData from '../components/userData/UserData'
import Search from '../components/Search/Search'

function Home({ data }) {

  const [state, setState] = useState(false)

  const enableScrolling = () => document.body.className = 'overflow-auto'
  
  return (
    <div>
      <header className="bg-indigo-50 pb-5">
        <Nav data={data} />
        <Search />
      </header>
      <div className="mt-12 mx-4 sm:mx-8">
        <button className="flex items-center py-2 px-4 border shadow-sm text-gray-600 rounded-md outline-none ring-indigo-600 ring-offset-2 focus:ring-2 md:hidden"
          onClick={() => {
            setState(!state);
            document.body.className = 'overflow-hidden sm:overflow-auto'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          Filter
        </button>

        <div className="mt-12 md:flex">
          <div className={`${state ? 'block' : 'hidden'} fixed z-10 left-0 bottom-0 pt-3 px-4 w-full rounded-t-3xl bg-white duration-300 sm:static sm:pt-0 sm:pb-0 sm:px-0 sm:w-auto md:block`}
            style={state ? {bottom: '0'} : {bottom: '-38em'}}
          >
            <Filter setState={setState} enableScrolling={enableScrolling} />
          </div>
          <JobList />
        </div>
      </div>
      <div className={`${state ? '' : 'hidden'} fixed top-0 w-full h-full bg-black opacity-25 sm:hidden`} onClick={() => {
        setState(false);
        enableScrolling()
        }}></div>
    </div>
  )
}

export default UserData(Home)