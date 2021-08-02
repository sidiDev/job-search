import Link from "next/link"

export default ({ w }) => {
    return (
        <Link href="/apply/full-stack-developer">
            <a>
                <button type="submit" className={`${w} mt-3 py-2 rounded-md bg-cyan-600 text-white outline-none shadow-md ring-cyan-600 ring-offset-2 focus:ring-2`}>
                    Apply for this job
                </button>
            </a>
        </Link>
    )
}