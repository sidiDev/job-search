export default ({ setUpdated, updatedMsgRef }) => {
    return (
        <div ref={updatedMsgRef} className="flex justify-between items-center bg-indigo-100 rounded-sm my-3">
            <p className="p-4 font-medium text-indigo-600">
                Profile updated successfuly
            </p>
            <button className="text-red-600 mx-4"
            onClick={() => setUpdated(false)}
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            </button>
        </div>
    )
}