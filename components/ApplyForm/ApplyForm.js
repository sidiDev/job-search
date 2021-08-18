import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useRef, useState } from "react";
import api from '../../api/api'

export default ({ data }) => {

    const router = useRouter()
    const applyRef = useRef()
    const { id } = router.query

    const [loading, setLoading] = useState(false)
    const [state, setState] = useState(false)
    const [fetchDataLoading, setFetchDataLoading] = useState(true)

    const [companyId, setCompanyId] = useState('')

    const [file, setFile] = useState()
    const [fileName, setFileName] = useState('')
    const [email, setEmail] = useState('')
    const [about, setAbout] = useState('')

    const [fileAlert, setFileAlert] = useState('')
    const [emailAlert, setEmailAlert] = useState('')
    const [aboutAlert, setAboutAlert] = useState('')
    
    useEffect(() => {
        axios.get(`${api}/api/employee/apply/${id}`).then(res => {
            if (res.data.state) {
                setCompanyId(res.data.companyId)
                setFetchDataLoading(false)
            } else if (!res.data.state) {
                router.push('/')
            }
        })
    }, [])

    const uploadFile = (e) => {
        const file = e.target.files
        setFile(file[0])
        setFileName(file[0].name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFileAlert('')
        setEmailAlert('')
        setAboutAlert('')

        if (!file) setFileAlert('Please upload a file')
        else if (!email) setEmailAlert('Please Enter your email')
        else if (!about) setAboutAlert('This field should not be empty')
        else {
            setLoading(true)
            const formaDta = new FormData()
            formaDta.append('file', file)
            formaDta.append('email', email)
            formaDta.append('about', about)
            formaDta.append('jobId', id)
            formaDta.append('companyId', companyId)
            formaDta.append('applicantId', data._id)

            axios.post(`${api}/api/employee/apply`, formaDta).then(res => {
                setLoading(false)

                if (res.data.submited) {
                    setState(true)
                    applyRef.current.scrollIntoView({behavior: 'smooth'})
                    setFile('')
                    setFileName('')
                    setEmail('')
                    setAbout('')

                    setTimeout(() => {
                        setState(false)
                    }, 3000)
                }
            })
        }
    }

    return (
        <div className="mt-12 mb-4 mx-4 sm:mx-auto max-w-lg">
            {
                fetchDataLoading ? (
                    <svg className="animate-spin mt-12 mx-auto h-16 w-16 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    <>
                        {
                            state ? (
                                <div ref={applyRef} className="flex items-center text-indigo-600 bg-indigo-100 rounded-md p-2 my-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <p className="p-4 font-medium">
                                        The job has been successfuly applied for 
                                    </p>
                                </div>
                            ) : ''
                        }
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="text-center w-full border-2 border-dashed rounded-md py-12 px-4">
                                    <label for="file">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 m-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                        </svg>
                                        <span className="text-cyan-500">Click here to upload file</span>
                                        {
                                            fileName ? (
                                                <span className="flex justify-center py-3 text-gray-800 break-all">
                                                    {fileName}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </span>
                                            ) : ''
                                        }
                                        <span className="block mt-1 text-xs text-gray-400">PDF, DOCX, DOC, TXT</span>
                                    </label>
                                    <input type="file" id="file" accept=".doc, .docx, .pdf, .txt" className="hidden"
                                        onChange={uploadFile}
                                    />
                                </div>
                                <span className="text-xs text-red-600">{fileAlert}</span>
                                <div className="mt-4">
                                    <label className="text-gray-500">Email</label>
                                    <input type="email" value={email} placeholder="Enter your email" className="mt-1 w-full p-2 border outline-none rounded-md focus:border-cyan-500" 
                                        onInput={(e) => setEmail(e.target.value)}
                                    />
                                    <span className="text-xs text-red-600">{emailAlert}</span>
                                </div>
                                <div className="mt-4">
                                    <label className="text-gray-500">
                                        About you
                                    </label>
                                    <textarea value={about} className="w-full h-48 mt-1 border rounded-md outline-none resize-none focus:border-cyan-500" onInput={(e) => setAbout(e.target.value)}></textarea>
                                    <span className="block my-2 text-xs text-red-600">{aboutAlert}</span>
                                </div>
                            </div>
                            <button className="flex items-center justify-center bg-cyan-500 text-white rounded-md w-full p-2 outline-none ring-cyan-500 ring-offset-2 focus:ring-2">
                            {
                                loading ? (
                                <svg className="animate-spin mx-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                ) : ''
                            }
                                Apply
                            </button>
                        </form>

                    </>
                )
            }
        </div>
    )
}