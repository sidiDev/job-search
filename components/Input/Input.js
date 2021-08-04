export default ({ className, onInput, labelName, placeholder, type, defaultValue }) => {
    return (
        <div className="space-y-1">
            <label className="font-medium text-gray-600">{ labelName }</label>
            <input value={ defaultValue } defaultValue={ defaultValue } className={`${ className } block border border-gray-200 rounded-md px-5 py-2 leading-6 w-full outline-none focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50`} type={ type } placeholder={ placeholder }
                onInput={ onInput }
            />
        </div>
    )
}