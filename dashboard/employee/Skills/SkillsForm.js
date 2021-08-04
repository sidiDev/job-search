import Input from "../../../components/Input/Input"

export default ({ addKill, onInput, inputValue, skills }) => {
    return (
        <div className="mt-5">
            <form onSubmit={(e) => {
                e.preventDefault();
                addKill()
            } }>
                <Input defaultValue={ inputValue } onInput={(e) => onInput(e.target.value) } type="text" labelName="Add new skill" />
                <div className="flex space-x-3">
                    <button type="button" className={`${inputValue ? 'bg-cyan-600 text-white shadow-md ring-cyan-600 ring-offset-2 focus:ring-2' : 'text-gray-500 cursor-not-allowed'} mt-3 w-full py-2 rounded-md border m-auto outline-none`}
                        onClick={ addKill }
                    >
                        Add
                    </button>
                    <button  type="submit" className={`${skills.length > 0 ? 'bg-cyan-600 text-white shadow-md ring-cyan-600 ring-offset-2 focus:ring-2' : 'bg-gray-200 text-gray-600 cursor-not-allowed'} rounded-md mt-3 w-full py-2 m-auto outline-none`}>
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}