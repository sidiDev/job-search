import { useRouter } from "next/router";

export default ({ setState, enableScrolling, handleSubmit }) => {

    const router = useRouter()

    const clear = () => {

        let { search , location = '' } = router.query
        
        enableScrolling();
        setState(false);
        
        if (search) {
            router.push({
                pathname: '/',
                query: { search, location }
            })
        } else {
            router.push('/')
        }
    }

    return (
        <div className="flex space-x-3 mt-6">
            <button type="submit" className="px-12 py-1.5 rounded-md bg-cyan-600 text-white outline-none shadow-md ring-cyan-600 ring-offset-2 focus:ring-2"
                onSubmit={(e) => {
                    setState(false);
                    enableScrolling()
                    handleSubmit(e)
                }}
            >
                Apply
            </button>
            <button type="button" className="px-4 py-1.5 outline-none rounded-md text-gray-500 ring-gray-400 focus:ring-1"
                onClick={clear}
            >
                Clear
            </button>
        </div>
    )
}