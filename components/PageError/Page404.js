export default () => {
    return (
        <div className="flex justify-center items-center h-screen mx-4">
            <div className="text-center">
                <span className="text-cyan-600 font-semibold sm:text-lg">
                    404 Error
                </span>
                <h1 className="text-2xl text-gray-800 font-semibold sm:text-4xl">Page not found</h1>
                <p className="text-gray-400 mt-2">
                    Sorry, we couldn't find the page you're looking for. 
                </p>
                <a href="/" className="mt-2 flex items-center justify-center text-cyan-600 font-semibold">
                    Go back home
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    )
}