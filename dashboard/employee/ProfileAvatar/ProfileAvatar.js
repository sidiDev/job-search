import axios from "axios"
import api from '../../../api/api'
import LoadingAlert from '../../../components/Alerts/LoadingAlert'
import { useState } from "react"

export default ({ data }) => {

    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState('')
    const [avatar, setAvatar] = useState('')
    const [avatarUrl, setAvatarUrl] = useState(data.avatar)

    const changeAvatar = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setAvatar(reader.result)
        })
        if (file) {
            reader.readAsDataURL(file)
            setFile(file)
        }
    }

    const cancel = () => {
        setFile('')
        setAvatar('')
    }

    // Change profile avatar
    const submit = () => {

        if (file) {

            setLoading(true)
    
            const formData = new FormData()
            formData.append('file', file)
            formData.append('_id', data._id)
            
            axios.post(`${api}/api/employee/profile/avatar`, formData, { headers: {'content-type': 'multipart/form-data'} }).then(res => {
                if (res.data.url) {
                    setAvatarUrl(res.data.url)
                    setFile('')
                    setAvatar('')
                    setLoading(false)
                }
            })
        }
    }

    return (
        <div className="relative mt-5 sm:mt-0">
            <div className="relative w-24 h-24 m-auto rounded-full border shadow-sm">
                <img src={avatar || avatarUrl} className="w-full h-full rounded-full" />
                <label for="file" className="absolute bottom-0 right-0 h-7 w-7 cursor-pointer text-white bg-cyan-600 flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>
                </label>
                <input type="file" accept="image/*" id="file" className="hidden" 
                    onChange={changeAvatar}
                />
            </div>
            {
                avatar ? (
                    <div className="mt-5 block text-center space-x-2">
                        <button className="px-4 py-1.5 rounded-md bg-cyan-600 text-white m-auto outline-none shadow-md ring-cyan-600 ring-offset-2 focus:ring-2"
                            onClick={submit}
                        >
                            Update
                        </button>
                        <button type="button" className="px-4 py-1.5 outline-none rounded-md text-gray-500 ring-gray-400 focus:ring-1"
                            onClick={cancel}
                        >
                            Cancel
                        </button>
                    </div>
                ) : ''
            }
            {
                loading ? (
                    <LoadingAlert
                        p="Uploading image"
                        className="fixed bg-white z-10"
                    />
                ) : ''
            }
        </div>
    )
}