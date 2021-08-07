import axios from "axios"
import { useRouter } from "next/dist/client/router"
import { useRef, useState } from "react"
import cookie from 'js-cookie'
import api from "../../api/api"

export default () => {

  const router = useRouter()
  const errorMsgRef = useRef()

  const [state, setState] = useState(false)
  const [error, setErrorMsg] = useState(false)
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [confirmPassword, setConfirmedPassword] = useState('')
  const [role, setRole] = useState('')
  const [emailAlert, setEmailAlert] = useState('')
  const [passwordAlert, setPasswordAlert] = useState('')
  const [confirmPassAlert, setConfirmPassAlert] = useState('')
  const [roleAlert, setRoleAlert] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()

      setEmailAlert('')
      setPasswordAlert('')
      setConfirmPassAlert('')
      setRoleAlert('')

      if (!email) setEmailAlert('Please Enter your email')
      else if (!password || password.length < 8) setPasswordAlert('Password should be not empty and not less than 8 chars')
      else if (!confirmPassword || confirmPassword != password) setConfirmPassAlert('Please check the password')
      else if (!role) setRoleAlert('Please chose your position')
      else {
          setLoading(true)
          const data = { email, password, role }
          axios.post(`${api}/api/user/signup`, data).then(res => {

            setLoading(false)
            setErrorMsg(false)

            if (res.data.success) {

              cookie.set('token', res.data.token, {
                expires: 6000000 * 15 * 5
              })

              router.push(`/dashboard/${res.data.pathname}`)
            } else {
              setErrorMsg(true)
              errorMsgRef.current.scrollIntoView({behavior: 'smooth'})
            }
          })
      }
  }

  return (
    <div className="mt-12">
      {
        error ? (
            <div ref={errorMsgRef} className="flex justify-between items-center bg-indigo-100 rounded-sm my-3 mx-4 sm:mx-auto sm:max-w-lg">
              <p className="p-4 font-medium text-indigo-600">
                Sorry this email is already used
              </p>
              <button className="text-red-600 mx-4"
                onClick={() => setErrorMsg(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
        ) : ''
      }
      <div className="rounded-md mx-4 sm:max-w-lg sm:mx-auto sm:shadow-md sm:p-4 sm:border">
        <h1 className="pb-12 text-3xl text-center">Sign up</h1>
        <div className="">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="font-medium">Email</label>
                <input value={email} className="block border border-gray-200 rounded-md px-5 py-2 leading-6 w-full outline-none focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50" type="email" placeholder="Enter your email" 
                  onInput={(e) => setEmail(e.target.value)}
                />
              </div>
              <span className="text-xs text-red-600">{emailAlert}</span>
              
              <div className="space-y-1">
                <label className="font-medium">Password</label>
                <div className="flex items-center border rounded-md border-gray-200">
                <input value={password} className="block border-0 rounded-md px-5 py-2 leading-6 w-full outline-none focus:ring focus:ring-cyan-500 focus:ring-opacity-50" type={state ? 'text' : 'password'} placeholder="Enter your password" 
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
              </div>
              <span className="text-xs text-red-600">{passwordAlert}</span>


              <div className="space-y-1">
                <label className="font-medium">Confirm Password</label>
                <div className="flex items-center border rounded-md border-gray-200">
                <input value={confirmPassword} className="block border-0 rounded-md px-5 py-2 leading-6 w-full outline-none focus:ring focus:ring-cyan-500 focus:ring-opacity-50" type={state ? 'text' : 'password'} placeholder="Enter your password" 
                  onInput={(e) => setConfirmedPassword(e.target.value)}
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
              </div>
              <span className="text-xs text-red-600">{confirmPassAlert}</span>
              <div>
                <span className="font-medium">Sign up as</span>
                <div className="radio-container flex items-center mt-2 space-x-1 sm:space-x-2">
                    <input type="radio" value="company" name="role" id="company" className="w-4 h-4 cursor-pointer outline-none"
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <label for="company" className="cursor-pointer text-gray-500 text-base">Company</label>
                </div>
                <div className="radio-container flex items-center mt-2 space-x-1 sm:space-x-2">
                    <input type="radio" value="employee" name="role" id="employee" className="w-4 h-4 cursor-pointer outline-none"
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <label for="employee" className="cursor-pointer text-gray-500 text-base">Employee</label>
                </div>
              </div>
              <span className="text-xs text-red-600">{roleAlert}</span>
              <div>
                <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded-md border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 hover:border-cyan-700 focus:ring focus:ring-cyan-500 focus:ring-opacity-50 active:bg-cyan-700 active:border-cyan-700">
                  {
                    loading ? (
                      <svg className="animate-spin mx-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : ''
                  }
                  Sign up
                </button>
              </div>
            </form>          
          </div>
        </div>        
      </div>
    </div>
  )
}