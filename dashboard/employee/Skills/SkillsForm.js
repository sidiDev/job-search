import Input from "../../../components/Input/Input"

export default ({ addKill, onInput, inputValue }) => {
    return (
        <div className="mt-5">
            <form>
                <Input defaultValue={ inputValue } onInput={(e) => onInput(e.target.value) } type="text" labelName="Add new skill" />
                <button type="button" className="mt-3 w-full py-2 rounded-md bg-cyan-600 text-white m-auto outline-none shadow-md ring-cyan-600 ring-offset-2 focus:ring-2"
                    onClick={ addKill }
                >
                    Add
                </button>
            </form>
        </div>
    )
}