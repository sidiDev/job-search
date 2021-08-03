import { useState } from "react";

export default () => {

    const [file, setFile] = useState()
    const [fileName, setFileName] = useState('')
    const [email, setEmail] = useState('')
    const [about, setAbout] = useState('')
    

    const uploadFile = (e) => {
        const file = e.target.files
        setFile(file)
        setFileName(file[0].name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.table({email, about})
    }

    return (
        <div className="mt-12 mb-4 mx-4 sm:mx-auto max-w-lg">
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="text-center w-full border-2 border-dashed rounded-md py-12 px-4">
                        <label for="file">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 m-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                            <span className="text-cyan-500">Upload file</span>
                            {
                                fileName ? (
                                    <span className="flex justify-center py-3 text-gray-800">
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
                    <div className="mt-4">
                        <label className="text-gray-500">Email</label>
                        <input type="email" placeholder="Enter your email" className="mt-1 w-full p-2 border outline-none rounded-md focus:border-cyan-500" 
                            onInput={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <label className="text-gray-500">
                            About you
                        </label>
                        <textarea className="w-full h-48 mt-1 border rounded-md outline-none resize-none focus:border-cyan-500" onInput={(e) => setAbout(e.target.value)}></textarea>
                    </div>
                </div>
                <button className="bg-cyan-500 text-white rounded-md w-full p-2 outline-none ring-cyan-500 ring-offset-2 focus:ring-2">
                    Apply
                </button>
            </form>
        </div>
    )
}