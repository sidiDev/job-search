import { useEffect, useRef, useState } from "react"

export default ({ setSalary, defaultValue }) => {

    const rangeRef = useRef()
    const inputRef = useRef()
    const [salary, setSalaryValue] = useState(0)

    const onInput = (e) => {
        setSalaryValue(Math.ceil(e.target.value * 2.5))
        rangeRef.current.style = `width: ${e.target.value}%; background: #06b6d4`
        setSalary(Math.ceil(e.target.value * 2.5))
    }

    useEffect(() => {
        if (defaultValue) {
            rangeRef.current.style = `width: ${+defaultValue / 2.5}%; background: #06b6d4`
            inputRef.current.value = +defaultValue / 2.5
        }
    }, [])

    return (
        <div className="salary-range-container">
            <span className="text-gray-700 text-lg font-medium">Salary range</span>
            <span className="ml-2 font-semibold text-lg">${defaultValue ? defaultValue : salary}K</span>
            <div className="salary-range mt-3 w-full h-1.5 border relative rounded-full sm:w-64">
                <span ref={rangeRef} className="block h-full rounded-full absolute top-0 left-0 z-10 pointer-events-none"></span>
                <input type="range" ref={inputRef} defaultValue="0" className="absolute w-full h-full bg-gray-200 appearance-none outline-none cursor-pointer" 
                    onInput={onInput}
                />
            </div>
        </div>
    )
}