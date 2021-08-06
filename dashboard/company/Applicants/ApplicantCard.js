export default ({ setState }) => {
    return (
        <li className="p-4 shadow rounded-md duration-200 border cursor-pointer hover:border-cyan-500 hover:shadow-none"
            onClick={() => setState(true)}
        >
            <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full">
                    <img src="/profile.png" className="w-full h-full rounded-full" />
                </div>
                <div className="space-y-2">
                    <span className="text-lg text-gray-800 font-semibold block">Sidi jiddou</span>
                    <span className="text-gray-500">Front-End developer</span>
                </div>
            </div>
        </li>
    )
}