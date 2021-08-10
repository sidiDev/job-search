import Input from "../../../components/Input/Input"

export default ({ addKill, onInput, inputValue, skills, update, state }) => {
    
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
                    <button  type="button" className={`${skills.length > 0 ? 'bg-cyan-600 text-white shadow-md ring-cyan-600 ring-offset-2 focus:ring-2' : 'bg-gray-200 text-gray-600 cursor-not-allowed'} flex items-center justify-center rounded-md mt-3 w-full py-2 m-auto outline-none`}
                        onClick={update}
                    >
                        {
                            state ? (
                            <svg className="animate-spin mx-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            ) : ''
                        }
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}