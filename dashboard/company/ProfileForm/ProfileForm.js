import { useState } from "react"
import Input from "../../../components/Input/Input"
import data from '../../../json/data.json'

export default () => {

    const [state, setState] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setEmployessNum] = useState('')
    const [location, setLocation] = useState('')
    const [about, setAbout] = useState('')
    const [password, setPassWord] = useState('')

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
            console.log(true);
        }
    }

    return (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <Input className="" type="text"  labelName="Company name" onInput={(e) => setFirstName(e.target.value)} />
                <span className="text-xs text-red-600 my-2 block">{firstNameAlert}</span>
              </div>
            <div>
                <Input className="" type="email" labelName="Email" onInput={(e) => setEmail(e.target.value)} />
                <span className="text-xs text-red-600 my-2 block">{emailAlert}</span>
            </div>
            <div>
                <Input className="" type="number" labelName="Number of employees" onInput={(e) => setEmployessNum(e.target.value)} />
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
                  <option selected="true" disabled="true">Select Location</option>
                  {
                    data.locations.sort().map(( items, idx ) => {
                        return <option value={items} name={items} key={idx}>{ items }</option>
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
                <textarea className="w-full h-40 mt-1 p-2 border rounded-md outline-none resize-none focus:border-cyan-500" onInput={(e) => setAbout(e.target.value)}></textarea>
                <span className="block my-2 text-xs text-red-600">{aboutAlert}</span>
            </div>
            <div className="space-y-1">
                  <label className="text-gray-600 font-medium">Password</label>
                <div className="flex items-center border rounded-md border-gray-200">
                  <input className="block border-0 rounded-md px-5 py-2 leading-6 w-full outline-none focus:ring focus:ring-cyan-500 focus:ring-opacity-50" type={state ? 'text' : 'password'} placeholder="Enter your password" 
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
            <button className="w-full py-2 rounded-md bg-cyan-600 text-white m-auto outline-none shadow-md ring-cyan-600 ring-offset-2 focus:ring-2">
                Update
            </button>
        </form>
    )
}