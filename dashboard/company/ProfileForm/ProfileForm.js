import axios from "axios"
import { useRef, useState } from "react"
import Input from "../../../components/Input/Input"
import dataJson from '../../../json/data.json'
import api from '../../../api/api'
import ProfileUpdatedAlert from "../../../components/Alerts/ProfileUpdatedAlert"
import { useRouter } from "next/dist/client/router"

export default ({ data }) => {

    const updatedMsgRef = useRef()

    const router = useRouter()

    const [state, setState] = useState(false)
    const [loading, setLoading] = useState(false)
    const [updated, setUpdated] = useState(false)

    const [firstName, setFirstName] = useState(data.companyName)
    const [email, setEmail] = useState(data.email)
    const [number, setEmployessNum] = useState(data.members)
    const [location, setLocation] = useState(data.location)
    const [about, setAbout] = useState(data.about)
    const [password, setPassWord] = useState(data.password)

    const [firstNameAlert, setFirstNameAlert] = useState('')
    const [emailAlert, setEmailAlert] = useState('')
    const [EmployeesNumAlert, setEmployeesNumAlert] = useState('')
    const [locationAlert, setLocationAlert] = useState('')
    const [aboutAlert, setAboutAlert] = useState('')
    const [passwordAlert, setPasswordAlert] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setFirstNameAlert('')
        setEmailAlert('')
        setEmployeesNumAlert('')
        setLocationAlert('')
        setAboutAlert('')
        setPasswordAlert('')

        if (!firstName) setFirstNameAlert('Please enter your first name')
        else if (!email) setEmailAlert('Please Enter your email')
        else if (!number) setEmployeesNumAlert('Please Enter your contact number')
        else if (!location) setLocationAlert('Please select company location')
        else if (!about) setAboutAlert('This field should not be empty')
        else if (!password || password.length < 8) setPasswordAlert('Password should be not empty and not less than 8 chars')
        else {

          setLoading(true)
          
          const dataObj = { companyName: firstName, email, members: number, location, about, password, _id: data._id  }

          axios.patch(`${api}/api/company/profile`, dataObj).then(res => {
            if (res.data.updated) {
              setUpdated(true)
              updatedMsgRef.current.scrollIntoView({behavior: 'smooth'})
              setLoading(false)
              router.push('/dashboard/company')

            }
          })
        }
    }

    return (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              {
                updated ? (
                  <ProfileUpdatedAlert updatedMsgRef={updatedMsgRef} setUpdated={setUpdated} />
                ) : ''
              }
              <div>
                <Input className="" type="text" defaultValue={firstName} labelName="Company name" onInput={(e) => setFirstName(e.target.value)} />
                <span className="text-xs text-red-600 my-2 block">{firstNameAlert}</span>
              </div>
            <div>
                <Input className="" type="email" defaultValue={email} labelName="Email" onInput={(e) => setEmail(e.target.value)} />
                <span className="text-xs text-red-600 my-2 block">{emailAlert}</span>
            </div>
            <div>
                <Input className="" type="number" defaultValue={number} labelName="Number of employees" onInput={(e) => setEmployessNum(e.target.value)} />
                <span className="text-xs text-red-600 my-2 block">{EmployeesNumAlert}</span>
            </div>
            <div className="flex flex-1 items-center border rounded-md relative text-gray-500 p-2 pl-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-0 pointer-events-none ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <select className="bg-transparent appearance-none text-gray-500 outline-none border-0 w-full"
                  onChange={(e) => setLocation(e.target.value)}
              >
                  <option selected={location == '' ? true : false} disabled="true">Select Location</option>
                  {
                    dataJson.locations.sort().map(( items, idx ) => {
                        return <option selected={location == items ? true : false} value={items} name={items} key={idx}>{ items }</option>
                    })
                  }
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-0 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
            <span className="text-xs text-red-600 my-2 block">{locationAlert}</span>
            <div className="mt-4">
                <label className="font-medium text-gray-600">
                    About the company
                </label>
                <textarea defaultValue={ about } className="w-full h-40 mt-1 p-2 border rounded-md outline-none resize-none focus:border-cyan-500" onInput={(e) => setAbout(e.target.value)}></textarea>
                <span className="block my-2 text-xs text-red-600">{aboutAlert}</span>
            </div>
            <div className="space-y-1">
                  <label className="text-gray-600 font-medium">Password</label>
                <div className="flex items-center border rounded-md border-gray-200">
                  <input defaultValue={ password } className="block border-0 rounded-md px-5 py-2 leading-6 w-full outline-none focus:ring focus:ring-cyan-500 focus:ring-opacity-50" type={state ? 'text' : 'password'} placeholder="Enter your password" 
                    onInput={(e) => setPassWord(e.target.value)}
                 />
                  <button type="button" className="h-full py-2 rounded-md outline-none ring-cyan-500 focus:ring focus:ring-opacity-50"
                    onClick={() => setState(!state)}
                  >
                    {
                      state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
                          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      )
                    }
                  </button>
                </div>
                <span className="text-xs text-red-600 my-2 block">{passwordAlert}</span>
            </div>
            <button className="flex items-center justify-center w-full py-2 rounded-md bg-cyan-600 text-white m-auto outline-none shadow-md ring-cyan-600 ring-offset-2 focus:ring-2">
              {
                loading ? (
                  <svg className="animate-spin mx-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : ''
              }
              Update
            </button>
        </form>
    )
}