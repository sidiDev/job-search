import { useState } from "react"
import SkillsForm from "./SkillsForm"

export default () => {

    const [newSkills, setNewSkill] = useState([])
    const [inputValue, setInputValue] = useState('')
    
    const addKill = () => {
        inputValue ? setNewSkill([...newSkills, inputValue]) : ''
        setInputValue('')
        console.log(inputValue);
    }

    return (
        <div className="col-span-2 max-w-lg">
            <h1 className="font-semibold text-gray-800 text-2xl">Skills</h1>
            <div className="flex flex-wrap mt-4 gap-3">
                <span className="inline-block px-3 py-2 rounded bg-gray-100 text-gray-700">
                    JavaScript
                </span>
                {
                    newSkills.map(( items, idx ) => {
                        return (
                            <span key={ idx } className="inline-block px-3 py-2 rounded bg-gray-100 text-gray-700">
                                { items }
                            </span>
                        )
                    })
                }
            </div>
            <SkillsForm addKill={ addKill } onInput={ setInputValue } inputValue={ inputValue }  />
        </div>
    )
}