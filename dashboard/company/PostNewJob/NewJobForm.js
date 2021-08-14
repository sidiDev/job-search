import Input from '../../../components/Input/Input'
import SalaryRange from '../../../components/Filter/SalaryRange'
import JobType from '../../../components/Filter/JobType'
import ExpLevel from '../../../components/Filter/ExpLevel'
import data from '../../../json/data.json'

export default ({ states }) => {
    
    const { 
            jobType, expLevel, setLocation, setJobType, setSalary, setExpLevel, setJobTitle,
            jobTitleAlert, locationAlert, jobTypeAlert, salaryAlert, expLevelAlert
        } = states

    return (
        <div className="space-y-3">
            <Input labelName="Job title" onInput={(e) => setJobTitle(e.target.value)} />
            <span className="block text-xs text-red-600">{jobTitleAlert}</span>
            <div className="flex flex-1 items-center border rounded-md relative text-gray-500 p-2 pl-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-0 pointer-events-none ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <select className="bg-transparent appearance-none text-gray-500 outline-none border-0 w-full"
                  onChange={(e) => setLocation(e.target.value)}
              >
                  <option selected="true" disabled="true">Select Location</option>
                  {
                    data.locations.sort().map(( items, idx ) => {
                        return <option value={items} name={items} key={idx}>{ items }</option>
                    })
                  }
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-0 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
            <span className="block text-xs text-red-600">{locationAlert}</span>
            <div>
                <SalaryRange setSalary={setSalary} />
                <span className="block text-xs text-red-600">{salaryAlert}</span>
            </div>
            <div>
                <JobType data={data} setJobType={setJobType} jobType={jobType} />
                <span className="block text-xs text-red-600">{jobTypeAlert}</span>
            </div>
            <div>
                <ExpLevel data={data} defaultValue={expLevel} setExpLevel={setExpLevel} />
                <span className="block text-xs text-red-600">{expLevelAlert}</span>
            </div>
        </div>
    )
}