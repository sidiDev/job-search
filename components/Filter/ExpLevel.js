export default ({ data, setExpLevel }) => {
    return (
        <div className="mt-6">
            <span className="text-gray-700 text-lg font-medium">Experience level</span>
            <div className="mt-4 grid grid-cols-2">
                {
                    data.expLevel.map((items, idx) => {
                        return (
                            <div key={idx} className="exp-level flex items-center mt-2 space-x-1 sm:space-x-2">
                                <input type="radio" value={items} name="expLevel" id={items} className="w-4 h-4 cursor-pointer outline-none"
                                    onChange={(e) => setExpLevel(e.target.value)}
                                />
                                <label for={items} className="cursor-pointer text-sm sm:text-base">{items}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}