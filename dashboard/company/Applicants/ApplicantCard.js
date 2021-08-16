import axios from "axios";
import { useState } from "react";
import api from "../../../api/api";
import LoadingAlert from "../../../components/Alerts/LoadingAlert";
import DangerModal from "../../../components/Modals/DangerModal";

export default ({ setState, setIdx, setApplicants, applicants }) => {

    const [applicant, setApplicant] = useState('')
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const deleteItem = () => {
        setModal(false)
        setLoading(true)
        const { _id, companyId } = applicant

        axios.post(`${api}/api/company/applicants/delete`, {_id, companyId}).then(res => {
            if (res.data.applicants) {
                setLoading(false)
                setApplicants(res.data.applicants)
                setIdx(0)
            }
        })
    }

    return (
        <>
            {
                applicants.map((items, key) => {
                    return (
                        <li key={key} className="relative p-4 shadow rounded-md duration-200 border cursor-pointer hover:border-cyan-500 hover:shadow-none"
                            onClick={() => {
                                setIdx(key);
                                setState(true)
                            }}
                        >
                            <div className="absolute -top-4 right-2 flex space-x-3">
                                <button className="flex items-center justify-center w-8 h-8 text-red-600 bg-white rounded-full shadow border outline-none focus:ring-1 ring-cyan-600 ring-offset-1"
                                    onClick={() => {
                                            setModal(true)
                                            setApplicant({_id: items._id, companyId: items.companyId})
                                        }
                                    }
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full">
                                    <img src={items.applicant.avatar} className="w-full h-full rounded-full" />
                                </div>
                                <div className="space-y-2">
                                    <span className="text-lg text-gray-800 font-semibold block">{items.applicant.username}</span>
                                    <span className="text-gray-500">{items.applicant.jobTitle}</span>
                                </div>
                            </div>
                        </li>
                    )
                })
            }

            {
                loading ? (
                    <LoadingAlert
                        p="Removing Item"
                        className="fixed top-28 left-12 z-10 bg-white"
                    />
                ) : ''
            }
            {
                modal ? (
                    <DangerModal
                        headerP="Delete the item"
                        p="Are you sure you want to delete this item ?"
                        submitP="Delete"
                        submit={deleteItem}
                        setState={setModal}
                    />
                ) : ''
            }
        </>
    )
}