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

    // Remove skill from client side
    const rmSkillFromCs = (idx) => {

        const rmSkill = newSkills.filter(( skill, index ) => {
            return index != idx
        })

        setNewSkill(rmSkill)

    }

    return (
        <div className="col-span-2 max-w-lg">
            <h1 className="font-semibold text-gray-800 text-2xl">Skills</h1>
            <div className="flex flex-wrap mt-4">
                <span className="inline-block mr-3 mt-3 px-3 py-2 rounded bg-gray-100 text-gray-700">
                    JavaScript
                </span>
                {
                    newSkills.map(( items, idx ) => {
                        return (
                            <span key={ idx } className="inline-flex mr-3 mt-3 px-3 py-2 rounded bg-gray-100 text-gray-700">
                                { items }
                                <button className="text-gray-500 mx-1"
                                    onClick={() => rmSkillFromCs(idx)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </span>
                        )
                    })
                }
            </div>
            <SkillsForm addKill={ addKill } onInput={ setInputValue } skills={newSkills} inputValue={ inputValue }  />
        </div>
    )
}