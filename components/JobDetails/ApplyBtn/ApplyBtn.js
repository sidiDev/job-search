import Link from "next/link"
import { useState } from "react"
import CompleteAccountInfo from "../../Modals/CompleteAccountInfo"

export default ({  data, w }) => {

    const [state, setState] = useState(false)

    const { userData } = data
    
    return (
        <>
        {
            data.loggedIn ? (
                <>
                    {
                        data.userData.role == 'employee' ? (
                            <>
                                {
                                    data.userData.completed ? (
                                        <Link href={'/apply/full-stack-developer'}>
                                            <a>
                                                <button type="submit" className={`${w} mt-3 py-2 rounded-md bg-cyan-600 text-white outline-none shadow-md ring-cyan-600 ring-offset-2 focus:ring-2`}>
                                                    Apply for this job
                                                </button>
                                            </a>
                                        </Link>
                                    ) : (
                                        <button type="submit" className={`${w} mt-3 py-2 rounded-md bg-cyan-600 text-white outline-none shadow-md ring-cyan-600 ring-offset-2 focus:ring-2`}
                                            onClick={() => setState(true)}
                                        >
                                            Apply for this job
                                        </button>
                                    )
                                }
                                {
                                    state ? (
                                        <CompleteAccountInfo
                                            data={data}
                                            p="Please complete your account information to be able to apply"
                                            setState={setState}
                                        />
                                    ) : ''
                                }

                            </>
                        ) : ''
                    }
                </>
            ) : (
                <Link href={'/login'}>
                    <a>
                        <button type="submit" className={`${w} mt-3 py-2 rounded-md bg-cyan-600 text-white outline-none shadow-md ring-cyan-600 ring-offset-2 focus:ring-2`}>
                            Apply for this job
                        </button>
                    </a>
                </Link>
            )
        }
        </>
    )
}