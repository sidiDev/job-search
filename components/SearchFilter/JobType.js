import { useState } from "react"

export default ({ data, setJobType, jobType }) => {

    return (
        <div className="mt-6 pr-4">
            <span className="text-gray-700 text-lg font-medium">Job type</span>
            <div className="flex flex-wrap mt-4">
                {
                    data.jobType.map((items, idx) => {
                        return (
                            <div key={idx} className="mt-2 mr-3 text-gray-700 job-type">
                                <label for={items} className={`${jobType == items ? 'bg-cyan-600 text-white' : ''} p-2 block w-28 text-center rounded-md cursor-pointer bg-gray-200`}>{items}</label>
                                <input type="radio" value={items} name="job-type" id={items} className="hidden"
                                    onChange={(e) => setJobType(e.target.value)}
                                 />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}