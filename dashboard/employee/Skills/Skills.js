import axios from "axios"
import { useEffect, useState } from "react"
import api from "../../../api/api"
import SkillsForm from "./SkillsForm"

export default ({ data }) => {

    const [skills, setSkills] = useState([])
    const [newSkills, setNewSkill] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [state, setState] = useState(false)
    const [updated, setUpdated] = useState(false)
    
    const addKill = () => {
        inputValue ? setNewSkill([...newSkills, inputValue]) : ''
        setInputValue('')
    }

    // Remove skill from client side
    const rmSkillFromCs = (idx) => {

        const rmSkill = newSkills.filter(( skill, index ) => {
            return index != idx
        })

        setNewSkill(rmSkill)
    }

    // Remove skill from Database
    const rmSkillFromDb = (idx) => {

        
        axios.delete(`${api}/api/employee/skills/delete`, { idx }).then(res => {
            const rmSkill = skills.filter(( skill, index ) => {
                return index != idx
            })
    
            setSkills(rmSkill)

            if (res.data.deleted) {
                
            }
        })
    }

    const update = () => {
        if (newSkills.length > 0) {

            setState(true)
            const dataObj = { userId: data._id, skills: newSkills }

            axios.post(`${api}/api/employee/skills/new`, dataObj).then(res => {
                if (res.data.updated) {
                    setNewSkill([])
                    setState(false)
                    setUpdated(!updated)
                }
            })
        }
    }

    useEffect(() => {

        const dataObj = { _id:  data._id}
        axios.post(`${api}/api/employee/skills`, dataObj).then(res => {
            if (res.data.skills) {
                console.log(res.data);
                setSkills(res.data.skills)
            }
        })
    }, [updated])

    return (
        <div className="col-span-2 max-w-lg">
            <h1 className="font-semibold text-gray-800 text-2xl">Skills</h1>
            <div className="flex flex-wrap mt-4">
            {
                    skills.map(( items, idx ) => {
                        return (
                            <span key={ idx } className="inline-flex mr-3 mt-3 px-3 py-2 rounded bg-gray-100 text-gray-700">
                                { items }
                                <button className="text-gray-500 mx-1"
                                    onClick={() => rmSkillFromDb(idx)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </span>
                        )
                    })
                }
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
            <SkillsForm 
                addKill={ addKill }
                update={ update }
                onInput={ setInputValue }
                skills={ newSkills }
                inputValue={ inputValue }
                state={state}
            />
        </div>
    )
}