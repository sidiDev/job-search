import { useState } from "react"

export default () => {

  const [state, setState] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [emailAlert, setEmailAlert] = useState('')
  const [passwordAlert, setPasswordAlert] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()

      setEmailAlert('')
      setPasswordAlert('')

      if (!email) setEmailAlert('Please Enter your email')
      if (!password || password.length < 8) setPasswordAlert('Password should be not empty and not less than 8 chars')
      else {
          console.log(true);
      }
  }

  return (
      <div className="mt-12 mx-4 rounded-md sm:max-w-lg sm:mx-auto sm:shadow-md sm:p-4 sm:border">
        <h1 className="pb-12 text-3xl text-center">Login</h1>
        <div className="">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="font-medium">Email</label>
                <input className="block border border-gray-200 rounded-md px-5 py-2 leading-6 w-full outline-none focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50" type="email" placeholder="Enter your email" 
                  onInput={(e) => setEmail(e.target.value)}
                />
              </div>
              <span className="text-xs text-red-600">{emailAlert}</span>
              <div className="space-y-1">
                  <label className="font-medium">Password</label>
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
              </div>
              <span className="text-xs text-red-600">{passwordAlert}</span>
              <div>
                <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded-md border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 hover:border-cyan-700 focus:ring focus:ring-cyan-500 focus:ring-opacity-50 active:bg-cyan-700 active:border-cyan-700">
                  Login
                </button>
              </div>
            </form>          
          </div>
        </div>        
      </div>
  )
}