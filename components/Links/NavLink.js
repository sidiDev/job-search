import Link from "next/link"


export default ({data, pathname, name}) => {
    
        return (
            <>
                {
                    !data.loggedIn ? (
                        <li className="text-gray-700 hover:text-gray-900">
                            <Link href={pathname}>
                                <a>
                                    {name}
                                </a>
                            </Link>
                        </li>
                    ) : ''
                }
            </>
        )
}