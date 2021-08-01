import { useRouter } from "next/router";

export default ({ setState, enableScrolling }) => {

    const router = useRouter()

    return (
        <div className="flex space-x-3 mt-6">
            <button type="submit" className="px-12 py-1.5 rounded-md bg-indigo-600 text-white outline-none shadow-md ring-indigo-600 ring-offset-2 focus:ring-2"
                onClick={() => {
                    setState(false);
                    enableScrolling()
                }}
            >
                Aplly
            </button>
            <button type="button" className="px-4 py-1.5 outline-none rounded-md text-gray-500 ring-gray-400 focus:ring-1"
                onClick={() => 
                {
                    router.push('/');
                    enableScrolling();
                    setState(false);
                }}
            >
                Clear
            </button>
        </div>
    )
}