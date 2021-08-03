import { useState } from "react"

export default () => {

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
        <div className="mt-12 mx-4 rounded sm:max-w-lg sm:mx-auto">
          <div className="">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label for="tk-pages-sign-in-email" className="font-medium">Email</label>
                  <input className="block border border-gray-200 rounded-md px-5 py-3 leading-6 w-full outline-none focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50" type="email" id="tk-pages-sign-in-email" placeholder="Enter your email" 
                    onInput={(e) => setEmail(e.target.value)}
                  />
                </div>
                <span className="text-xs text-red-600">{emailAlert}</span>
                <div className="space-y-1">
                  <label for="tk-pages-sign-in-password" className="font-medium">Password</label>
                  <input className="block border border-gray-200 rounded-md px-5 py-3 leading-6 w-full outline-none focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50" type="password" id="tk-pages-sign-in-password" placeholder="Enter your password" 
                    onInput={(e) => setPassWord(e.target.value)}
                  />
                </div>
                <span className="text-xs text-red-600">{passwordAlert}</span>
                <div>
                  <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded-md border-cyan-600 bg-cyan-600 text-white hover:bg-cyan-700 hover:border-cyan-700 focus:ring focus:ring-cyan-500 focus:ring-opacity-50 active:bg-cyan-700 active:border-cyan-700">
                    Sign In
                  </button>
                </div>
              </form>          
            </div>
          </div>        
        </div>
    )
}